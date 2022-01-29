class DatosEmpresas{
    //Esta clase contiene todas las operaciones
    constructor(datos){
        this.datos = datos;
    }

    getPregunta(idPregunta, idRespuesta) {
        let respuestas = [];
        let id_pregunta;
        (this.datos).forEach(element => {
            element.respuestas.forEach(item => {
                if(item.id === idPregunta){
                    id_pregunta = idPregunta;
                    if(item.modulo === "rango"){
                        respuestas.push(item.valor[0]);
                    }else{
                        item.valor.forEach(opcion => {
                            if(opcion._id === idRespuesta){
                                respuestas.push(opcion);
                            }
                       });
                    }
                }
            });
        }); 
        
        return {idPregunta : idPregunta, result: respuestas};
    }

    getResLen(idPregunta, idRespuesta){
        return this.getPregunta(idPregunta, idRespuesta).length;
    }

    getDatosLen(){
        return this.datos.length;
    }

    //devuelve el promedio de años para la pregunta 1
    promedioAntiguedadEmpresas (){
        var today = new Date();
        var year = today.getFullYear();
        var aniosEmpresas = this.getPregunta("empresas_1","0");
        var sumaAnios = 0;
        aniosEmpresas.result.forEach(element => {
            sumaAnios = sumaAnios + (year - parseInt(element.valor,10));
        })
    
        return (sumaAnios / aniosEmpresas.result.length);
    }
   
    //devuelve la suma de todos los resultados de una pregunta segun una de sus respuestas
    sumaResultadosPorPregunta(idPregunta, idRespuesta){
        let sumatoria = 0;
        let data = this.getPregunta(idPregunta,idRespuesta);
        data.result.forEach(element => {
            sumatoria = sumatoria + parseInt(element.valor,10);
        })
        return sumatoria;
    }
    
    //promedio de algun valor
    promedioPorResultados(suma){
        return suma/this.getDatosLen();
    }
    porcentajesPorRespuesta (idPregunta, idRespuesta){
        var data = this.getPregunta(idPregunta,idRespuesta);
        return (data.result.length /this.datos.length)*100;
    }
}

module.exports = DatosEmpresas;