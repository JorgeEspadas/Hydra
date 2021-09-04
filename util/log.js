const chalk = require('chalk');

class Log {
    static error(message) {
        console.log(chalk.bgRgb(255,0,0).bold(chalk.rgb(255,255,255).bold(message)));
    }
    
    static normal(source, message) {
        console.log(`${chalk.bgWhite(chalk.rgb(0,0,0).bold('['+source+']'))} ${chalk.greenBright.bold(message)}`);
    }

    static warning(source, message) {
        console.log(`${chalk.bgRgb(255,255,0).bold(chalk.rgb(0,0,0).bold('['+source+']'+ ' '+message+' '))}`);
    }
}

module.exports = Log;