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

  static getIESResults = async (data) => {
    var respuestaData = await Respuestas.find({ 'rol': '1' });
    var statistics = {
      total_de_respuestas: respuestaData.length,
      metadata: []
    };

    data.forEach((categoria, categoriaIndex) => {
      var payload = {
        categoria: categoria.header,
        indicadores: []
      };

      (categoria.indicadores).forEach((indicador, indicadorIndex) => {
        
        var indicadorData = {
          titulo: indicador.titulo,
          metadata: []
        };

        (indicador.preguntas).forEach((pregunta, preguntaIndex) => {
          // PREGUNTA MODULO, ID, TEXTO, RESPUESTAS ARRAY.
          var preguntaPayload = {
            id: pregunta.id,
            tipo: pregunta.modulo,
            texto: pregunta.texto,
            resultados: [],
          };

          if (pregunta.modulo !== 'abierta') {
            (pregunta.respuestas).forEach((respuesta, respuestaIndex) => {
               var respuestaPayload = {
                 texto: respuesta.texto,
                 total: this.getStudentTotalPerResponse(respuestaData, pregunta.id, respuesta.valor)
               };

               (preguntaPayload.resultados).push(respuestaPayload);
            });
          }
          
          (indicadorData.metadata).push(preguntaPayload);
        });
        // GUARDAMOS LOS RESULTADOS EN EL PAYLOAD DE INDICADORDATA.
        (payload.indicadores).push(indicadorData);
      });
      (statistics.metadata).push(payload);
    });
    return statistics;
  }

  static getStudentResults = async (data, entidad) => {
    var statistics = {};
    var respuestaData = await Respuestas.find({ '$and': [{ 'rol': '0' }, { 'entidad': entidad }] });
    statistics.entidad = entidad;
    statistics.total_de_respuestas = respuestaData.length;
    statistics.metadata = [];

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
        statistics.metadata.push(payload);
      });
    });
    return statistics;
  };
}

module.exports = IESRecolector;
