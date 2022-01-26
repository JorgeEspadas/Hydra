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

    promedioAntiguedadEmpresas (){
        //Falta obtener el total de años restanto al año actual cada fecha de cada empresa
        var today = new Date();
        var year = today.getFullYear();
        console.log(year);
        var aniosEmpresas = this.getPregunta("empresas_1","0");
        var sumaAnios = 0;
        aniosEmpresas.result.forEach(element => {
            sumaAnios = sumaAnios + (year - parseInt(element,10));
        })
    
        return sumaAnios / aniosEmpresas.result.length;
    }
    
    promedioPorRespuesta (idPregunta, idRespuesta){
        var data = this.getPregunta(idPregunta,idRespuesta);
        return data.result.length /this.datos.length;
    }
}

module.exports = DatosEmpresas;