const Config = require("./config");
const Respuestas = require('../models/Respuestas');

class IESRecolector {
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

static getResults = async (data) => {
    var statistics = [];
    for (var indicadorIndex in data[0]["indicadores"]) {
      var indicador = data[0]["indicadores"][indicadorIndex];
      // acceso a cada indicador de estudiantes.

      for (var preguntasIndex in indicador["preguntas"]) {
        var pregunta = indicador["preguntas"][preguntasIndex];
        var idPregunta = pregunta["id"];
        var textoPregunta = pregunta["texto"];

        var resultados = [];

        for (var respuestaIndex in pregunta["respuestas"]) {
          var respuesta = pregunta["respuestas"][respuestaIndex];
          var respuestaValor = respuesta["valor"];
          var respuestaTexto = respuesta["texto"];

          var respuestaPayload = {
            texto: respuestaTexto,
            total: await Config.getIESdata(0, idPregunta, respuestaValor),
          };

          resultados.push(respuestaPayload);
        }
        statistics.push({
          idp: idPregunta,
          texto: textoPregunta,
          resultados: resultados,
        });
      }
    }
    return statistics;
  };
}

module.exports = IESRecolector;
