const Config = require("./config");
const Respuestas = require('../models/Respuestas');

class IESRecolector {
  static getStudentTotalPerResponse = (resultado, idPregunta, idRespuesta) => {
    var totalHits = 0;

    resultado.forEach((item, index) => {
      var resArray = item.respuestas;
      resArray.forEach((res, i) => {
        if (res.id == idPregunta && res.valor == idRespuesta) {
          totalHits++;
        }
      });
    });

    return totalHits;
  }

  static getStudentResults = async (data, entidad) => {
    var statistics = [];
    var respuestaData = await Respuestas.find({ '$and': [{ 'rol': '0' }, { 'entidad': entidad }] });

    data[0]["indicadores"].forEach(async (indicador, indicadorIndex) => {
      // titulo del indicador
      (indicador.preguntas).forEach(async (pregunta, preguntaIndex) => {
        //modulo, id, texto de la pregunta.
        var payload = {
          id: pregunta.id,
          texto: pregunta.texto,
          resultados: []
        };
        (pregunta.respuestas).forEach(async (respuesta, respuestaIndex) => {
          // valor y texto de cada respuesta
          var rp = {
            texto: respuesta.texto,
            total: this.getStudentTotalPerResponse(respuestaData, pregunta.id, respuesta.valor)
          };
          payload.resultados.push(rp)
        });
        statistics.push(payload);
      });
    });
    return statistics;
  };
}

module.exports = IESRecolector;
