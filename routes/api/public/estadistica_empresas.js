const express = require('express');
const responseHandler = require('../../../util/web_responses');
const Config = require('../../../util/config');
const Estadisticas_empresas = require("../../../util/Estadisticas_empresas");
const router = express.Router();
const Respuestas = require('../../../models/Respuestas');
var datos;
var result;
router.get('/resEmpresas', async (req, res) => {
    try{
        datos = await Respuestas.find({"rol":2});
        result = new Estadisticas_empresas(datos);
        //res.status(200).json(responseHandler.validResponse(resultadosEstadisticas()));
        res.status(200).json(responseHandler.validResponse(result.promedioPorResultados(result.sumaResultadosPorPregunta("empresas_30","1"))));
    }catch(error){
        res.status(200).json(responseHandler.errorResponse({message: error.toString()}));
    }
});

const resultadosEstadisticas = () => {
    let estadisticas = [
        {
            indicador:"1",
            pregunta: "Año de constitución de la empresa",
            contenido: "Promedio de Antigüedad de las empresa",
            idPregunta:"empresas_1",
            resultado:result.promedioAntiguedadEmpresas(),
            unidad_de_medida:"Años"
        },
        {
            indicador:"2",
            pregunta: "Departamentos con los que cuenta su empresa",
            contenido: "Departamentos con las que cuentan las empresas",
            idPregunta:"empresas_2",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"2.1",
            pregunta:"Área de comunicaciones.",
            contenido: "Porcentaje de empresas con el Área de comunicaciones",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.2",
            pregunta:"Área de gestión, planificación y estrategia de servicios.",
            contenido: "Porcentaje de empresas con el Área de gestión, planificación y estrategia de servicios",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.3",
            pregunta:"Área de control de riesgos.",
            contenido: "Porcentaje de empresas con el Área de contol de riesgos",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.4",
            pregunta:"Área de negocio y aplicaciones empresariales.",
            contenido: "Porcentaje de empresas con el Área de negocio y aplicaciones empresariales",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.5",
            pregunta:"Área de Centro de atención al usuario.",
            contenido: "Porcentaje de empresas con el Área de Atención al usuario",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.6",
            pregunta:"Área de sistemas e infraestructuras.",
            contenido: "Porcentaje de empresas con el Área de Sistemas e infraestructuras",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.7",
            pregunta:"Área de desarrollo y nuevas tecnologías",
            contenido: "Porcentaje de empresas con el Área de desarrollo y nuevas tecnologías",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"2.8",
            pregunta:"Área de contabilidad y finanzas.",
            contenido: "Porcentaje de empresas con el Área de Contabilidad y Finanzas",
            idPregunta:"empresas_2",
            resultado:result.porcentajesPorRespuesta("empresas_2","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"3",
            pregunta:"Cada cuanto tiempo realiza encuestas sobre el clima laboral",
            contenido: "Tiempo en que las empresas realizan encuestas sobre el clima laboral",
            idPregunta:"empresas_3",
            resultado:((result.getResLen("empresas_3","2")+result.getResLen("empresas_3","3")+result.getResLen("empresas_3","4"))/result.getDatosLen())*100,
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"3.1",
            pregunta:"0",
            contenido: "Porcentaje de empresas que no realizan encuestas sobre el clima laboral",
            idPregunta:"empresas_3",
            resultado:result.porcentajesPorRespuesta("empresas_3","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"3.2",
            pregunta:"3 meses",
            contenido: "Porcentaje de empresas que realizan encuestas sobre el clima laboral cada 3 meses",
            idPregunta:"empresas_3",
            resultado:result.porcentajesPorRespuesta("empresas_3","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"3.3",
            pregunta:"6 meses",
            contenido: "Porcentaje de empresas que realizan encuestas sobre el clima laboral cada 6 meses",
            idPregunta:"empresas_3",
            resultado:result.porcentajesPorRespuesta("empresas_3","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"3.4",
            pregunta:"12 meses",
            contenido: "Porcentaje de empresas que realizan encuestas sobre el clima laboral cada 12 meses",
            idPregunta:"empresas_3",
            resultado:result.porcentajesPorRespuesta("empresas_3","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4",
            pregunta:"¿Cuáles son los cuatro criterios de contratación de personal más importantes para su empresa?",
            contenido: "Criterios de contratación de personal más importantes para las empresas",
            idPregunta:"empresas_4",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"4.1",
            pregunta:"Experiencia",
            contenido: "Porcentaje de empresas con el criterio de contratación por experiencia",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.2",
            pregunta:"Certificaciones.",
            contenido: "Porcentaje de empresas con el criterio de contratación por certificaciones",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.3",
            pregunta:"Responsabilidad",
            contenido: "Porcentaje de empresas con el criterio de contratación por responsabilidad",
            idPregunta:"empresas_4.3",
            resultado:result.porcentajesPorRespuesta("empresas_4","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.4",
            pregunta:"Ganas de aprender",
            contenido: "Porcentaje de empresas con el criterio de contratación por ganas de aprender",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.5",
            pregunta:"Habilidades para trabajo en equipo",
            contenido: "Porcentaje de empresas con el criterio de contratación por habilidades para trabajo en equipo",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.6",
            pregunta:"Habilidades para la resolución de problemas",
            contenido: "Porcentaje de empresas con el criterio de contratación por habilidades para la resolución de problemas",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.7",
            pregunta:"Innovador",
            contenido: "Porcentaje de empresas con el criterio de contratación por innovador",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.8",
            pregunta:"Receptivo",
            contenido: "Porcentaje de empresas con el criterio de contratación por receptivo",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"4.9",
            pregunta:"Organizado en sus tiempos",
            contenido: "Porcentaje de empresas con el criterio de contratación por organización de sus tiempos",
            idPregunta:"empresas_4",
            resultado:result.porcentajesPorRespuesta("empresas_4","9"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"5",
            pregunta:"Número TOTAL de empleados por tipo de contrato",
            contenido: "Empleados de la industria de software por tipo de contrato",
            idPregunta:"empresas_5",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"5.1",
            pregunta:"Dependientes",
            contenido: "Porcentaje de  empleados dependientes EN LA EMPRESA",
            idPregunta:"empresas_5",
            resultado:result.porcentajesPorRespuesta("empresas_5","1"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"5.2",
            pregunta:"Independientes",
            contenido: "Porcentaje de  empleados Independientes EN LA EMPRESA ",
            idPregunta:"empresas_5",
            resultado:result.porcentajesPorRespuesta("empresas_5","2"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"5.3",
            pregunta:"Aprendices/Practicantes",
            contenido: "Porcentaje de empleados Aprendices/Practicantes EN LA EMPRESA",
            idPregunta:"empresas_5",
            resultado:result.porcentajesPorRespuesta("empresas_5","3"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"5.4",
            pregunta:"Temporales",
            contenido: "Porcentaje de empleados temporales EN LA EMPRESA ",
            idPregunta:"empresas_5",
            resultado:result.porcentajesPorRespuesta("empresas_5","4"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"6",
            pregunta:"Número TOTAL de empleados según nivel de estudios.",
            contenido: "Grado de estudios de los empleados de la industria de software",
            idPregunta:"empresas_6",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"6.1",
            pregunta:"Educación básica",
            contenido: "Porcentaje del Número de empleados con Educación básica, por empresa",
            idPregunta:"empresas_6",
            resultado:result.porcentajesPorRespuesta("empresas_6","1"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"6.2",
            pregunta:"Educación Técnica",
            contenido: "Porcentaje del Número de empleados con Educación técnica.",
            idPregunta:"empresas_6",
            resultado:result.porcentajesPorRespuesta("empresas_6","2"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"6.3",
            pregunta:"Licenciatura",
            contenido: "Porcentaje del Número de empleados con licenciatura",
            idPregunta:"empresas_6",
            resultado:result.porcentajesPorRespuesta("empresas_6","3"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"6.4",
            pregunta:"Postgrado",
            contenido: "Porcentaje del Número de empleados con postgrado",
            idPregunta:"empresas_6",
            resultado:result.porcentajesPorRespuesta("empresas_6","4"),
            unidad_de_medida:"Empleados"
        },
        {
            indicador:"7",
            pregunta:"Número de programadores por nivel de estudio, según tipo de contratación",
            contenido: "Grado de estudios de los programadores de la industria de software",
            idPregunta:"empresas_7",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"7.1",
            pregunta:"Educación Técnica",
            contenido: "Porcentaje del Número de programadores con Educación técnica.",
            idPregunta:"empresas_7",
            resultado:result.porcentajesPorRespuesta("empresas_7","1"),
            unidad_de_medida:"Programadores"
        },
        {
            indicador:"7.2",
            pregunta:"Licenciatura",
            contenido: "Porcentaje del Número de programadores con licenciatura",
            idPregunta:"empresas_7",
            resultado:result.porcentajesPorRespuesta("empresas_7","2"),
            unidad_de_medida:"Programadores"
        },
        {
            indicador:"7.3",
            pregunta:"Postgrado",
            contenido: "Porcentaje del Número de programadores con Postgrado",
            idPregunta:"empresas_7",
            resultado:result.porcentajesPorRespuesta("empresas_7","3"),
            unidad_de_medida:"Programadores"
        },
        {
            indicador:"8",
            pregunta:"¿Cuál es el porcentaje de rotación de empleados?",
            contenido: "Porcentaje de rotación de empleados ",
            idPregunta:"empresas_8",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"8.1",
            pregunta:"1% al 10%",
            contenido: "Porcentaje de rango de rotacion de 1% al 10% de empleados en la industria del software",
            idPregunta:"empresas_8",
            resultado:result.porcentajesPorRespuesta("empresas_8","1"),
            unidad_de_medida:"Porcentaje"
        },
        {
            indicador:"8.2",
            pregunta:"11% al 20%",
            contenido: "Porcentaje de rango de rotacion de 11% al 20% de empleados en la industria del software",
            idPregunta:"empresas_8",
            resultado:result.porcentajesPorRespuesta("empresas_8","2"),
            unidad_de_medida:"Porcentaje"
        },
        {
            indicador:"8.3",
            pregunta:"21% al 30%",
            contenido: "Porcentaje de rango de rotacion de 21% al 30% de empleados en la industria del software", 
            idPregunta:"empresas_8",
            resultado:result.porcentajesPorRespuesta("empresas_8","3"),
            unidad_de_medida:"Porcentaje"
        },
        {
            indicador:"8.4",
            pregunta:"31% al 40%",
            contenido: "Porcentaje de rango de rotacion de 31% al 140% de empleados en la industria del software",
            idPregunta:"empresas_8",
            resultado:result.porcentajesPorRespuesta("empresas_8","4"),
            unidad_de_medida:"Porcentaje"
        },
        {
            indicador:"8.5",
            pregunta:"más del 41%",
            contenido: "Porcentaje de rango de rotacion de más del 40% de empleados en la industria del software",
            idPregunta:"empresas_8",
            resultado:result.porcentajesPorRespuesta("empresas_8","5"),
            unidad_de_medida:"Pocentaje"
        },
        {
            indicador:"9",
            pregunta:"¿Cómo está constituida la empresa?",
            contenido: "Porcentaje de las empresas por tipo de sociedad",
            idPregunta:"empresas_9",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"9.1",
            pregunta:"Sociedad en nombre colectivo.",
            contenido: "Porcentaje de las empresas con sociedad en nombre colectivo",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"9.2",
            pregunta:"Sociedad en comandita simple.",
            contenido: "Porcentaje de las empresas con sociedad en comandita simple",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"9.3",
            pregunta:"Sociedad de responsabilidad limitada.",
            contenido: "Porcentaje de las empresas con sociedad de responsabilidad limitada",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"9.4",
            pregunta:"Sociedad anónima.",
            contenido: "Porcentaje de las empresas con sociedad anónima",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"9.5",
            pregunta:"Sociedad en comandita por acciones.",
            contenido: "Porcentaje de las empresas con sociedad en comandita por acciones",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"9.6",
            pregunta:"Sociedad cooperativa.",
            contenido: "Porcentaje de las empresas con sociedad cooperativa",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"9.7",
            pregunta:"Persona Física.",
            contenido: "Porcentaje de las empresas como persona física",
            idPregunta:"empresas_9",
            resultado:result.porcentajesPorRespuesta("empresas_9","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"10",
            pregunta:"¿Utiliza indicadores financieros en los procesos que involucran tomas de decisiones en la empresa? ",
            contenido: "Indicadores financieros CON base EN su frecuencia de uso.",
            idPregunta:"empresas_10",
            resultado:"",
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"10.1",
            pregunta:"Permanentemente",
            contenido: "Porcentaje de empresas que utilizan los indicadores financieros permanentemente.",
            idPregunta:"empresas_10",
            resultado:result.porcentajesPorRespuesta("empresas_10","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"10.2",
            pregunta:"Cuando los indicadores existentes lo permiten",
            contenido: "Porcentaje de empresas que utilizan los indicadores financieros cuando los existentes lo permitan.",
            idPregunta:"empresas_10",
            resultado:result.porcentajesPorRespuesta("empresas_10","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"10.3",
            pregunta:"En ocasiones",
            contenido: "Porcentaje de empresas que utilizan los indicadores financieros en ocaciones.",
            idPregunta:"empresas_10",
            resultado:result.porcentajesPorRespuesta("empresas_10","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"10.4",
            pregunta:"No.",
            contenido:"Porcentaje de empresas que no utilizan los indicadores financieros.",
            idPregunta:"empresas_10",
            resultado:result.porcentajesPorRespuesta("empresas_10","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"11",
            pregunta:"¿Cómo es la liquidez de su negocio?",
            contenido: "Nivel de desempeño de liquidez.",
            idPregunta:"empresas_11",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"11.1",
            pregunta:"Excelente",
            contenido: "Porcentaje de las empresas con un excelente nivel de desempeño de liquidez.",
            idPregunta:"empresas_11",
            resultado:result.porcentajesPorRespuesta("empresas_11","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"11.2",
            pregunta:"Buena",
            contenido: "Porcentaje de las empresas con un buen nivel de desempeño de liquidez.",
            idPregunta:"empresas_11",
            resultado:result.porcentajesPorRespuesta("empresas_11","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"11.3",
            pregunta:"Suficiente",
            contenido: "Porcentaje de las empresas con un suficiente nivel de desempeño de liquidez.",
            idPregunta:"empresas_11",
            resultado:result.porcentajesPorRespuesta("empresas_11","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"11.4",
            pregunta:"Insuficiente",
            contenido: "Porcentaje de las empresas con un insuficiente nivel de desempeño de liquidez.",
            idPregunta:"empresas_11",
            resultado:result.porcentajesPorRespuesta("empresas_11","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"12",
            pregunta:"¿Cómo es la solvencia de su negocio?",
            contenido: "Nivel de desempeño de solvencia.",
            idPregunta:"empresas_12",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"12.1",
            pregunta:"Excelente",
            contenido: "Porcentaje de las empresas con un excelente nivel de desempeño de solvencia",
            idPregunta:"empresas_12",
            resultado:result.porcentajesPorRespuesta("empresas_12","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"12.2",
            pregunta:"Buena",
            contenido: "Porcentaje de las empresas con un buen nivel de desempeño de solvencia",
            idPregunta:"empresas_12",
            resultado:result.porcentajesPorRespuesta("empresas_12","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"12.3",
            pregunta:"Suficiente",
            contenido: "Porcentaje de las empresas con un suficiente nivel de desempeño de solvencia",
            idPregunta:"empresas_12",
            resultado:result.porcentajesPorRespuesta("empresas_12","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"12.4",
            pregunta:"Insuficiente",
            contenido: "Porcentaje de las empresas con un suficiente nivel de desempeño de solvencia",
            idPregunta:"empresas_12",
            resultado:result.porcentajesPorRespuesta("empresas_12","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"13",
            pregunta:"¿Cómo es la rentabilidad de su negocio?",
            contenido: "Nivel de desempeño de rentabilidad de su negocio.",
            idPregunta:"empresas_13",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"13.1",
            pregunta:"Excelente",
            contenido: "Porcentaje de las empresas con un excelente nivel de desempeño de rentabilidad",
            idPregunta:"empresas_13",
            resultado:result.porcentajesPorRespuesta("empresas_13","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"13.2",
            pregunta:"Buena",
            contenido: "Porcentaje de las empresas con un buen nivel de desempeño de rentabilidad",
            idPregunta:"empresas_13",
            resultado:result.porcentajesPorRespuesta("empresas_13","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"13.3",
            pregunta:"Suficiente",
            contenido: "Porcentaje de las empresas con un suficiente nivel de desempeño de rentabilidad",
            idPregunta:"empresas_13",
            resultado:result.porcentajesPorRespuesta("empresas_13","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"13.4",
            pregunta:"Insuficiente",
            contenido: "Porcentaje de las empresas con un insuficiente nivel de desempeño de rentabilidad",
            idPregunta:"empresas_13",
            resultado:result.porcentajesPorRespuesta("empresas_13","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14",
            pregunta:"¿Cuáles de estos indicadores financieros de liquidez utiliza la empresa?",
            contenido: "Indicadores financieros de liquidez que utilizan las empresas.",
            idPregunta:"empresas_14",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"14.1",
            pregunta:"Capital De Trabajo",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Capital de trabajo",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.2",
            pregunta:"Razón Corriente",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Razón corriente",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.3",
            pregunta:"Prueba Acida",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Prueba acida",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.4",
            pregunta:"Pasivo Corriente / Inventarios",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Pasivo Corriente /  Inventarios",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.5",
            pregunta:"Indicadores De Endeudamiento",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Indicadores de endeudamiento",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.6",
            pregunta:"Patrimonio Neto",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Patrimonio neto",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.7",
            pregunta:"Nivel De Endeudamiento",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Nivel de endeudamiento",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.8",
            pregunta:"Endeudamiento Sin Valorizaciones",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Endeudamiento sin valorizaciones",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"14.9",
            pregunta:"Activos Fijos / Patrimonio Líquido",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de liquidez: Activos Fijos / Patrimonio Líquido",
            idPregunta:"empresas_14",
            resultado:result.porcentajesPorRespuesta("empresas_14","9"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"15",
            pregunta:"¿Cuáles de estos indicadores financieros de rentabilidad utiliza la empresa?",
            contenido: "Indicadores financieros de rentabilidad que utilizan las empresas.",
            idPregunta:"empresas_15",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"15.1",
            pregunta:"Rentabilidad Bruta",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de rentabilidad: Rentabilidad bruta.",
            idPregunta:"empresas_15",
            resultado:result.porcentajesPorRespuesta("empresas_15","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"15.2",
            pregunta:"Rentabilidad Operacional",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de rentabilidad: Rentabilidad operacional.",
            idPregunta:"empresas_15",
            resultado:result.porcentajesPorRespuesta("empresas_15","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"15.3",
            pregunta:"Rentabilidad Neta",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de rentabilidad: Rentabilidad neta",
            idPregunta:"empresas_15",
            resultado:result.porcentajesPorRespuesta("empresas_15","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"15.4",
            pregunta:"Rentabilidad Del Patrimonio 132",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de rentabilidad: Rentabilidad del patrimonio 132",
            idPregunta:"empresas_15",
            resultado:result.porcentajesPorRespuesta("empresas_15","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"15.5",
            pregunta:"Rentabilidad Del Activo Total",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de rentabilidad: Rentabilidad del activo total",
            idPregunta:"empresas_15",
            resultado:result.porcentajesPorRespuesta("empresas_15","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16",
            pregunta:"¿Cuáles de estos indicadores financieros de actividad utiliza la empresa?",
            contenido: "Indicadores financieros de actividad que utilizan las empresas.",
            idPregunta:"empresas_16",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"16.1",
            pregunta:"Rotación Del Patrimonio Líquido",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Rotación del patrimonio líquido",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.2",
            pregunta:"Rotación Del Activo Total",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Rotación del activo total",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.3",
            pregunta:"Rotación Del Capital De Trabajo",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Rotación del capital de trabajo",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.4",
            pregunta:"Rotación De Cartera",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Rotación de cartera",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.5",
            pregunta:"Periodo De Cobro",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Periodo de cobro",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.6",
            pregunta:"Rotación Inventarios",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Rotación de inventarios",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.7",
            pregunta:"Ciclo Operacional",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Ciclo operacional",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"16.8",
            pregunta:"Periodo De Pago A Proveedores",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de actividad: Periodo de pago a proveedores",
            idPregunta:"empresas_16",
            resultado:result.porcentajesPorRespuesta("empresas_16","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"17",
            pregunta:"¿Cuáles de estos indicadores de endeudamiento de actividad utiliza la empresa?",
            contenido: "Indicadores financieros de endeudamiento que utilizan las empresas.",
            idPregunta:"empresas_17",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"17.1",
            pregunta:"Patrimonio Neto",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de endeudamiento: Patrimonio neto",
            idPregunta:"empresas_17",
            resultado:result.porcentajesPorRespuesta("empresas_17","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"17.2",
            pregunta:"Nivel De Endeudamiento",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de endeudamiento: Nivel de endeudamiento",
            idPregunta:"empresas_17",
            resultado:result.porcentajesPorRespuesta("empresas_17","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"17.3",
            pregunta:"Endeudamiento Sin Valorizaciones",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de endeudamiento: Endeudamiento sin valorizaciones",
            idPregunta:"empresas_17",
            resultado:result.porcentajesPorRespuesta("empresas_17","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"17.4",
            pregunta:"Activos Fijos / Patrimonio Liquido Concentración Endeudamiento A Corto Plazo",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de endeudamiento: Activos fijos / Patrimonio liquido concentración endeudamiento a corto plazo",
            idPregunta:"empresas_17",
            resultado:result.porcentajesPorRespuesta("empresas_17","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"17.5",
            pregunta:"Endeudamiento / Ventas",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de endeudamiento: Endeudamiento / Ventas",
            idPregunta:"empresas_17",
            resultado:result.porcentajesPorRespuesta("empresas_17","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"17.6",
            pregunta:"Endeudamiento Financiero / Ventas",
            contenido: "Porcentaje de las empresas que utilizan indicadores financieros de endeudamiento: Endeudamiento financiero / Ventas",
            idPregunta:"empresas_17",
            resultado:result.porcentajesPorRespuesta("empresas_17","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"18",
            pregunta:"¿Adicional a los reportes básicos de contabilidad (balance general, estado de resultados), qué reportes a nivel contable y financiero generan?",
            contenido: "Usabilidad de los reportes básicos a nivel contable y financiero de las empresas.",
            idPregunta:"empresas_18",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"18.1",
            pregunta:"Estado de situación patrimonial",
            contenido: "Porcentaje de empresas que generan reportes de estados de situación patrimonial como reporte básico a nivel contable y financiero",
            idPregunta:"empresas_18",
            resultado:result.porcentajesPorRespuesta("empresas_18","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"18.2",
            pregunta:"Estado de flujo de efectivo",
            contenido: "Porcentaje de empresas que generan reportes de estados de flujo de efectivo como reporte básico a nivel contable y financiero",
            idPregunta:"empresas_18",
            resultado:result.porcentajesPorRespuesta("empresas_18","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"18.3",
            pregunta:"Estado de fuentes y aplicaciones",
            contenido: "Porcentaje de empresas que generan reportes de estados de flujo de efectivo como reporte básico a nivel contable y financiero",
            idPregunta:"empresas_18",
            resultado:result.porcentajesPorRespuesta("empresas_18","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"18.4",
            pregunta:"Otro.",
            contenido: "Porcentaje de empresas que generan otros reportes básicos a nivel contable y financiero",
            idPregunta:"empresas_18",
            resultado:result.porcentajesPorRespuesta("empresas_18","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"18.5",
            pregunta:"Ninguno",
            contenido: "Porcentaje de empresas que no generan reportes básicos a nivel contable y financiero",
            idPregunta:"empresas_18",
            resultado:result.porcentajesPorRespuesta("empresas_18","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"19",
            pregunta:"¿Qué problemas identifica en sus procesos de toma de decisión en el campo financiero?",
            contenido: "Problemas que identifican las empresas en sus procesos de toma de decisiones en el campo financiero.",
            idPregunta:"empresas_19",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"19.1",
            pregunta:"Falta de información",
            contenido: "Porcentaje de las empresas que indentifican la falta de información como problema en la toma de desiciones en el campo financiero",
            idPregunta:"empresas_19",
            resultado:result.porcentajesPorRespuesta("empresas_19","1"),
            unidad_de_medida:"empresas"
        },
        {
            indicador:"19.2",
            pregunta:"Información obsoleta",
            contenido: "Porcentaje de las empresas que indentifican la información obsoleta como problema en la toma de desiciones en el campo financiero",
            idPregunta:"empresas_19",
            resultado:result.porcentajesPorRespuesta("empresas_19","2"),
            unidad_de_medida:"empresas"
        },
        {
            indicador:"19.3",
            pregunta:"Información no es oportuna para el proceso",
            contenido: "Porcentaje de las empresas que indentifican que la información no es oportuna para el proceso como problema en la toma de desiciones en el campo financiero",
            idPregunta:"empresas_19",
            resultado:result.porcentajesPorRespuesta("empresas_19","3"),
            unidad_de_medida:"empresas"
        },
        {
            indicador:"19.4",
            pregunta:"Información poco concisa",
            contenido: "Porcentaje de las empresas que indentifican la información poco concisa como problema en la toma de desiciones en el campo financiero",
            idPregunta:"empresas_19",
            resultado:result.porcentajesPorRespuesta("empresas_19","4"),
            unidad_de_medida:"empresas"
        },
        {
            indicador:"19.5",
            pregunta:"Otro.",
            contenido: "Porcentaje de las empresas que indentifican otros problemas en la toma de desiciones en el campo financiero",
            idPregunta:"empresas_19",
            resultado:result.porcentajesPorRespuesta("empresas_19","5"),
            unidad_de_medida:"empresas"
        },
        {
            indicador:"20",
            pregunta:"¿Con base en qué información toma la decisión de invertir? ",
            contenido: "Motivos para decidir una inversión.",
            idPregunta:"empresas_20",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"20.1",
            pregunta:"Análisis financiero de su empresa",
            contenido: "Porcentaje de las empresas que invierten a partir de un análisis financiero de su empresa",
            idPregunta:"empresas_20",
            resultado:result.porcentajesPorRespuesta("empresas_20","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"20.2",
            pregunta:"Análisis financiero del sector",
            contenido: "Porcentaje de las empresas que invierten a partir de un análisis financiero de un analisis financiero del sector",
            idPregunta:"empresas_20",
            resultado:result.porcentajesPorRespuesta("empresas_20","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"20.3",
            pregunta:"Por una fuente externa",
            contenido: "Porcentaje de las empresas que invierten a partir de una fuente externa",
            idPregunta:"empresas_20",
            resultado:result.porcentajesPorRespuesta("empresas_20","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"20.4",
            pregunta:"Oportunidad del negocio (necesidad)",
            contenido: "Porcentaje de las empresas que invierten a partir de una oportunidad del negocio",
            idPregunta:"empresas_20",
            resultado:result.porcentajesPorRespuesta("empresas_20","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"20.5",
            pregunta:"Otros.",
            contenido: "Porcentaje de las empresas que invierten a partir de otra información",
            idPregunta:"empresas_20",
            resultado:result.porcentajesPorRespuesta("empresas_20","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"21",
            pregunta:"¿Cómo realiza la proyección financiera de la empresa? ",
            contenido: "Opciones con las que las empresas realizan su proyección financiera.",
            idPregunta:"empresas_21",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"21.1",
            pregunta:"Realiza un análisis horizontal y lo proyecta",
            contenido: "Porcentaje de las empresas  que realizan un análisis horizontal y lo proyectan  para su proyección financiera.",
            idPregunta:"empresas_21",
            resultado:result.porcentajesPorRespuesta("empresas_21","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"21.2",
            pregunta:"Proyecta sus estados con el IPC",
            contenido: "Porcentaje de las empresas  que proyectan sus estados con el IPC para su proyección financiera.",
            idPregunta:"empresas_21",
            resultado:result.porcentajesPorRespuesta("empresas_21","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"21.3",
            pregunta:"Otros",
            contenido: "Porcentaje de las empresas que realizan otras opciones para su proyección financiera.",
            idPregunta:"empresas_21",
            resultado:result.porcentajesPorRespuesta("empresas_21","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"22",
            pregunta:"¿Qué entidades toma como referencia para posicionar su empresa en el sector empresarial? ",
            contenido: "Entidades que las empresas toman como referencia para posicionarse en el sector empresarial.",
            idPregunta:"empresas_22",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"22.1",
            pregunta:"Cámara Comercio.",
            contenido: "Porcentaje de empresas que toman como referencia la Camara de comercio para posicionarse en el sector empresarial.",
            idPregunta:"empresas_22",
            resultado:result.porcentajesPorRespuesta("empresas_22","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"22.2",
            pregunta:"Cámara Nacional de la Industria Electrónica de Telecomunicaciones y Tecnologías de la Comunicación.",
            contenido: "Porcentaje de empresas que toman como referencia la Cámara Nacional de la Industria Electrónica de Telecomunicaciones y Tecnologías de la Comunicación para posicionarse en el sector empresarial.",
            idPregunta:"empresas_22",
            resultado:result.porcentajesPorRespuesta("empresas_22","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"22.3",
            pregunta:"Otro.",
            contenido: "Porcentaje de empresas que toman como referencia otras entidades para posicionarse en el sector empresarial.",
            idPregunta:"empresas_22",
            resultado:result.porcentajesPorRespuesta("empresas_22","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"22.4",
            pregunta:"No compara.",
            contenido: "Porcentaje de empresas que no compara las entidades para posicionarse en el sector empresarial.",
            idPregunta:"empresas_22",
            resultado:result.porcentajesPorRespuesta("empresas_22","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23",
            pregunta:"¿Qué índices emplea para posicionar su empresa en relación al sector empresarial?",
            contenido: "Indices empleados por las empresas para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"23.1",
            pregunta:"Capital De Trabajo",
            contenido: "Porcentaje de las empresas que emplean el Capital de trabajo para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.2",
            pregunta:"Razón Corriente",
            contenido: "Porcentaje de las empresas que emplean Razón corriente para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.3",
            pregunta:"Prueba Acida",
            contenido: "Porcentaje de las empresas que emplean la Prueba acida para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.4",
            pregunta:"Nivel De Endeudamiento",
            contenido: "Porcentaje de las empresas que emplean el Nivel de endeudamiento para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.5",
            pregunta:"Activos Fijos / Patrimonio Liquido",
            contenido: "Porcentaje de las empresas que emplean los Activos fijos / Patrimonio liquido para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.6",
            pregunta:"Rentabilidad Bruta",
            contenido: "Porcentaje de las empresas que emplean la Rentabilidad bruta para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.7",
            pregunta:"Rentabilidad Neta",
            contenido: "Porcentaje de las empresas que emplean la Rentabilidad neta para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.8",
            pregunta:"Rotación Del Activo Total",
            contenido: "Porcentaje de las empresas que emplean la Rotación del activo total para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.9",
            pregunta:"Rotación Del Capital De Trabajo",
            contenido: "Porcentaje de las empresas que emplean la Rotación del capital de trabajo para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","9"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.10",
            pregunta:"Rotación De Cartera",
            contenido: "Porcentaje de las empresas que emplean la Rotación de cartera para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","10"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.11",
            pregunta:"Periodo De Cobro",
            contenido: "Porcentaje de las empresas que emplean el Periodo de cobro para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","11"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.12",
            pregunta:"Periodo De Pago A Proveedores",
            contenido: "Porcentaje de las empresas que emplean el Periodo de pago a proveedores para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","12"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.13",
            pregunta:"Patrimonio Neto",
            contenido: "Porcentaje de las empresas que emplean el Patrimonio neto para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","13"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.14",
            pregunta:"Endeudamiento / Ventas",
            contenido: "Porcentaje de las empresas que emplean el Endeudamiento / ventas para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","14"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.15",
            pregunta:"Endeudamiento Financiero / Ventas",
            contenido: "Porcentaje de las empresas que emplean el Endeudamiento financiero / ventas para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","15"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"23.16",
            pregunta:"Otro. ¿Cuál",
            contenido: "Porcentaje de las empresas que emplean otros indices para posicionarse en relación al sector empresarial.",
            idPregunta:"empresas_23",
            resultado:result.porcentajesPorRespuesta("empresas_23","16"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"24",
            pregunta:"¿La empresa establece metas financieras? ",
            contenido: "Porcentaje de empresas que establecen metas financieras.",
            idPregunta:"empresas_24",
            resultado:result.porcentajesPorRespuesta("empresas_24","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"25",
            pregunta:"¿Cuenta la empresa con la posibilidad de acceso a crédito bancario?",
            contenido: "Porcentaje de las empresas con la posibilidad de acceso a crédito bancario.",
            idPregunta:"empresas_25",
            resultado:result.porcentajesPorRespuesta("empresas_25","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"26",
            pregunta:"¿Cuenta la entidad con acceso a recursos del capital? ",
            contenido: "Porcentaje de empresas con acceso a recursos de su capital.",
            idPregunta:"empresas_26",
            resultado:result.porcentajesPorRespuesta("empresas_26","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"27",
            pregunta:"¿Existe participación de capital extranjero en el capital social? ",
            contenido: "Porcentaje de empresas con participación de capital extranjero en su capital social.",
            idPregunta:"empresas_27",
            resultado:result.porcentajesPorRespuesta("empresas_27","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"28",
            pregunta:"¿Cuenta la empresa con financiación de fomento gubernamental?",
            contenido: "Porcentaje de las empresas con  financiamiento gubernamental.",
            idPregunta:"empresas_28",
            resultado:result.porcentajesPorRespuesta("empresas_28","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"29",
            pregunta:"¿Qué software usan para manejar la información contable y financiera?",
            contenido: "Softwares que usan las empresas para manejar la información contable y financiera.",
            idPregunta:"empresas_29",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"29.1",
            pregunta:"Herramientas en Excel",
            contenido: "Porcentaje de las empresas que utilizan Herramientas de Excel para manejar la información contable y financiera.",
            idPregunta:"empresas_29",
            resultado:result.porcentajesPorRespuesta("empresas_29","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"29.2",
            pregunta:"ERP (Enterprise Resource Planner)",
            contenido: "Porcentaje de las empresas que utilizan ERP (Enterprise Resource Planner) para manejar la información contable y financiera.",
            idPregunta:"empresas_29",
            resultado:result.porcentajesPorRespuesta("empresas_29","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"29.3",
            pregunta:"Programa contabilidad",
            contenido: "Porcentaje de las empresas que utilizan Programas de contabilidad para manejar la información contable y financiera.",
            idPregunta:"empresas_29",
            resultado:result.porcentajesPorRespuesta("empresas_29","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"29.4",
            pregunta:"Desarrollo propio",
            contenido: "Porcentaje de las empresas que utilizan programas de desarrollo propio para manejar la información contable y financiera.",
            idPregunta:"empresas_29",
            resultado:result.porcentajesPorRespuesta("empresas_29","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"29.5",
            pregunta:"Otro.",
            contenido: "Porcentaje de las empresas que utilizan otros programas para manejar la información contable y financiera.",
            idPregunta:"empresas_29",
            resultado:result.porcentajesPorRespuesta("empresas_29","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"30",
            pregunta:"¿Cuál es el número de equipos de cómputo con los que cuenta su empresa?",
            contenido: "Equipos de cómputo con los que cuenta las empresas",
            idPregunta:"empresas_30",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"30.1",
            pregunta:"Número de servidores",
            contenido: "Promedio de servidores que cuentan las empresas",
            idPregunta:"empresas_30",
            resultado:result.promedioPorResultados(result.sumaResultadosPorPregunta("empresas_30","1")),
            unidad_de_medida:"servidores"
        },
        {
            indicador:"30.2",
            pregunta:"Número de computadoras personales",
            contenido: "Promedio de equipos de computo que cuentan las empresas",
            idPregunta:"empresas_30",
            resultado:result.result.promedioPorResultados(result.sumaResultadosPorPregunta("empresas_30","2")),
            unidad_de_medida:"equipos"
        },
        {
            indicador:"31",
            pregunta:"¿Qué medios de almacenamiento para los Backups hace uso su empresa?",
            contenido: "Medios de almacenamiento para los Backups que las empresas utilizan.",
            idPregunta:"empresas_31",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"31.1",
            pregunta:"En cinta",
            contenido: "Porcentaje de las empresas que utilizan cintas como medios de almacenamiento para los Backups",
            idPregunta:"empresas_31",
            resultado:result.porcentajesPorRespuesta("empresas_31","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"31.2",
            pregunta:"En disco duro",
            contenido: "Porcentaje de las empresas que utilizan discos duros como medios de almacenamiento para los Backups",
            idPregunta:"empresas_31",
            resultado:result.porcentajesPorRespuesta("empresas_31","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"31.3",
            pregunta:"En Red",
            contenido: "Porcentaje de las empresas que utilizan la red como medios de almacenamiento para los Backups",
            idPregunta:"empresas_31",
            resultado:result.porcentajesPorRespuesta("empresas_31","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"31.4",
            pregunta:"En la nube",
            contenido: "Porcentaje de las empresas que utilizan la nube como medios de almacenamiento para los Backups",
            idPregunta:"empresas_31",
            resultado:result.porcentajesPorRespuesta("empresas_31","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32",
            pregunta:"¿Cuál es el tipo de Red con el cuenta su empresa?",
            contenido: "Tipos de Red con el cuentan las empresas.",
            idPregunta:"empresas_32",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"32.1",
            pregunta:"Ethernet",
            contenido: "Porcentaje de las empresas que utilizan Ethernet ",
            idPregunta:"empresas_32",
            resultado:(result.porcentajesPorRespuesta("empresas_32","1")+result.porcentajesPorRespuesta("empresas_32","2")),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.1.1",
            pregunta:"10-100 mbps",
            contenido: "Porcentaje de las empresas que utilizan Ethernet de 10-100 mbps",
            idPregunta:"empresas_32",
            resultado:result.porcentajesPorRespuesta("empresas_32","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.1.2",
            pregunta:"1 gbps",
            contenido: "Porcentaje de las empresas que utilizan Ethernet de 1 gbps",
            idPregunta:"empresas_32",
            resultado:result.porcentajesPorRespuesta("empresas_32","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.2",
            pregunta:"Wifi",
            contenido: "Porcentaje de las empresas que utilizan Wifi",
            idPregunta:"empresas_32",
            resultado:(result.porcentajesPorRespuesta("empresas_32","3")+result.porcentajesPorRespuesta("empresas_32","4")+result.porcentajesPorRespuesta("empresas_32","5")+result.porcentajesPorRespuesta("empresas_32","6")),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.2.1",
            pregunta:"2 GHz",
            contenido: "Porcentaje de las empresas que utilizan Wifi de 2GHz",
            idPregunta:"empresas_32",
            resultado:result.porcentajesPorRespuesta("empresas_32","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.2.2",
            pregunta:"3 GHz",
            contenido: "Porcentaje de las empresas que utilizan Wifi de 3GHz",
            idPregunta:"empresas_32",
            resultado:result.porcentajesPorRespuesta("empresas_32","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.2.3",
            pregunta:"4 GHz",
            contenido: "Porcentaje de las empresas que utilizan Wifi de 4GHz",
            idPregunta:"empresas_32",
            resultado:result.porcentajesPorRespuesta("empresas_32","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"32.2.4",
            pregunta:"5 GHz",
            contenido: "Porcentaje de las empresas que utilizan Wifi de 5GHz",
            idPregunta:"empresas_32",
            resultado:result.porcentajesPorRespuesta("empresas_32","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"33",
            pregunta:"¿Cuál es el ancho de banda de conexión a internet con el que cuenta su empresa?",
            contenido: "Ancho de banda de conexión a internet con el que cuentan las  empresas.",
            idPregunta:"empresas_33",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"33.1",
            pregunta:"20-50 Mbps",
            contenido: "Porcentaje de las empresas con el ancho de banda de 20-50 Mbps",
            idPregunta:"empresas_33",
            resultado:result.porcentajesPorRespuesta("empresas_33","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"33.2",
            pregunta:"80-100 Mbps",
            contenido: "Porcentaje de las empresas con ancho de banda de 80-100 Mbps",
            idPregunta:"empresas_33",
            resultado:result.porcentajesPorRespuesta("empresas_33","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"33.3",
            pregunta:"110-más Mbps",
            contenido: "Porcentaje de las empresas con ancho de banda de 100-más Mbps",
            idPregunta:"empresas_33",
            resultado:result.porcentajesPorRespuesta("empresas_33","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"34",
            pregunta:"¿Ha desarrollado proyectos en investigación y desarrollo (I&D) en los últimos 3 años?",
            contenido: "Porcentaje de empresas que han desarrollado proyectos en investigación y desarrollo (I&D) en los últimos 3 años.",
            idPregunta:"empresas_34",
            resultado:result.porcentajesPorRespuesta("empresas_34","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"35",
            pregunta:"¿Qué departamentos para los proyectos de investigación y desarrollo posee su empresa? (puede seleccionar más de uno).",
            contenido: "Nivel de innovación de las empresas",
            idPregunta:"empresas_35",
            resultado:result.porcentajesPorRespuesta("empresas_35","1"),
            unidad_de_medida:"Nivel de innovación"
        },
        {
            indicador:"36",
            pregunta:"¿Cuáles de las siguientes actividades de innovación realiza la empresa? ",
            contenido: "Actividades de innovación",
            idPregunta:"empresas_36",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"36.1",
            pregunta:"Desarrollar nuevos productos que satisfagan las necesidades del mercado",
            contenido: "Porcentaje de empresas que desarrollan nuevos productos que satisfagan las necesidades del mercado",
            idPregunta:"empresas_36",
            resultado:result.porcentajesPorRespuesta("empresas_36","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"36.2",
            pregunta:"Aplicación de tecnologías de procesos adecuados para producir nuevos productos",
            contenido: "Porcentaje de empresas que aplican tecnologías de procesos adecuados para producir nuevos productos",
            idPregunta:"empresas_36",
            resultado:result.porcentajesPorRespuesta("empresas_36","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"36.3",
            pregunta:"Desarrollo y adopción de nuevos productos y procesos tecnológicos para satisfacer las necesidades futuras",
            contenido: "Porcentaje de empresas que desarrollan nuevos productos y procesos tecnológicos para satisfacer las necesidades futuras",
            idPregunta:"empresas_36",
            resultado:result.porcentajesPorRespuesta("empresas_36","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"36.4",
            pregunta:"Capacidad de responder a las actividades tecnológicas accidentales y oportunidades inesperadas creadas por los competidores",
            contenido: "Porcentaje de empresas que responden a las actividades tecnológicas accidentales y oportunidades inesperadas creadas por los competidores",
            idPregunta:"empresas_36",
            resultado:result.porcentajesPorRespuesta("empresas_36","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"37",
            pregunta:"¿Tiene la empresa productos certificados? En caso de respuesta afirmativa, determine el país de la cual obtuvo la certificación y año de obtención.",
            contenido: "Porcentaje de empresas con productos certificados",
            idPregunta:"empresas_37",
            resultado:result.porcentajesPorRespuesta("empresas_37","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"37.1",
            pregunta:"¿Cuántos de sus productos han sido certificados en total?",
            contenido: "Promedio de productos certificados por todas las empresas.",
            idPregunta:"empresas_37.1",
            resultado:(result.sumaResultadosPorPregunta("empresas_37.1", "1")/getResLen("empresas_37","1")),
            unidad_de_medida:"Productos certificados"
        },
        {
            indicador:"38",
            pregunta:"¿Ha solicitado la empresa patentes en el país y en el exterior en los últimos 3 años? (en caso de respuesta positiva determinar cuántas y en qué países). ",
            contenido: "Porcentaje de empresas que han solicitado patentes en el pais y en exterior en los ultimos 3 años",
            idPregunta:"empresas_38",
            resultado:result.porcentajesPorRespuesta("empresas_38","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"38.1",
            pregunta:"¿Cuántas patentes ha solicitado en total?",
            contenido: "Promedio de patentes solicitados por las empresas.",
            idPregunta:"empresas_38.1",
            resultado:(result.sumaResultadosPorPregunta("empresas_38.1", "1")/getResLen("empresas_38","1")),
            unidad_de_medida:"Patentes solisitados"
        },
        {
            indicador:"39",
            pregunta:"¿La empresa ha obtenido  patentes en el país y en el exterior en los últimos 3 años? ",
            contenido: "Porcentaje de empresas que han obtenido patentes en el pais y en exterior en los ultimos 3 años",
            idPregunta:"empresas_39",
            resultado:result.porcentajesPorRespuesta("empresas_39","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"39.1",
            pregunta:"¿Cuántas patentes ha obtenido en total?",
            contenido: "Promedio de patentes obtenidos por las empresas.",
            idPregunta:"empresas_39.1",
            resultado:(result.sumaResultadosPorPregunta("empresas_39.1", "1")/getResLen("empresas_39","1")),
            unidad_de_medida:"Patentes obtenidos"
        },
        {
            indicador:"40",
            pregunta:"¿La empresa ha obtenido la concesión de licencia de producto o de tecnología en los últimos 3 años?",
            contenido: "Porcentaje de empresas que han obtenido la concesión de licencia de producto o de tecnologia en los ultimos 3 años",
            idPregunta:"empresas_40",
            resultado:result.porcentajesPorRespuesta("empresas_40","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"40.1",
            pregunta:"¿Cuántos productos o tecnologías han obtenido la concesión de licencia en total?",
            contenido: "Promedio de productos o tecnologias que han obtenido la concesión de licencias por las empresas.",
            idPregunta:"empresas_40.1",
            resultado:(result.sumaResultadosPorPregunta("empresas_40.1", "1")/getResLen("empresas_40","1")),
            unidad_de_medida:"Productos o tecnologias que han obtenido la concesión de licencias"
        },
        {
            indicador:"41",
            pregunta:"¿Tiene la empresa procesos certificados? ",
            contenido: "Porcentaje de empresas con procesos certificados",
            idPregunta:"empresas_41",
            resultado:result.porcentajesPorRespuesta("empresas_41","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"41.1",
            pregunta:"¿Cuántos procesos certificados ha obtenido?",
            contenido: "Numero total de procesos certificados por las empresas",
            idPregunta:"empresas_41.1",
            resultado:(result.sumaResultadosPorPregunta("empresas_41.1", "1")/getResLen("empresas_41","1")),
            unidad_de_medida:"Procesos certificados"
        },
        {
            indicador:"42",
            pregunta:"¿Su empresa está registrada en el Registro Nacional de Instituciones y Empresas Científicas y Tecnológicas (RENIECYT)?",
            contenido: "Porcentaje total de empresas registradas en el RENIECYT",
            idPregunta:"empresas_42",
            resultado:result.porcentajesPorRespuesta("empresas_42","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"43",
            pregunta:"¿Cuáles son los principales lenguajes de programación utilizados por la empresa?",
            contenido: "Los cinco principales modas de lenguajes de programación utilizados por las emprezas.",
            idPregunta:"empresas_43",
            resultado:result.porcentajesPorRespuesta("empresas_",""),
            unidad_de_medida:""
        },
        {
            indicador:"44",
            pregunta:"¿Cuáles son los principales administradores de base de datos utilizados por la empresa?",
            contenido: "Las cinco principales modas de administradores de base de datos utilizados por las empresas",
            idPregunta:"empresas_44",
            resultado:result.porcentajesPorRespuesta("empresas_",""),
            unidad_de_medida:"DBA"
        },
        {
            indicador:"45",
            pregunta:"¿Tecnología para desarrollo  en la nube utilizados por la empresa?",
            contenido: "Las cinco principales modas de las tecnologias para el desarrollo en la nube utilizado por la empresa.",
            idPregunta:"empresas_45",
            resultado:result.porcentajesPorRespuesta("empresas_",""),
            unidad_de_medida:"tecnologias para el desarrollo en la nube"
        },
        {
            indicador:"46",
            pregunta:"¿Qué tipo de productos de software ofrece su empresa?",
            contenido: "Productos de software que ofrecen las empresas",
            idPregunta:"empresas_46",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"46.1",
            pregunta:"Desarrollo de software a la medida",
            contenido: "Porcentaje de las empresas que realizan el desarrollo de software a la medida",
            idPregunta:"empresas_46",
            resultado:result.porcentajesPorRespuesta("empresas_46","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"46.2",
            pregunta:"Integración de sistemas",
            contenido: "Porcentaje de las empresas que realizan la integración del sistema",
            idPregunta:"empresas_46",
            resultado:result.porcentajesPorRespuesta("empresas_46","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"46.3",
            pregunta:"Mantenimiento y soporte de software",
            contenido: "Porcentaje de las empresas que realizan mantenimiento y soporte de software",
            idPregunta:"empresas_46",
            resultado:result.porcentajesPorRespuesta("empresas_46","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"46.4",
            pregunta:"Proyectos integrales con uso de tecnología RFID",
            contenido: "Porcentaje de las empresas que realizan proyectos integrales con uso de tecnologia RFID",
            idPregunta:"empresas_46",
            resultado:result.porcentajesPorRespuesta("empresas_46","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"46.5",
            pregunta:"Otros.",
            contenido: "Porcentaje de las empresas que realizan otros productos de software",
            idPregunta:"empresas_46",
            resultado:result.porcentajesPorRespuesta("empresas_46","4"),
            unidad_de_medida:"Empresas"
        },  
        {
            indicador:"47",
            pregunta:"¿Cuáles son las métricas actuales que utiliza la empresa para medir el costo de un producto de software?",
            contenido: "Métricas actuales que utilizan las empresas para medir el costo de un producto de software.",
            idPregunta:"empresas_47",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"47.1",
            pregunta:"tiempo",
            contenido: "Porcentaje de las empresas que utilizan el tiempo como métrica para medir el costo de un producto de software",
            idPregunta:"empresas_47",
            resultado:result.porcentajesPorRespuesta("empresas_47","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"47.2",
            pregunta:"esfuerzo",
            contenido: "Porcentaje de las empresas que utilizan el esfuerzo como métrica para medir el costo de un producto de software",
            idPregunta:"empresas_47",
            resultado:result.porcentajesPorRespuesta("empresas_47","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"47.3",
            pregunta:"personal requerido",
            contenido: "Porcentaje de las empresas que utilizan el personal requerido como métrica para medir el costo de un producto de software",
            idPregunta:"empresas_47",
            resultado:result.porcentajesPorRespuesta("empresas_47","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"47.4",
            pregunta:"entorno de trabajo",
            contenido: "Porcentaje de las empresas que utilizan el entorno de trabajo como métrica para medir el costo de un producto de software",
            idPregunta:"empresas_47",
            resultado:result.porcentajesPorRespuesta("empresas_47","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"47.5",
            pregunta:"multiplicadores de esfuerzo",
            contenido: "Porcentaje de las empresas que utilizan los multiplicadores de esfuerzo como métrica para medir el costo de un producto de software",
            idPregunta:"empresas_47",
            resultado:result.porcentajesPorRespuesta("empresas_47","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"47.6",
            pregunta:"Otro",
            contenido: "Porcentaje de las empresas que utilizan otras métricas para medir el costo de un producto de software",
            idPregunta:"empresas_47",
            resultado:result.porcentajesPorRespuesta("empresas_47","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"48",
            pregunta:"¿Cuál es el grado de efectividad de las pruebas de funcionamiento?",
            contenido: "Grado de efectividad de las pruebas de funcionamiento.",
            idPregunta:"empresas_48",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"48.1",
            pregunta:"Deficiente",
            contenido: "Porcentaje de las empresas con un deficiente grado de efectividad de las pruebas de funcionamiento",
            idPregunta:"empresas_48",
            resultado:result.porcentajesPorRespuesta("empresas_48","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"48.2",
            pregunta:"suficiente",
            contenido: "Porcentaje de las empresas con un suficiente grado de efectividad de las pruebas de funcionamiento",
            idPregunta:"empresas_48",
            resultado:result.porcentajesPorRespuesta("empresas_48","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"48.3",
            pregunta:"Bueno",
            contenido: "Porcentaje de las empresas con un buen grado de efectividad de las pruebas de funcionamiento",
            idPregunta:"empresas_48",
            resultado:result.porcentajesPorRespuesta("empresas_48","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"48.4",
            pregunta:"sobresaliente.",
            contenido: "Porcentaje de las empresas con un sobresaliente grado de efectividad de las pruebas de funcionamiento",
            idPregunta:"empresas_48",
            resultado:result.porcentajesPorRespuesta("empresas_48","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"49",
            pregunta:"¿Cuál es el grado de efectividad de las pruebas de usabilidad?",
            contenido: "Grado de efectividad de las pruebas de utilidad.",
            idPregunta:"empresas_49",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"49.1",
            pregunta:"Deficiente",
            contenido: "Porcentaje de las empresas con un deficiente grado de efectividad de las pruebas de usabilidad",
            idPregunta:"empresas_49",
            resultado:result.porcentajesPorRespuesta("empresas_49","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"49.2",
            pregunta:"suficiente",
            contenido: "Porcentaje de las empresas con un suficiente grado de efectividad de las pruebas de usabilidad",
            idPregunta:"empresas_49",
            resultado:result.porcentajesPorRespuesta("empresas_49","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"49.3",
            pregunta:"Bueno",
            contenido: "Porcentaje de las empresas con un buen grado de efectividad de las pruebas de usabilidad",
            idPregunta:"empresas_49",
            resultado:result.porcentajesPorRespuesta("empresas_49","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"49.4",
            pregunta:"sobresaliente.",
            contenido: "Porcentaje de las empresas con un sobresaliente grado de efectividad de las pruebas de usabilidad",
            idPregunta:"empresas_49",
            resultado:result.porcentajesPorRespuesta("empresas_49","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"50",
            pregunta:"¿Cuál es el grado de efectividad de las pruebas de fiabilidad?",
            contenido: "Grado de efectividad de las pruebas de fiabilidad.",
            idPregunta:"empresas_50",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"50.1",
            pregunta:"Deficiente",
            contenido: "Porcentaje de las empresas con un deficiente grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_50",
            resultado:result.porcentajesPorRespuesta("empresas_50","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"50.2",
            pregunta:"suficiente",
            contenido: "Porcentaje de las empresas con un suficiente grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_50",
            resultado:result.porcentajesPorRespuesta("empresas_50","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"50.3",
            pregunta:"Bueno",
            contenido: "Porcentaje de las empresas con un buen grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_50",
            resultado:result.porcentajesPorRespuesta("empresas_50","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"50.4",
            pregunta:"sobresaliente.",
            contenido: "Porcentaje de las empresas con un sobresaliente grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_50",
            resultado:result.porcentajesPorRespuesta("empresas_50","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"51",
            pregunta:"¿Cuál es el grado de efectividad de las pruebas de rendimiento?",
            contenido: "Grado de efectividad de las pruebas de rendimiento.",
            idPregunta:"empresas_51",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"51.1",
            pregunta:"Deficiente",
            contenido: "Porcentaje de las empresas con un deficiente grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_51",
            resultado:result.porcentajesPorRespuesta("empresas_51","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"51.2",
            pregunta:"suficiente",
            contenido: "Porcentaje de las empresas con un suficiente grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_51",
            resultado:result.porcentajesPorRespuesta("empresas_51","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"51.3",
            pregunta:"Bueno",
            contenido: "Porcentaje de las empresas con un buen grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_51",
            resultado:result.porcentajesPorRespuesta("empresas_51","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"51.4",
            pregunta:"sobresaliente.",
            contenido: "Porcentaje de las empresas con un sobresaliente grado de efectividad de las pruebas de fiabilidad",
            idPregunta:"empresas_51",
            resultado:result.porcentajesPorRespuesta("empresas_51","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"52",
            pregunta:"¿Cuál es el grado de efectividad de las pruebas para la capacidad de soporte?",
            contenido: "Grado de efectividad de las pruebas para la capacidad de soporte.",
            idPregunta:"empresas_52",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"52.1",
            pregunta:"Deficiente",
            contenido: "Porcentaje de las empresas con un deficiente grado de efectividad de las pruebas para la capacidad de soporte",
            idPregunta:"empresas_52",
            resultado:result.porcentajesPorRespuesta("empresas_52","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"52.2",
            pregunta:"suficiente",
            contenido: "Porcentaje de las empresas con un suficiente grado de efectividad de las pruebas para la capacidad de soporte",
            idPregunta:"empresas_52",
            resultado:result.porcentajesPorRespuesta("empresas_52","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"52.3",
            pregunta:"Bueno",
            contenido: "Porcentaje de las empresas con un buen grado de efectividad de las pruebas para la capacidad de soporte",
            idPregunta:"empresas_52",
            resultado:result.porcentajesPorRespuesta("empresas_52","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"52.4",
            pregunta:"sobresaliente.",
            contenido: "Porcentaje de las empresas con un sobresaliente grado de efectividad de las pruebas para la capacidad de soporte",
            idPregunta:"empresas_52",
            resultado:result.porcentajesPorRespuesta("empresas_52","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"53",
            pregunta:"Porcentaje de participación en la ventas de nuevos productos introducidos en los últimos tres años: ",
            contenido: "Porcentaje de participación en la ventas de nuevos productos introducidos en los últimos tres años: ",
            idPregunta:"empresas_53",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"53.1",
            pregunta:"0%",
            contenido: "Porcentaje de las empresas con 0% de participación en la ventas de nuevos productos",
            idPregunta:"empresas_53",
            resultado:result.porcentajesPorRespuesta("empresas_53","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"53.2",
            pregunta:"1% al 20%",
            contenido: "Porcentaje de las empresas con el 1% al 20% de participación en la ventas de nuevos productos",
            idPregunta:"empresas_53",
            resultado:result.porcentajesPorRespuesta("empresas_53","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"53.3",
            pregunta:"21% al 40%",
            contenido: "Porcentaje de las empresas con el 21% al 40% de participación en la ventas de nuevos productos",
            idPregunta:"empresas_53",
            resultado:result.porcentajesPorRespuesta("empresas_53","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"53.4",
            pregunta:"41% al 60%",
            contenido: "Porcentaje de las empresas con el 41% al 60% de participación en la ventas de nuevos productos",
            idPregunta:"empresas_53",
            resultado:result.porcentajesPorRespuesta("empresas_53","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"53.5",
            pregunta:"Más del 61%",
            contenido: "Porcentaje de las empresas con más del 61% de participación en la ventas de nuevos productos",
            idPregunta:"empresas_53",
            resultado:result.porcentajesPorRespuesta("empresas_53","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54",
            pregunta:"¿Cuáles son las áreas de mercado que han sido atendidas por los softwares desarrollados por la empresa?",
            contenido: "Áreas de mercado que han sido atendidas por los softwares desarrollados por la empresa",
            idPregunta:"empresas_54",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"54.1",
            pregunta:"Infraestructura de sistemas.",
            contenido: "Porcentaje de las empresas que han atendido el mercado de infraestructura de sistemas",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54.2",
            pregunta:"Administración de datos.",
            contenido: "Porcentaje de las empresas que han atendido el mercado de administración de datos",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54.3",
            pregunta:"Internet.",
            contenido: "Porcentaje de las empresas que han atendido el mercado de internet",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54.4",
            pregunta:"Software administrativo y gerencial.",
            contenido: "Porcentaje de las empresas que han atendido el mercado de software administrativo y gerencial",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54.5",
            pregunta:"Servicios informáticos.",
            contenido: "Porcentaje de las empresas que han atendido el mercado servicios informáticos",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54.6",
            pregunta:"Procesos productivos",
            contenido: "Porcentaje de las empresas que han atendido el mercado de procesos productivos",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"54.7",
            pregunta:"Otro",
            contenido: "Porcentaje de las empresas que han atendido otros mercados",
            idPregunta:"empresas_54",
            resultado:result.porcentajesPorRespuesta("empresas_54","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"55",
            pregunta:"¿Cuáles son los sectores económicos que han sido atendidas por los softwares desarrollados por la empresa?",
            contenido: "Sectores económicos que han sido atendidas por los softwares desarrollados por las empresas.",
            idPregunta:"empresas_55",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"55.1",
            pregunta:"Sector Primario.",
            contenido: "Porcentaje de las empresas que han atendido el sector primario",
            idPregunta:"empresas_55",
            resultado:result.porcentajesPorRespuesta("empresas_55","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"55.2",
            pregunta:"Sector Secundario.",
            contenido: "Porcentaje de las empresas que han atendido el sector secundario",
            idPregunta:"empresas_55",
            resultado:result.porcentajesPorRespuesta("empresas_55","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"55.3",
            pregunta:"Sector Terciario",
            contenido: "Porcentaje de las empresas que han atendido el sector terciario",
            idPregunta:"empresas_55",
            resultado:result.porcentajesPorRespuesta("empresas_55","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"55.4",
            pregunta:"Sector Privado",
            contenido: "Porcentaje de las empresas que han atendido el sector privado",
            idPregunta:"empresas_55",
            resultado:result.porcentajesPorRespuesta("empresas_55","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"55.5",
            pregunta:"Sector Público.",
            contenido: "Porcentaje de las empresas que han atendido el sector público",
            idPregunta:"empresas_55",
            resultado:result.porcentajesPorRespuesta("empresas_55","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"56",
            pregunta:"¿Cuáles son los canales de distribución que utiliza su empresa?.",
            contenido: "Canales de distribución que utilizan las empresas",
            idPregunta:"empresas_56",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"56.1",
            pregunta:"Ventas directas",
            contenido: "Porcentaje de las empresas que utilizan las ventas directas como canal de distribución",
            idPregunta:"empresas_56",
            resultado:result.porcentajesPorRespuesta("empresas_56","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"56.2",
            pregunta:"Representantes o distribuidores",
            contenido: "Porcentaje de las empresas que utilizan los representantes o distribuidores como canal de distribución",
            idPregunta:"empresas_56",
            resultado:result.porcentajesPorRespuesta("empresas_56","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"56.3",
            pregunta:"Sucursales",
            contenido: "Porcentaje de las empresas que utilizan las sucursales como canal de distribución",
            idPregunta:"empresas_56",
            resultado:result.porcentajesPorRespuesta("empresas_56","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"56.4",
            pregunta:"Internet",
            contenido: "Porcentaje de las empresas que utilizan el internet como canal de distribución",
            idPregunta:"empresas_56",
            resultado:result.porcentajesPorRespuesta("empresas_56","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"56.5",
            pregunta:"Otro",
            contenido: "Porcentaje de las empresas que utilizan otros canales de distribución",
            idPregunta:"empresas_56",
            resultado:result.porcentajesPorRespuesta("empresas_56","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"57",
            pregunta:"¿Cuál es el porcentaje de exportaciones realizadas por la empresa? ",
            contenido: "Porcentaje de exportaciones realizadas por las empresas. ",
            idPregunta:"empresas_57",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"57.1",
            pregunta:"0%",
            contenido: "Porcentaje de las empresas que no realizan exportaciones",
            idPregunta:"empresas_57",
            resultado:result.porcentajesPorRespuesta("empresas_57","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"57.2",
            pregunta:"1% al 10%",
            contenido: "Porcentaje de las empresas que realizan del 1% al 10% de exportaciones",
            idPregunta:"empresas_57",
            resultado:result.porcentajesPorRespuesta("empresas_57","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"57.3",
            pregunta:"11% al 20%",
            contenido: "Porcentaje de las empresas que realizan del 11% al 20% de exportaciones",
            idPregunta:"empresas_57",
            resultado:result.porcentajesPorRespuesta("empresas_57","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"57.4",
            pregunta:"21% al 30%",
            contenido: "Porcentaje de las empresas que realizan del 21% al 30% de exportaciones",
            idPregunta:"empresas_57",
            resultado:result.porcentajesPorRespuesta("empresas_57","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"57.5",
            pregunta:"Más del 31%",
            contenido: "Porcentaje de las empresas que realizan mas del 31% de exportaciones",
            idPregunta:"empresas_57",
            resultado:result.porcentajesPorRespuesta("empresas_57","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"58",
            pregunta:"¿Con qué rapidez lanza al mercado nuevos productos para satisfacer las necesidades del mercado? ",
            contenido: "Lapso del tiempo con que las empresas lanzan nuevos productos para satisfacer las necesidades del mercado",
            idPregunta:"empresas_58",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"58.1",
            pregunta:"Menos de 30 días",
            contenido: "Porcentaje de las empresas que en menos de 30 días lanzan nuevos productos",
            idPregunta:"empresas_58",
            resultado:result.porcentajesPorRespuesta("empresas_58","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"58.2",
            pregunta:"31 a 60 días",
            contenido: "Porcentaje de las empresas que dentro de 31 a 60 días lanzan nuevos productos",
            idPregunta:"empresas_58",
            resultado:result.porcentajesPorRespuesta("empresas_58","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"58.3",
            pregunta:"61 a 90 días",
            contenido: "Porcentaje de las empresas que dentro de 61 a 90 días lanzan nuevos productos",
            idPregunta:"empresas_58",
            resultado:result.porcentajesPorRespuesta("empresas_58","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"58.4",
            pregunta:"Más de 91 días",
            contenido: "Porcentaje de las empresas que en mas de 91 días lanzan nuevos productos",
            idPregunta:"empresas_58",
            resultado:result.porcentajesPorRespuesta("empresas_58","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"59",
            pregunta:"¿Cuál es el porcentaje del personal total que corresponde a mercadeo y comercialización?",
            contenido: "Porcentaje del personal total que corresponde a mercadeo y comercialización",
            idPregunta:"empresas_59",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"59.1",
            pregunta:"0%",
            contenido: "Porcentaje de las empresas que no tiene personal que corresponda a mercadeo y comercialización",
            idPregunta:"empresas_59",
            resultado:result.porcentajesPorRespuesta("empresas_59","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"59.2",
            pregunta:"1% al 20%",
            contenido: "Porcentaje de las empresas que del 1% al 20% del personal corresponde a mercadeo y comercialización",
            idPregunta:"empresas_59",
            resultado:result.porcentajesPorRespuesta("empresas_59","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"59.3",
            pregunta:"21% al 40%",
            contenido: "Porcentaje de las empresas que del 21% al 40% del personal corresponde a mercadeo y comercialización",
            idPregunta:"empresas_59",
            resultado:result.porcentajesPorRespuesta("empresas_59","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"59.4",
            pregunta:"41% al 60%",
            contenido: "Porcentaje de las empresas que del 41% al 60% del personal corresponde a mercadeo y comercialización",
            idPregunta:"empresas_59",
            resultado:result.porcentajesPorRespuesta("empresas_59","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"59.5",
            pregunta:"Más del 61%",
            contenido: "Porcentaje de las empresas que más del 61% del personal corresponde a mercadeo y comercialización",
            idPregunta:"empresas_59",
            resultado:result.porcentajesPorRespuesta("empresas_59","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"60",
            pregunta:"¿Qué conocimientos cuenta la empresa sobre MoProsoft?",
            contenido: "Conocimientos con los que cuenta las empresas sobre MoProsoft.",
            idPregunta:"empresas_60",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"60.1",
            pregunta:"El personal está capacitado en MoProsoft",
            contenido: "Porcentaje de las empresas que tienen personal capacitado en MoProsoft",
            idPregunta:"empresas_60",
            resultado:result.porcentajesPorRespuesta("empresas_60","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"60.2",
            pregunta:"La empresa está certificada en MoProsoft",
            contenido: "Porcentaje de las empresas certificadas en MoProsoft",
            idPregunta:"empresas_60",
            resultado:result.porcentajesPorRespuesta("empresas_60","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"60.3",
            pregunta:"Ninguno",
            contenido: "Porcentaje de las empresas que no tienen personal capacitado ni esta certificada en MoProsoft",
            idPregunta:"empresas_60",
            resultado:result.porcentajesPorRespuesta("empresas_60","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"61",
            pregunta:"¿En qué niveles se encuentra certificado su empresa?",
            contenido: "Empresas que se encuentran certificadas en los niveles de CMMI",
            idPregunta:"empresas_61",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"61.1",
            pregunta:"nivel 5. Optimizado",
            contenido: "Porcentaje de empresas certificadas en el nivel 5",
            idPregunta:"empresas_61",
            resultado:result.porcentajesPorRespuesta("empresas_61.1",""),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"61.2",
            pregunta:"nivel 4. Predecible",
            contenido: "Porcentaje de empresas certificadas en el nivel 4",
            idPregunta:"empresas_61",
            resultado:result.porcentajesPorRespuesta("empresas_61","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"61.3",
            pregunta:"nivel 3.Establecido",
            contenido: "Porcentaje de empresas certificadas en el nivel 3",
            idPregunta:"empresas_61",
            resultado:result.porcentajesPorRespuesta("empresas_61","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"61.4",
            pregunta:"nivel 2. Gestionado",
            contenido: "Porcentaje de empresas certificadas en el nivel 2",
            idPregunta:"empresas_61",
            resultado:result.porcentajesPorRespuesta("empresas_61","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"61.5",
            pregunta:"nivel 1. Realizado",
            contenido: "Porcentaje de empresas certificadas en el nivel 1",
            idPregunta:"empresas_61",
            resultado:result.porcentajesPorRespuesta("empresas_61","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"62",
            pregunta:"¿Qué conocimientos cuenta la empresa sobre CMMI?",
            contenido: "Conocimientos con los que cuenta las empresas sobre MoProsoft. ",
            idPregunta:"empresas_62",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"62.1",
            pregunta:"El personal está capacitado en CMMI",
            contenido: "Porcentaje de las empresas que tienen personal capacitado en CMMI",
            idPregunta:"empresas_62",
            resultado:result.porcentajesPorRespuesta("empresas_62","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"62.2",
            pregunta:"La empresa está certificada en CMMI",
            contenido: "Porcentaje de las empresas certificadas en CMMI",
            idPregunta:"empresas_62",
            resultado:result.porcentajesPorRespuesta("empresas_62","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"62.3",
            pregunta:"Ninguno",
            contenido: "Porcentaje de las empresas que no tienen personal capacitado ni esta certificada en CMMI",
            idPregunta:"empresas_62",
            resultado:result.porcentajesPorRespuesta("empresas_62","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"63",
            pregunta:"¿En qué niveles  de CMMI se encuentra certificado su empresa?",
            contenido: "Empresas que se encuentran certificadas en los niveles de CMMI",
            idPregunta:"empresas_63",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"63.1",
            pregunta:"nivel 5. Optimizar",
            contenido: "Porcentaje de empresas certificadas en el nivel 5",
            idPregunta:"empresas_63",
            resultado:result.porcentajesPorRespuesta("empresas_63","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"63.2",
            pregunta:"nivel 4. Cuantitativamente Administrado",
            contenido: "Porcentaje de empresas certificadas en el nivel 4",
            idPregunta:"empresas_63",
            resultado:result.porcentajesPorRespuesta("empresas_63","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"63.3",
            pregunta:"nivel 3.Definido",
            contenido: "Porcentaje de empresas certificadas en el nivel 3",
            idPregunta:"empresas_63",
            resultado:result.porcentajesPorRespuesta("empresas_63","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"63.4",
            pregunta:"nivel 2. Gestionado",
            contenido: "Porcentaje de empresas certificadas en el nivel 2",
            idPregunta:"empresas_63",
            resultado:result.porcentajesPorRespuesta("empresas_63","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"63.5",
            pregunta:"nivel 1. Inicial",
            contenido: "Porcentaje de empresas certificadas en el nivel 1",
            idPregunta:"empresas_63",
            resultado:result.porcentajesPorRespuesta("empresas_63","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"64",
            pregunta:"¿La empresa hace uso de los siguientes aspectos de optimización para la mejora continua de sus procesos?",
            contenido: "Aspectos de optimización para la mejora continua de sus procesos",
            idPregunta:"empresas_64",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"64.1",
            pregunta:"Innovación en organización y despliegue(OID).",
            contenido: "Porcentaje de empresas que utilizan la innovación en organización y despliegue",
            idPregunta:"empresas_64",
            resultado:result.porcentajesPorRespuesta("empresas_64","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"64.2",
            pregunta:"Análisis Causal y Resolución(CAR).",
            contenido: "Porcentaje de empresas que utilizan el análisis causal y resolución",
            idPregunta:"empresas_64",
            resultado:result.porcentajesPorRespuesta("empresas_64","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"64.3",
            pregunta:"Ninguno",
            contenido: "Porcentaje de las empresas que no hacen uso de los aspectos de optimización ",
            idPregunta:"empresas_64",
            resultado:result.porcentajesPorRespuesta("empresas_64","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"65",
            pregunta:"¿La empresa hace uso de los siguientes aspectos de medición y control  para la Gestión cuantitativa de los procesos?",
            contenido: "Aspectos de medición y control para la Gestión cuantitativa de los procesos ",
            idPregunta:"empresas_65",
            resultado:(result.porcentajesPorRespuesta("empresas_65","1")+result.porcentajesPorRespuesta("empresas_65","2")),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"65.1",
            pregunta:"Rendimiento del proceso organizacional ( identifica brechas en el desempeño con respecto a los objetivos comerciales e implementa mejoras para cerrar las brechas.)",
            contenido: "Porcentaje de empresas que utilizan el rendimiento del proceso organizacional ",
            idPregunta:"empresas_65",
            resultado:result.porcentajesPorRespuesta("empresas_65","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"65.2",
            pregunta:"Gestión de Proyectos cuantitativos (métricas para la medición eficaz de los proyectos)",
            contenido: "Porcentaje de empresas que utilizan la gestión de Proyectos cuantitativos",
            idPregunta:"empresas_65",
            resultado:result.porcentajesPorRespuesta("empresas_65","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"65.3",
            pregunta:"Ninguno",
            contenido: "Porcentaje de las empresas que no hacen uso de los aspectos de medición y control",
            idPregunta:"empresas_65",
            resultado:result.porcentajesPorRespuesta("empresas_65","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66",
            pregunta:"¿La empresa hace uso de los siguientes aspectos para la estandarización de sus procesos?",
            contenido: "",
            idPregunta:"empresas_66",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"66.1",
            pregunta:"Desarrollo de requisitos",
            contenido: "Porcentaje de empresas que utilizan el desarrollo de requisitos",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.2",
            pregunta:"Solución técnica",
            contenido: "Porcentaje de empresas que utilizan la solución técnica",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.3",
            pregunta:"Integración de Productos",
            contenido: "Porcentaje de empresas que utilizan la integración de productos",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.4",
            pregunta:"Verificación",
            contenido: "Porcentaje de empresas que utilizan la verificación",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.5",
            pregunta:"Validación",
            contenido: "Porcentaje de empresas que utilizan la validación",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.6",
            pregunta:"Enfoque del proceso organizacional",
            contenido: "Porcentaje de empresas que utilizan el enfoque del proceso organizacional",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.7",
            pregunta:"Definición del proceso organizacional",
            contenido: "Porcentaje de empresas que utilizan la definición del proceso organizacional",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.8",
            pregunta:"Capacitación en materia de organización",
            contenido: "Porcentaje de empresas que utilizan la capacitación en materia de organización",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.9",
            pregunta:"Gestión integrada de proyectos (IPPD extras)",
            contenido: "Porcentaje de empresas que utilizan la gestion integrada de proyectos",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","9"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.10",
            pregunta:"Gestión de Riesgos",
            contenido: "Porcentaje de empresas que utilizan la gestion de riesgos",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","10"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.11",
            pregunta:"Análisis de decisión y resolución",
            contenido: "Porcentaje de empresas que utilizan el análisis de decisión y resolución",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","11"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.12",
            pregunta:"Equipos Integrados (IPPD)",
            contenido: "Porcentaje de empresas que utilizan equipos integrados",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","12"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.13",
            pregunta:"Org. Medio ambiente para la Integración (IPPD)",
            contenido: "Porcentaje de empresas que utilizan Org. Medio ambiente para la integración",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","13"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.14",
            pregunta:"Gestión de Proveedores Integrada (SS solamente)",
            contenido: "Porcentaje de empresas que utilizan la gestión de proveedores integrada",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","14"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"66.15",
            pregunta:"Ninguno ",
            contenido: "Porcentaje de las empresas que no hacen uso de los aspectos para la estandarización de sus procesos",
            idPregunta:"empresas_66",
            resultado:result.porcentajesPorRespuesta("empresas_66","15"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67",
            pregunta:"¿La empresa hace uso de los siguientes aspectos básicos para la Gestión de proyectos?",
            contenido: "Aspectos básicos para la Gestión de proyectos que utilizan las empresas",
            idPregunta:"empresas_67",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"67.1",
            pregunta:"Administración de requisitos",
            contenido: "Porcentaje de empresas que utilizan la administración de requisitos",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.2",
            pregunta:"Planificación del proyecto",
            contenido: "Porcentaje de empresas que utilizan la planificación del proyecto",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.3",
            pregunta:"Programa de Monitoreo y control",
            contenido: "Porcentaje de empresas que utilizan el programa de monitoreo y control",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.4",
            pregunta:"Gestión Acuerdo de Proveedor",
            contenido: "Porcentaje de empresas que utilizan la gestión acuerdo de proveedor",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.5",
            pregunta:"Medición y análisis",
            contenido: "Porcentaje de empresas que utilizan la medición y análisis",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.6",
            pregunta:"Proceso y garantía de calidad del producto",
            contenido: "Porcentaje de empresas que utilizan el proceso y garantía de calidad del producto",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.7",
            pregunta:"Gestión de la configuración",
            contenido: "Porcentaje de empresas que utilizan la gestión de la configuración",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"67.8",
            pregunta:"Ninguno ",
            contenido: "Porcentaje de las empresas que no hacen uso de los aspectos básicos para la Gestión de proyectos",
            idPregunta:"empresas_67",
            resultado:result.porcentajesPorRespuesta("empresas_67","8"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"68",
            pregunta:"¿El personal está certificado en PSP?",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en PSP",
            idPregunta:"empresas_68",
            resultado:result.porcentajesPorRespuesta("empresas_68","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69",
            pregunta:"¿En qué niveles se encuentra certificado su personal?",
            contenido: "Niveles de certificación del personal de las empresas en PSP",
            idPregunta:"empresas_69",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"69.1",
            pregunta:"PSP0",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel PSP0",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69.2",
            pregunta:"PSP0.1",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel PSP0.1",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69.3",
            pregunta:"PSP1",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel PSP1",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69.4",
            pregunta:"PSP1.1",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel PSP1.1",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69.5",
            pregunta:"PSP2",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel PSP2",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69.6",
            pregunta:"PSP2.1",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel PSP2.1",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","6"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"69.7",
            pregunta:"TSP",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en el nivel TSP",
            idPregunta:"empresas_69",
            resultado:result.porcentajesPorRespuesta("empresas_69","7"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"70",
            pregunta:"¿El personal está certificado en Scrum?",
            contenido: "Porcentaje de las empresas que tienen certificado su personal en Scrum",
            idPregunta:"empresas_70",
            resultado:result.porcentajesPorRespuesta("empresas_70","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"71",
            pregunta:"¿Cuáles son los tipos de roles con los que se encuentra certificado su personal?",
            contenido: "Tipos de roles de Scrum con los que se encuentra certificado el personal de las empresas",
            idPregunta:"empresas_71",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"71.1",
            pregunta:"Scrum Product Owner",
            contenido: "Porcentaje de empresas con personal sertificado en Scrum Product Owner",
            idPregunta:"empresas_71",
            resultado:result.porcentajesPorRespuesta("empresas_71","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"71.2",
            pregunta:"Advanced Certified Scrum Product Owner",
            contenido: "Porcentaje de empresas con personal sertificado en Advanced Certified Scrum Product Owner",
            idPregunta:"empresas_71",
            resultado:result.porcentajesPorRespuesta("empresas_71","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"71.3",
            pregunta:"advanced scrum master.",
            contenido: "Porcentaje de empresas con personal sertificado en Advanced scrum master",
            idPregunta:"empresas_71",
            resultado:result.porcentajesPorRespuesta("empresas_71","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"71.4",
            pregunta:"scrum master.",
            contenido: "Porcentaje de empresas con personal sertificado en Scrum Master",
            idPregunta:"empresas_71",
            resultado:result.porcentajesPorRespuesta("empresas_71","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"71.5",
            pregunta:"Otro",
            contenido: "Porcentaje de empresas con personal sertificado en otros tipos",
            idPregunta:"empresas_71",
            resultado:result.porcentajesPorRespuesta("empresas_71","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"72",
            pregunta:"¿El personal está certificado en Kanban?",
            contenido: "Porcentaje de las empresas que que tienen certificado su personal en Kanban",
            idPregunta:"empresas_72",
            resultado:result.porcentajesPorRespuesta("empresas_72","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"73",
            pregunta:"¿Cuáles son los tipos de roles con los que se encuentra certificado su personal?",
            contenido: "Tipos de roles de Kanban con los que se encuentra certificado el personal de las empresas",
            idPregunta:"empresas_73",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"73.1",
            pregunta:"Kanban Management Professional 1 (KMP1)",
            contenido: "Porcentaje de las empresas con personal certificado en Kanban Management Professional 1 (KMP1)",
            idPregunta:"empresas_73",
            resultado:result.porcentajesPorRespuesta("empresas_73","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"73.2",
            pregunta:"Team Kanban Practitioner (TKP)",
            contenido: "Porcentaje de las empresas con personal certificado en Team Kanban Practitioner (TKP)",
            idPregunta:"empresas_73",
            resultado:result.porcentajesPorRespuesta("empresas_73","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"73.3",
            pregunta:"Kanban Management Professional 2 (KMP2)",
            contenido: "Porcentaje de las empresas con personal certificado en Kanban Management Professional 2 (KMP2)",
            idPregunta:"empresas_73",
            resultado:result.porcentajesPorRespuesta("empresas_73","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"73.4",
            pregunta:"Otro",
            contenido: "Porcentaje de las empresas con personal certificado en otro tipo",
            idPregunta:"empresas_73",
            resultado:result.porcentajesPorRespuesta("empresas_73","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"74",
            pregunta:"¿Cuáles son las estrategias de marketing que utiliza la empresa?",
            contenido: "Moda de las estrategias de marketing que utiliza las empresas.",
            idPregunta:"empresas_74",
            resultado:"",
            unidad_de_medida:"Estrategias de marketing"
        },
        {
            indicador:"75",
            pregunta:"¿Cuáles son las estrategias que emplea la empresa para conocer las tendencias y necesidades del mercado?",
            contenido: "Estrategias utilizadas por las empresas para conocer las tendencias y necesidades del mercado",
            idPregunta:"empresas_75",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"75.1",
            pregunta:"Analítica Digital",
            contenido: "Porcentaje de las empresas que emplean la Analítica Digital para conocer las tendencias y necesisdades del mercado",
            idPregunta:"empresas_75",
            resultado:result.porcentajesPorRespuesta("empresas_75","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"75.2",
            pregunta:"Escucha Digital",
            contenido: "Porcentaje de las empresas que emplean la Escucha Digital para conocer las tendencias y necesisdades del mercado",
            idPregunta:"empresas_75",
            resultado:result.porcentajesPorRespuesta("empresas_75","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"75.3",
            pregunta:"Monitoreo de experiencia digital",
            contenido: "Porcentaje de las empresas que emplean el Monitoreo de experiencia digital para conocer las tendencias y necesisdades del mercado",
            idPregunta:"empresas_75",
            resultado:result.porcentajesPorRespuesta("empresas_75","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"75.4",
            pregunta:"Minería de datos",
            contenido: "Porcentaje de las empresas que emplean la Minería de datos para conocer las tendencias y necesisdades del mercado",
            idPregunta:"empresas_75",
            resultado:result.porcentajesPorRespuesta("empresas_75","4"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"75.5",
            pregunta:"Investigación de mercados y usuarios",
            contenido: "Porcentaje de las empresas que emplean la Investigación de mercados y usuarios para conocer las tendencias y necesisdades del mercado",
            idPregunta:"empresas_75",
            resultado:result.porcentajesPorRespuesta("empresas_75","5"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"76",
            pregunta:"¿Realiza Benchmarking con los productos de la competencia?",
            contenido: "Frecuencia con la que las empresas realizan Benchmarking con los productos de la competencia",
            idPregunta:"empresas_76",
            resultado:"",
            unidad_de_medida:""
        },
        {
            indicador:"76.1",
            pregunta:"Permanentemente",
            contenido: "Porcentaje de las empresas que permanentemente realizan Benchmarking con los productos de la competencia",
            idPregunta:"empresas_76",
            resultado:result.porcentajesPorRespuesta("empresas_76","1"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"76.2",
            pregunta:"Eventualmente",
            contenido: "Porcentaje de las empresas que eventualmente realizan Benchmarking con los productos de la competencia",
            idPregunta:"empresas_76",
            resultado:result.porcentajesPorRespuesta("empresas_76","2"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"76.3",
            pregunta:"Nunca",
            contenido: "Porcentaje de las empresas que nunca realizan Benchmarking con los productos de la competencia",
            idPregunta:"empresas_76",
            resultado:result.porcentajesPorRespuesta("empresas_76","3"),
            unidad_de_medida:"Empresas"
        },
        {
            indicador:"77",
            pregunta:"¿Cuáles son las métricas de marketing y ventas que se utilizan en su empresas?",
            contenido: "Métricas de marketing y ventas que utilizan las empresas.",
            idPregunta:"empresas_77",
            resultado:"",
            unidad_de_medida:"Metricas de marketing"
        },
    ]

    return estadisticas;
}
module.exports = router;