class DatosEmpresas{
    //Esta clase contiene todas las operaciones
    constructor(datos){
        this.datos = datos;
    }

    //
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
        return this.getPregunta(idPregunta, idRespuesta).result.length;
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
            sumaAnios = sumaAnios + (year - parseInt(element,10));
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
        return (data.result.length/this.datos.length)*100;
    }

    //preguntas tipos tablas que pidan porcentajes por empresas
    resultadosTablas(idPregunta,idRespuesta){
        let valor = 0;
        let respuestas = [];
        let suma = 0;
        let texto;
        (this.datos).forEach(element => {
            element.respuestas.forEach(item => {
                if(item.id === idPregunta){
                    if(item.modulo==="tabla"){
                        item.valor.forEach(opcion => {
                            suma = suma + parseInt(opcion.valor);                            
                        });
                        item.valor.forEach(opcion => { 
                            if(opcion._id===idRespuesta){
                                valor = parseInt(opcion.valor,10)/suma*100;
                                texto = opcion.texto;
                            }                    
                        });
                        respuestas.push({
                            empresa:element.nombre,
                            valor:valor
                        });
                    }                    
                }
            });
            suma = 0;
        }); 
        return {texto:texto,respuestas:respuestas};
    }

    //para las preguntas tipo tabla 5,6,7
    resultadoTablasAllEmpresas(idPregunta,idRespuesta){
        let res = 0;
        let total = 0;
        (this.datos).forEach(element => {
            element.respuestas.forEach(item => {
                if(item.id === idPregunta){
                    if(item.modulo==="tabla"){
                        item.valor.forEach(opcion => {
                            total = total + parseInt(opcion.valor); 
                            if(opcion._id===idRespuesta){
                                res = res + parseInt(opcion.valor);
                             }                            
                        });
                    }                    
                }
            });
        }); 
        return res/total*100;
    }

    valoresModa(idPregunta){
        let resultados = [];
        (this.datos).forEach(element => {
            element.respuestas.forEach(item => {
                if(item.id === idPregunta){
                    item.valor.forEach(opcion =>{
                        resultados.push(opcion.texto);
                    });               
                }
            });
        }); 
        return resultados.sort();
    }

    moda(idPregunta,elementos){
        let valores = this.valoresModa(idPregunta);
        let result = [];
        let valor1 = valores[0];
        let cont = 1;
        for(let i = 1; i < valores.length; i++){
            if(valor1 === valores[i]){
                cont= cont + 1;
            }else{
                result.push({
                    total: cont,
                    texto: valor1
                });
                cont = 1;
                valor1 = valores[i];
            }
            if(i === valores.length-1){
                result.push({
                    total: cont,
                    texto: valor1
                });
                cont = 0;
                valor1 = valores[i];
            }
        }
        result.sort(((a, b) => b.total - a.total));
        let moda_5 = [];

        if(elementos <= valores.length){
            for(let i = 0; i < elementos; i++){
                moda_5.push(result[i]);
            }
        }else{
            moda_5 = result[0];
        }
        return moda_5;
    }

    tabla_35(idPregunta){
        let respuestas = [];
        let res = [];
        (this.datos).forEach(element => {
            element.respuestas.forEach(item => {
                if(item.id === idPregunta){
                    item.valor.forEach(opcion => {
                        respuestas.push(opcion.texto);
                    });
                    res.push({
                        nombre:element.nombre,
                        resultados:respuestas
                    });
                    respuestas = [];
                }
            });
        }); 
        return res;
    }
}

module.exports = DatosEmpresas;