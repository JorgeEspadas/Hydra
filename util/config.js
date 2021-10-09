const DEV_MODE = process.env.DEV_MODE;
const log = require('./log');
const NodeCache = require('node-cache');
const cache = new NodeCache({stdTTL: 86400}); // el cache se reinicia cada 24 horas.

class Config {

    // acceso a cache, un reinicio al servidor lo truena :v
    static addToCache(key, value){
        cache.set(key, value);
        log.normal('CONFIG', 'Guardados datos en cache');
    }

    // el nombre del metodo es suficiente.
    static getFromCache(key){
        return cache.get(key);
    }

    // banea un token (aka lo pone en una blacklist almacenada en cache.)
    static banToken(token){
        var obj = cache.get('blacklist');
        if(obj === undefined){
            var data = [];
            data.push(token);
            cache.set('blacklist', data);
            log.normal('CONFIG', 'Blacklist iniciada.');
        }else{
            try{
                var array = Array.from(obj);
                if(array.find(token)!=undefined){
                    array.push(token);
                    cache.set('blacklist', array);
                    log.normal('CONFIG', 'Blacklist actualizada');
                    console.log(array);
                }else{
                    return;
                }
            }catch(error){
                console.log(error.toString());
            }
        }
    }

    // true si el token esta baneado.
    static isTokenBanned(token) {
        var obj = cache.get('blacklist');
        if(obj === undefined){
            return false;
        }else{
            var array = Array.from(obj);
            return (array.find(element => element === token) === undefined) ? false : true;
        }
    }

    // perdoname dios.
    static getDevMode() {
        return (DEV_MODE === "true") ? true : false;
    }

    static getRol(number){
        if(number != 3){
            return (number == 1) ? "IES":"Empresa";
        }else{
            return "notvalid";
        }
    }
}

module.exports = Config;