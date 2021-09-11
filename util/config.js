const DEV_MODE = process.env.DEV_MODE;

class Config {
    // pinche javascript toma los .env como strings y aparentemente tengo que hacer esto
    // para poder saber si el modo dev esta prendido o apagado.
    static getDevMode() {
        return (DEV_MODE === "true") ? true : false;
    }
}

module.exports = Config;