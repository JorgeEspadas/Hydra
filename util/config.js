const DEV_MODE = process.env.DEV_MODE;
const log = require('./log');
const NodeCache = require('node-cache');
const crypto = require('js-sha512');
const cryptoKey = process.env.CRYPTO_KEY;
const Respuestas = require('../models/Respuestas');
const cache = new NodeCache({ stdTTL: 86400 }); // el cache se reinicia cada 24 horas.
const jwt = require('jsonwebtoken');
const Temporal = require('../models/Entidad');
const User = require('../models/User');
const tokenKey = process.env.TOKEN_KEY;

class Config {

    // verifica si existe algún usuario en mongoDB.
    // si no se crea por defecto la cuenta:
    // admin@uacam.mx con su contraseña: administrador2022
    // si se quiere crear una cuenta desde Hydra, la password debe ir en MD5 y luego ser pasada por SHA512.
    // see encryptData()
    static firstInit = async() => {
        var lookup = await User.find().exec();
        if(lookup == null || lookup.length == 0){
            const firstUser = User({
                email: 'admin@uacam.mx',
                nombre: 'Administrador',
                telefono: '0000000000',
                rol: 3,
                password: this.encryptData(this.hashData('administrador2022'))
            });

            try{
                await firstUser.save();
                log.warning('PRIMER ARRANQUE', 'Se ha creado la primera cuenta satisfactoriamente');
            }catch(e){
                log.error(e);
            }
        }
    }

    // acceso a cache, un reinicio al servidor lo truena :v
    static addToCache(key, value) {
        cache.set(key, value);
        log.normal('CONFIG', 'Se guardo informacion en cache en la llave: '+key.toString());
    }

    // el nombre del metodo es suficiente.
    static getFromCache(key) {
        return cache.get(key);
    }

    static getIESdata = async (rol, idPregunta, idRespuesta) => {
        var resultado = await Respuestas.aggregate([
            { "$match": { "rol": rol } },
            {
                "$project": {
                    "respuestas": {
                        "$map": {
                            "input": {
                                "$filter": {
                                    "input": "$respuestas",
                                    "as": "el",
                                    "cond": {
                                        "$and": [
                                            { "$eq": ["$$el.valor", idRespuesta.toString()] },
                                            { "$eq": ["$$el.id", idPregunta.toString()] }
                                        ]
                                    }
                                }
                            },
                            "as": "item",
                            "in": "$$item.id"
                        }
                    },
                }
            },
        ]).unwind({ path: '$respuestas', preserveNullAndEmptyArrays: false }).exec();
        return resultado;
    }

    static interpretMongooseConnection(number) {
        switch (number) {
            case 0:
                return 'Desconectado';
            case 1:
                return 'Conectado';
            case 2:
                return 'Conectando';
            case 3:
                return 'Desconectando';
            default:
                return 'Desconocido';
        }
    }

    static generateJWT(objectData) {
        return jwt.sign(objectData, tokenKey);
    }

    static decryptJWT(token) {
        return jwt.verify(token, tokenKey);
    }

    static encryptData(data) {
        return crypto.sha512.hmac(cryptoKey, data);
    }

    static hashData(data) {
        return require('crypto').createHash('md5').update(data).digest('hex');
    }

    static burnTemporalKey(key) {
        (async () => {
            try {
                var hashLookup = await Temporal.findOne({ hash: key });
                var decodedToken = Config.decryptJWT(hashLookup.token);
                if (decodedToken.usos > 0) {
                    // eliminamos un uso y guardamos
                    decodedToken.usos--;
                    var newToken = Config.generateJWT(decodedToken);
                    hashLookup.token = newToken;
                    await hashLookup.save();
                    console.log('Token Actualizado');
                    return true;
                } else {
                    // borramos el token
                    console.log('Remaining uses; ' + decodedToken.usos);
                    await Temporal.deleteOne({ hash: key }).exec();
                    console.log('Hash erased');
                    return false;
                }
            } catch (e) { }
        })()
    }

    static decryptData(data) {
        return crypto.sha512.hmac()
    }

    static secondsToTime(seconds) {
        function pad(s) {
            return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60 * 60));
        var minutes = Math.floor(seconds % (60 * 60) / 60);
        var seconds = Math.floor(seconds % 60);

        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    }

    // banea un token (aka lo pone en una blacklist almacenada en cache.)
    static banToken(token) {
        var obj = cache.get('blacklist');
        if (obj === undefined) {
            var data = [];
            data.push(token);
            cache.set('blacklist', data);
            log.normal('CONFIG', 'Blacklist iniciada.');
        } else {
            try {
                var array = Array.from(obj);
                if (array.find(token) != undefined) {
                    array.push(token);
                    cache.set('blacklist', array);
                    log.normal('CONFIG', 'Blacklist actualizada');
                    console.log(array);
                } else {
                    return;
                }
            } catch (error) {
                console.log(error.toString());
            }
        }
    }

    // true si el token esta baneado.
    static isTokenBanned(token) {
        var obj = cache.get('blacklist');
        if (obj === undefined) {
            return false;
        } else {
            var array = Array.from(obj);
            return (array.find(element => element === token) === undefined) ? false : true;
        }
    }

    // perdoname dios.
    static getDevMode() {
        return (DEV_MODE === "true") ? true : false;
    }

    static getRol(number) {
        if (number == 4) return 'ALU';
        if (number != 3) {
            return (number == 1) ? "IES" : "Empresa";
        } else {
            return "notvalid";
        }
    }
}

module.exports = Config;