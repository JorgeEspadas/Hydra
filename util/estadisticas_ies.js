const Config = require('./config');

class IESRecolector {
    static getResults = async (data) => {
        var statistics = [];
        for (var indicadorIndex in data[0]['indicadores']) {
            var indicador = data[0]['indicadores'][indicadorIndex];
            // acceso a cada indicador de estudiantes.

            for (var preguntasIndex in indicador['preguntas']) {
                var pregunta = indicador['preguntas'][preguntasIndex];
                var idPregunta = pregunta['id'];
                var textoPregunta = pregunta['texto'];

                var resultados = [];

                for (var respuestaIndex in pregunta['respuestas']) {
                    var respuesta = pregunta['respuestas'][respuestaIndex];
                    var respuestaValor = respuesta['valor'];
                    var respuestaTexto = respuesta['texto'];

                    var respuestaPayload = {
                        'texto': respuestaTexto,
                        'total': await Config.getIESdata(0, idPregunta, respuestaValor)
                    }

                    resultados.push(respuestaPayload);
                }
                statistics.push({
                    "idp" : idPregunta,
                    "texto": textoPregunta,
                    "resultados": resultados
                });
            }
        }
        return statistics;
    }
}

module.exports = IESRecolector;