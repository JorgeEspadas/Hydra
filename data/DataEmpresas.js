const preguntas_empresas = [
    {
        //categorias[]
        categoria:"ORGANIZACIÓN",
        preguntas:[
            {
                texto:"Año de constitución de la empresa:",
                _id:"empresas_1",
                tipo:"rango",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto: "1960"
                    },
                   {
                       opcion_id:2,
                       abierta:false,
                       texto:"2021"
                   }
                    
                ]
            }, 
            {
                texto:"Departamentos con los que cuenta su empresa",
                _id:"empresas_2",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto: "Área de comunicaciones."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto: "Área de gestión, planificación y estrategia de servicios."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto: "Área de control de riesgos."
                    },
                    {
                        opcion_id:4,
                        abierto:false,
                        texto: "Área de negocio y aplicaciones empresariales."
                    },
                    {
                        opcion_id:5,
                        abierto:false,
                        texto: "Área de Centro de atención al usuario."
                    },
                    {
                        opcion_id:6,
                        abierto:false,
                        texto: "Área de sistemas e infraestructuras."
                    },
                    {
                        opcion_id:7,
                        abierto:false,
                        texto: "Área de  desarrollo y nuevas tecnologías."
                    },
                    {
                        opcion_id:8,
                        abierto:false,
                        texto: "Área de contabilidad y finanzas."
                    }
                ]
            },
            {
                texto:"Cada cuanto tiempo realiza encuestas sobre el clima laboral",
                _id:"empresas_3",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierto:false,
                        texto: "0"
                    },
                    {
                        opcion_id:2,
                        abierto:false,
                        texto: "3 meses"
                    },
                    {
                        opcion_id:3,
                        abierto:false,
                        texto: "6 meses"
                    },
                    {
                        opcion_id:4,
                        abierto:false,
                        texto: "12 meses"
                    }
                ]
            }
        ],
        name:0
    },
    {
        categoria:"RECURSOS HUMANOS",
        preguntas:[
            {
                texto:"¿Cuáles son los cuatro criterios de contratación de personal más importantes para su empresa?",
                _id:"empresas_4",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierto:false,
                        texto: "Experiencia"
                    },
                    { 
                        opcion_id:2,
                        abierto:false,
                        texto:  "Certificaciones."
                    },
                    {
                        opcion_id:3,
                        abierto:false,
                        texto:  "Responsabilidad"
                    },
                    {
                        opcion_id:4,
                        abierto:false,
                        texto:  "Ganas de aprender"
                    },
                    {
                        opcion_id:5,
                        abierto:false,
                        texto:  "Habilidades para trabajo en equipo"
                    },
                    {
                        opcion_id:6,
                        abierto:false,
                        texto:  "Habilidades para la resolución de problemas"
                    },
                    {
                        opcion_id:7,
                        abierto:false,
                        texto:  "Innovador"
                    },
                    {
                        opcion_id:8,
                        abierto:false,
                        texto:  "Receptivo"
                    },
                    {
                        opcion_id:9,
                        abierto:false,
                        texto: "Organizado en sus tiempos"
                    }
                ]
            }, 
            {
                texto:"Número TOTAL de empleados por tipo de contrato:",
                _id:"empresas_5",
                tipo:"tabla",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierto:true,
                        texto: "Dependientes"
                    },
                    {
                        opcion_id:2,
                        abierto:true,
                        texto: "Independientes"
                    },
                    {
                        opcion_id:3,
                        abierto:true,
                        texto: "Aprendices/Practicantes"
                    },
                    {
                        opcion_id:4,
                        abierto:true,
                        texto:  "Temporales"
                    }
                ]
            }, 
            {
                texto:"Número TOTAL de trabajadores según nivel de estudios.",
                _id:"empresas_6",
                tipo:"tabla",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierto:true,
                        texto:  "Educación básica"
                    },
                    {
                        opcion_id:2,
                        abierto:true,
                        texto:   "Educación Técnica"
                    },
                    {
                        opcion_id:3,
                        abierto:true,
                        texto:  "Profesional"
                    },
                    {
                        opcion_id:4,
                        abierto:true,
                        texto:   "Postgrado"
                    }
                ]
            }, 
            {
                texto:"Número de programadores por nivel de estudio.",
                _id:"empresas_7",
                tipo:"tabla",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierto:true,
                        texto:   "Educación Técnica"
                    },
                    {
                        opcion_id:2,
                        abierto:true,
                        texto:   "Profesional"
                    },
                    {
                        opcion_id:3,
                        abierto:true,
                        texto:   "Postgrado"
                    }
                ]
            },
            {
                texto:"¿Cuál es el porcentaje de rotación de empleados?",
                _id:"empresas_8",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierto:false,
                        texto:   "1% al 10%"
                    },
                    {
                        opcion_id:2,
                        abierto:false,
                        texto:   "11% al 20%"
                    },
                    {
                        opcion_id:3,
                        abierto:false,
                        texto:   "21% al 30%"
                    },
                    {
                        opcion_id:4,
                        abierto:false,
                        texto:   "31% al 40%"
                    },
                    {
                        opcion_id:5,
                        abierto:false,
                        texto:   "más del 41%"
                    }
                ]
            }
        ],
        name:1
    },
    {
        categoria:"SITUACIÓN FINANCIERA",
        preguntas:[
            {
                texto:"¿Cómo está constituida la empresa?",
                _id:"empresas_9",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto: "Sociedad en nombre colectivo."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto: "Sociedad en comandita simple."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto: "Sociedad de responsabilidad limitada."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto: "Sociedad anónima."
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto: "Sociedad en comandita por acciones."
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto: "Sociedad cooperativa."
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto: "Persona Física."
                    }
                ]
            }, 
            {
                texto:"¿Utiliza indicadores financieros en los procesos que involucran tomas de decisiones en la empresa?",
                _id:"empresas_10",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Permanentemente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Cuando los indicadores existentes lo permiten"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"En ocasiones"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"No."
                    }
                ]
            }, 
            {
                texto:"¿Cómo es la liquidez de su negocio? (cantidad de efectivo y los activos, que se puedan convertir en efectivo, para satisfacer las obligaciones de deuda a corto plazo)",
                _id:"empresas_11",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Excelente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Buena"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Suficiente"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Insuficiente"
                    }
                ]
            }, 
            {
                texto:"¿Cómo es la solvencia de su negocio? (capacidad de una empresa para cumplir con sus obligaciones de deuda en cualquier momento)",
                _id:"empresas_12",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Excelente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Buena"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Suficiente"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Insuficiente"
                    }
                ]
            }, 
            {
                texto:"¿Cómo es la rentabilidad de su negocio? (margen neto, que se corresponde con la relación entre las ganancias y los ingresos totales: es decir, el beneficio neto dividido por la cifra de negocios)",
                _id:"empresas_13",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Excelente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Buena"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Suficiente"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Insuficiente"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles de estos indicadores financieros de liquidez utiliza la empresa?",
                _id:"empresas_14",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Capital de Trabajo"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Razón Corriente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Prueba Acida"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Pasivo Corriente / Inventarios"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Indicadores De Endeudamiento"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Patrimonio Neto"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Nivel De Endeudamiento"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Endeudamiento Sin Valorizaciones"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Activos Fijos / Patrimonio Líquido "
                    }
                ]
            }, 
            {
                texto:"¿Cuáles de estos indicadores financieros de rentabilidad utiliza la empresa?",
                _id:"empresas_15",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Rentabilidad Bruta"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Rentabilidad Operacional"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Rentabilidad Neta "
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Rentabilidad Del Patrimonio 132"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Rentabilidad Del Activo Total"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles de estos indicadores financieros de actividad utiliza la empresa?",
                _id:"empresas_16",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Rotación Del Patrimonio Líquido"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Rotación Del Activo Total"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Rotación Del Capital De Trabajo"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Rotación De Cartera"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Periodo De Cobro"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Rotación Inventarios"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Ciclo Operacional"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Periodo De Pago A Proveedores"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles de estos indicadores de endeudamiento utiliza la empresa?",
                _id:"empresas_17",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Patrimonio Neto"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Nivel De Endeudamiento"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Endeudamiento Sin Valorizaciones"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Activos Fijos / Patrimonio Liquido Concentración Endeudamiento A Corto Plazo"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Endeudamiento / Ventas"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Endeudamiento Financiero / Ventas"
                    }
                ]
            }, 
            {
                texto:"¿Adicional a los reportes básicos de contabilidad (balance general, estado de resultados), qué reportes a nivel contable y financiero generan?",
                _id:"empresas_18",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Estado de situación patrimonial"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Estado de flujo de efectivo"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Estado de fuentes y aplicaciones"
                    },
                    {
                        opcion_id:4,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿Qué problemas identifica en sus procesos de toma de decisión en el campo financiero?",
                _id:"empresas_19",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Falta de información"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Información  obsoleta"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Información no es oportuna para el proceso"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Información poco concisa"
                    },
                    {
                        opcion_id:5,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    }
                ]
            }, 
            {
                texto:"¿Con base en qué información toma la decisión de invertir?",
                _id:"empresas_20",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Análisis financiero de su empresa"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Análisis financiero del sector"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Por una fuente externa"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Oportunidad del negocio (necesidad)"
                    },
                    {
                        opcion_id:5,
                        abierta:true,
                        texto:"Otros. Especifique"
                    }
                ]
            }, 
            {
                texto:"¿Cómo realiza la proyección financiera de la empresa?",
                _id:"empresas_21",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Realiza un análisis horizontal y lo proyecta"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Proyecta sus estados con el IPC"
                    },
                    {
                        opcion_id:3,
                        abierta:true,
                        texto:"Otros. Especifique"
                    }
                ]
            }, 
            {
                texto:"¿Qué entidades toma como referencia para posicionar su empresa en el sector empresarial?",
                _id:"empresas_22",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Cámara Comercio. "
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Cámara Nacional de la Industria Electrónica de Telecomunicaciones y Tecnologías de la Comunicación."
                    },
                    {
                        opcion_id:3,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"No compara."
                    }
                ]
            }, 
            {
                texto:"¿Qué índices emplea para posicionar su empresa en relación al sector empresarial?",
                _id:"empresas_23",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Capital De Trabajo"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Razón Corriente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Prueba Acida"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Nivel De Endeudamiento"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Activos Fijos / Patrimonio Liquido"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Rentabilidad Bruta"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Rentabilidad Neta"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Rotación Del Activo Total"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Rotación Del Capital De Trabajo"
                    },
                    {
                        opcion_id:10,
                        abierta:false,
                        texto:"Rotación De Cartera"
                    },
                    {
                        opcion_id:11,
                        abierta:false,
                        texto:"Periodo De Cobro"
                    },
                    {
                        opcion_id:12,
                        abierta:false,
                        texto:"Periodo De Pago A Proveedores"
                    },
                    {
                        opcion_id:13,
                        abierta:false,
                        texto:"Patrimonio Neto"
                    },
                    {
                        opcion_id:14,
                        abierta:false,
                        texto:"Endeudamiento / Ventas"
                    },
                    {
                        opcion_id:15,
                        abierta:false,
                        texto:"Endeudamiento Financiero / Ventas"
                    },
                    {
                        opcion_id:16,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    }
                ]
            }, 
            {
                texto:"¿La empresa establece metas financieras?",
                _id:"empresas_24",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Cuenta la empresa con la posibilidad de acceso a crédito bancario?",
                _id:"empresas_25",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Cuenta la entidad con acceso a recursos del capital?",
                _id:"empresas_26",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí"
                    },
                    { 
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Existe participación de capital extranjero en el capital social?",
                _id:"empresas_27",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Cuenta la empresa con financiación de fomento gubernamental?",
                _id:"empresas_28",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }
        ],
        name:2
    },
    {
        categoria:"Infraestructura",
        preguntas:[
            {
                texto:"¿Qué software usan para manejar la información contable y financiera?",
                _id:"empresas_29",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Herramientas en Excel"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"ERP (Enterprise Resource Planner)"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Programa contabilidad"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Desarrollo propio"
                    },
                    {
                        opcion_id:5,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el número de equipos de cómputo con los que cuenta su empresa, de acuerdo a su objetivo de uso?",
                _id:"empresas_30",
                tipo:"tabla",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:true,
                        texto:"Número de servidores"
                    },
                    {
                        opcion_id:2,
                        abierta:true,
                        texto:"Número de computadoras personales"
                    }
                ]
            }, 
            {
                texto:"¿Qué medios de almacenamiento para los Backups hace uso su empresa?",
                _id:"empresas_31",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"En cinta"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"En disco duro"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"En Red"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"En la nube"
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el tipo de Red con el cuenta su empresa?",
                _id:"empresas_32",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Ethernet 10-100 mbps"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Ethernet 1 gbps"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"WIFI 2 ghz"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"WIFI 3 Gghz"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"WIFI 4 Gghz"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"WIFI 5 Gghz"
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el ancho de banda de conexión a internet con el que cuenta su empresa?",
                _id:"empresas_33",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"20-50 Mbps"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"80-100 Mbps"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"110-más Mbps"
                    }
                ]
            }
        ],
        name:3
    },
    {
        categoria:"Investigación, innovación, desarrollo y tecnología",
        preguntas:[
            {
                texto:"¿Ha desarrollado proyectos en investigación y desarrollo (I&D) en los últimos 3 años?",
                _id:"empresas_34",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Qué departamentos para los proyectos de investigación y desarrollo posee su empresa? (puede seleccionar más de uno)",
                _id:"empresas_35",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"I. & D."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Diseño."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Control de Calidad."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Ingeniería."
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Ninguno."
                    }
                ]
            },
            {
                texto:"¿Cuáles de las siguientes actividades de innovación realiza la empresa?",
                _id:"empresas_36",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Desarrollar nuevos productos que satisfagan las necesidades del mercado"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Aplicación de tecnologías de procesos adecuados para producir nuevos productos"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Desarrollo y adopción de nuevos productos y procesos tecnológicos para satisfacer las necesidades futuras"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Capacidad de responder a las actividades tecnológicas accidentales y oportunidades inesperadas creadas por los competidores"
                    }
                ]
            },
            {
                texto:"¿Tiene la empresa productos certificados? En caso de respuesta afirmativa, determine el país de la cual obtuvo la certificación y año de obtención.",
                _id:"empresas_37",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No."
                    }
                ]
            },
            {
                texto:"¿Cuántos de sus productos han sido certificados en total?",
                _id:"empresas_37.1",
                tipo:"abierta",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:true,
                        texto:""
                    }
                ]
            },
            {
                texto:"¿Ha solicitado la empresa patentes en el país y en el exterior en los últimos 3 años? (en caso de respuesta positiva determinar cuántas y en qué países).",
                _id:"empresas_38",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No."
                    }
                ]
            },
            {
                texto:"¿Cuántas patentes ha solicitado en total?",
                _id:"empresas_38.1",
                tipo:"abierta",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:true,
                        texto:""
                    }
                ]
            },
            {
                texto:"¿La empresa ha obtenido  patentes en el país y en el exterior en los últimos 3 años? (en caso de respuesta positiva determinar cuántas y en qué países).",
                _id:"empresas_39",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No."
                    }
                ]
            },
            {
                texto:"¿Cuántas patentes ha obtenido en total?",
                _id:"empresas_39.1",
                tipo:"abierta",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:true,
                        texto:""
                    }
                ]
            },
            {
                texto:"¿La empresa ha obtenido la concesión de licencia de producto o de tecnología en los últimos 3 años?",
                _id:"empresas_40",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No."
                    }
                ]
            },
            {
                texto:"¿Cuántos productos o tecnologías han obtenido la concesión de licencia en total?",
                _id:"empresas_40.1",
                tipo:"abierta",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:true,
                        texto:""
                    }
                ]
            },
            {
                texto:"¿Tiene la empresa procesos certificados? En caso de respuesta afirmativa, determine el país de la cual obtuvo la certificación y año de obtención.",
                _id:"empresas_41",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No."
                    }
                ]
            },
            {
                texto:"¿Cuántos procesos certificados ha obtenido?:",
                _id:"empresas_41.1",
                tipo:"abierta",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:true,
                        texto:""
                    }
                ]
            },
            {
                texto:"¿Su empresa está registrada en el Registro Nacional de Instituciones y Empresas Científicas y Tecnológicas (RENIECYT)?",
                _id:"empresas_42",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sí."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No."
                    }
                ]
            },
            {
                texto:"¿Cuáles son los principales lenguajes de programación utilizados por la empresa?",
                _id:"empresas_43",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"JavaScript"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Java"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"TypeScript"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Python"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"C#"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"PHP"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"C++"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Ruby"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Kotlin"
                    },
                    {
                        opcion_id:10,
                        abierta:false,
                        texto:"Otro"
                    },
                    {
                        opcion_id:11,
                        abierta:false,
                        texto:"Go"
                    },
                    {
                        opcion_id:12,
                        abierta:false,
                        texto:"C"
                    },
                    {
                        opcion_id:13,
                        abierta:false,
                        texto:"Swift"
                    },
                    {
                        opcion_id:14,
                        abierta:false,
                        texto:"Scala"
                    },
                    {
                        opcion_id:15,
                        abierta:false,
                        texto:"Elixir"
                    },
                    {
                        opcion_id:16,
                        abierta:false,
                        texto:"Perl"
                    },
                    {
                        opcion_id:17,
                        abierta:false,
                        texto:"Dart"
                    },
                    {
                        opcion_id:18,
                        abierta:false,
                        texto:"Erlang"
                    },
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Objective C"
                    },
                ]
            },
            {
                texto:"¿Cuáles son los principales administradores de base de datos utilizados por la empresa?",
                _id:"empresas_44",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Firebase"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"MySQL"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"MariaDB"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"SQLite"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"PostgreSQL"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"SQL Server"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"ORACLE"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"mongoDB"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Redis"
                    },
                    {
                        opcion_id:10,
                        abierta:false,
                        texto:"Cassandra"
                    },
                    {
                        opcion_id:11,
                        abierta:false,
                        texto:"Microsoft Access"
                    },
                    {
                        opcion_id:12,
                        abierta:false,
                        texto:"Amazon RDS"
                    },
                    {
                        opcion_id:13,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    }
                ]
            },
            {
                texto:"¿Tecnología para desarrollo  en la nube utilizados por la empresa?",
                _id:"empresas_45",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"AWS amazon"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Red Hat Cloud Suite"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Microsoft Azure"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Google App Engine"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Cloud Foundry"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Heroku"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Digital Ocean"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Kamatera"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Vultr"
                    },
                    {
                        opcion_id:10,
                        abierta:false,
                        texto:"Google Cloud Platform"
                    },
                    {
                        opcion_id:11,
                        abierta:false,
                        texto:"Alibaba Cloud"
                    },
                    {
                        opcion_id:12,
                        abierta:false,
                        texto:"UpCloud"
                    },
                    {
                        opcion_id:13,
                        abierta:false,
                        texto:"Oracle Cloud"
                    },
                    {
                        opcion_id:14,
                        abierta:false,
                        texto:"AWS Elastic Beanstalk"
                    },
                    {
                        opcion_id:15,
                        abierta:true,
                        texto:"Otro. ¿Cuál?"
                    }
                ]
            }
        ],
        name:4
    },
    {
        categoria:"Productos y servicios",
        preguntas:[
            {
                texto:"¿Qué tipo de productos de software ofrece su empresa?",
                _id:"empresas_46",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Desarrollo de software a la medida"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Integración de sistemas"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Mantenimiento y soporte de software"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Proyectos integrales con uso de tecnología RFID"
                    },
                    {
                        opcion_id:5,
                        abierta:true,
                        texto:"Otros:(especifique)"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son las métricas actuales que utiliza la empresa para medir el costo de un producto de software?",
                _id:"empresas_47",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"tiempo"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"esfuerzo"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"personal requerido"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"entorno de trabajo"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"multiplicador de esfuerzo"
                    },
                    {
                        opcion_id:6,
                        abierta:true,
                        texto:"otro:"
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el grado de efectividad de las pruebas de funcionamiento?",
                _id:"empresas_48",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Deficiente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"suficiente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Bueno"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"sobresaliente."
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el grado de efectividad de las pruebas de usabilidad?",
                _id:"empresas_49",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Deficiente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"suficiente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Bueno"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"sobresaliente."
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el grado de efectividad de las pruebas de fiabilidad?",
                _id:"empresas_50",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Deficiente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"suficiente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Bueno"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"sobresaliente."
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el grado de efectividad de las pruebas de rendimiento?",
                _id:"empresas_51",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Deficiente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"suficiente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Bueno"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"sobresaliente."
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el grado de efectividad de las pruebas para la capacidad de soporte?",
                _id:"empresas_52",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Deficiente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"suficiente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Bueno"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"sobresaliente."
                    }
                ]
            }, 
            {
                texto:"Porcentaje de participación en la ventas de nuevos productos introducidos en los últimos tres años:",
                _id:"empresas_53",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"0%"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"1% al 20%"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"21% al 40%"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"41% al 60%"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Más del 61%"
                    }
                ]
            }
        ],
        name:5
    },
    {
        categoria:"Mercado",
        preguntas:[
            {
                texto:"¿Cuáles son las áreas de mercado que han sido atendidas por los softwares desarrollados por la empresa?",
                _id:"empresas_54",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Infraestructura de sistemas."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Administración de datos."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Internet."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Software administrativo y gerencial."
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Servicios informáticos."
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Procesos productivos."
                    },
                    {
                        opcion_id:7,
                        abierta:true,
                        texto:"Otro:"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son los sectores económicos que han sido atendidas por los softwares desarrollados por la empresa?",
                _id:"empresas_55",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Sector Primario."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Sector Secundario."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Sector Terciario."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Sector Privado."
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Sector Público."
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son los canales de distribución que utiliza su empresa?",
                _id:"empresas_56",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Ventas directas"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Representantes o distribuidores"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Sucursales"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Internet"
                    },
                    {
                        opcion_id:5,
                        abierta:true,
                        texto:"Otro:"
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el porcentaje de exportaciones realizadas por la empresa?",
                _id:"empresas_57",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"0%"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"1% al 10%"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"11% al 20%"
                    },
                    {çopcion_id:4,
                        abierta:false,
                        texto:"21% al 30%"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Más del 31%"
                    }
                ]
            }, 
            {
                texto:"¿Con qué rapidez lanza al mercado nuevos productos para satisfacer las necesidades del mercado?",
                _id:"empresas_58",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Menos de 30 días"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"31 a 60 días"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"61 a 90 días"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Más de 91 días"
                    }
                ]
            }, 
            {
                texto:"¿Cuál es el porcentaje del personal total que corresponde a mercadeo y comercialización?",
                _id:"empresas_59",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"0%"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"1% al 20%"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"21% al 40%"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"41% al 60%"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Más del 61%"
                    }
                ]
            }
        ],
        name:6
    },
    {   
        categoria:"Procesos empresariales",
        preguntas:[
            {
                texto:"¿ Qué conocimientos cuenta la empresa sobre MoProsoft?",
                _id:"empresas_60",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"El personal está capacitado en MoProsoft"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"La empresa está certificada en MoProsoft."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿En qué nivel se encuentra certificado su empresa?",
                _id:"empresas_61",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"nivel 5. Optimizado"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"nivel 4. Predecible"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"nivel 3.Establecido"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"nivel 2. Gestionado"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"nivel 1. Realizado"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿ Qué conocimientos cuenta la empresa sobre CMMI?",
                _id:"empresas_62",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"El personal está capacitado en CMMI"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"La empresa está certificada en CMMI"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿En qué nivel se encuentra certificado su empresa?",
                _id:"empresas_63",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"nivel 5. Optimizar"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"nivel 4. Cuantitativamente Administrado"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"nivel 3.Definido"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"nivel 2. Gestionado"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"nivel 1. Inicial"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿La empresa hace uso de los siguientes aspectos de optimización para la mejora continua de sus procesos?",
                _id:"empresas_64",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Innovación en organización y despliegue(OID)."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Análisis Causal y Resolución(CAR)."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿La empresa hace uso de los siguientes aspectos de medición y control  para la Gestión cuantitativa de los procesos?",
                _id:"empresas_65",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Rendimiento del proceso organizacional ( identifica brechas en el desempeño con respecto a los objetivos comerciales e implementa mejoras para cerrar las brechas.)"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Gestión de Proyectos cuantitativos (métricas para la medición eficaz de los proyectos)"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"-¿La empresa hace uso de los siguientes aspectos para la estandarización de sus procesos?",
                _id:"empresas_66",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Desarrollo de requisitos"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Solución técnica"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Integración de Productos"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Verificación"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Validación"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Enfoque del proceso organizacional"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Definición del proceso organizacional"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Capacitación en materia de organización"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Gestión integrada de proyectos (IPPD extras)"
                    },
                    {
                        opcion_id:10,
                        abierta:false,
                        texto:"Gestión de Riesgos"
                    },
                    {
                        opcion_id:11,
                        abierta:false,
                        texto:"Análisis de decisión y resolución"
                    },
                    {
                        opcion_id:12,
                        abierta:false,
                        texto:"Equipos Integrados (IPPD)"
                    },
                    {
                        opcion_id:13,
                        abierta:false,
                        texto:"Org. Medio ambiente para la Integración (IPPD)"
                    },
                    {
                        opcion_id:14,
                        abierta:false,
                        texto:"Gestión de Proveedores Integrada (SS solamente)"
                    },
                    {
                        opcion_id:15,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿La empresa hace uso de los siguientes aspectos básicos para la Gestión de proyectos?",
                _id:"empresas_67",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Administración de requisitos"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Planificación del proyecto"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Programa de Monitoreo y control"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Gestión Acuerdo de Proveedor"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Medición y análisis"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Proceso y garantía de calidad del producto"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Gestión de la configuración"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿El personal está certificado en PSP?",
                _id:"empresas_68",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Si contamos con personal  certificado en PSP"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿En qué niveles se encuentra certificado su personal?",
                _id:"empresas_69",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"PSP0"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"PSP0.1"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"PSP1"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"PSP1.1"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"PSP2"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"PSP2.1"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"TSP"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Ninguno"
                    }
                ]
            }, 
            {
                texto:"¿El personal está certificado en Scrum?",
                _id:"empresas_70",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Si contamos con personal  certificado en Scrum"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son los tipos de roles con los que se encuentra certificado su personal?",
                _id:"empresas_71",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Scrum Product Owner"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Advanced Certified Scrum Product Owner"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Advanced Scrum master."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Scrum Master."
                    },
                    {
                        opcion_id:5,
                        abierta:true,
                        texto:"Otro, especifique:"
                    }
                ]
            }, 
            {
                texto:"¿El personal está certificado en Kanban ?",
                _id:"empresas_72",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Si contamos con personal  certificado en Kanban"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"No"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son los tipos de roles con los que se encuentra certificado su personal?",
                _id:"empresas_73",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Kanban Management Professional 1  (KMP1)"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Team Kanban Practitioner (TKP)"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Kanban Management Professional 2  (KMP2)"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Otro, especifique:"
                    }
                ]
            }
        ],
        name:7
    },
    {
        categoria:"Marketing y comunicación",
        preguntas:[
            {
                texto:"¿Cuáles son las estrategias de marketing que utiliza la empresa?",
                _id:"empresas_74",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        abierta:false,
                        opcion_id:1,
                        texto:"Email Marketing"
                    },
                    {
                        abierta:false,
                        opcion_id:2,
                        texto:"Pop-ups, banners y anuncios en páginas web"
                    },
                    {
                        abierta:false,
                        opcion_id:3,
                        texto:"Marketing de Afiliación"
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Marketing de Contenidos o Content Marketing"
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Posicionamiento en Buscadores"
                    },
                    {
                        opcion_id:6,
                        abierta:false,
                        texto:"Marketing de Participación"
                    },
                    {
                        opcion_id:7,
                        abierta:false,
                        texto:"Publicidad en Redes Sociales"
                    },
                    {
                        opcion_id:8,
                        abierta:false,
                        texto:"Videomarketing"
                    },
                    {
                        opcion_id:9,
                        abierta:false,
                        texto:"Marketing a través de Influencers"
                    },
                    {
                        opcion_id:10,
                        abierta:false,
                        texto:"Growth Hacking"
                    },
                    {
                        opcion_id:11,
                        abierta:false,
                        texto:"Conexión online-offline"
                    },
                    {
                        opcion_id:12,
                        abierta:false,
                        texto:"Telemarketing"
                    },
                    {
                        opcion_id:13,
                        abierta:false,
                        texto:"Publicidad Impresa"
                    },
                    {
                        opcion_id:14,
                        abierta:false,
                        texto:"Anuncios en televisión, radio y cine"
                    },
                    {
                        opcion_id:15,
                        abierta:false,
                        texto:"Emplazamiento de producto o product placement"
                    },
                    {
                        opcion_id:16,
                        abierta:false,
                        texto:"Publicidad exterior"
                    },
                    {
                        opcion_id:17,
                        abierta:false,
                        texto:"Street Marketing"
                    },
                    {
                        opcion_id:18,
                        abierta:false,
                        texto:"Merchandising"
                    },
                    {
                        opcion_id:19,
                        abierta:false,
                        texto:"Endomarketing"
                    },
                    {
                        opcion_id:20,
                        abierta:false,
                        texto:"Neuromarketing"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son las estrategias que emplea la empresa para conocer las tendencias y necesidades del mercado?",
                _id:"empresas_75",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Analítica Digital. Conocer las interacciones o el volumen de los usuarios en un portal o e-commerce, redes sociales, email e incluso apps"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Escucha Digital. el seguimiento y análisis de las conversaciones de la audiencia acerca de una marca o segmento de mercado en redes sociales, y en Internet en general, a partir de palabras relacionadas"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Monitoreo de experiencia digital. Este conjunto de técnicas permite explorar el comportamiento detallado del público en el sitio web, en la app y en la plataforma de email marketing."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"Minería de datos. A partir de las bases de datos se pueden obtener descripciones generales de la frecuencia o valor de compras, determinar hábitos de consumo por categorías de producto, e inclusive, examinar el perfil sociodemográfico de los clientes desagregados por individuo."
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"Investigación de mercados y usuarios. Consultas en bases de datos de instituciones gubernamentales y no gubernamentales, grupos focales, entrevistas a profundidad y encuestas, tanto en campo como en contenidos online."
                    }
                ]
            }, 
            {
                texto:"¿Realiza Benchmarking con los productos de la competencia?",
                _id:"empresas_76",
                tipo:"multiple",
                multiples:false,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"Permanentemente"
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"Eventualmente"
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"Nunca"
                    }
                ]
            }, 
            {
                texto:"¿Cuáles son las métricas de marketing y ventas que se utilizan en su empresas?",
                _id:"empresas_77",
                tipo:"multiple",
                multiples:true,
                opciones:[
                    {
                        opcion_id:1,
                        abierta:false,
                        texto:"LTV (Lifetime Value) Se refiere al valor que un cliente aporta a una empresa a lo largo del tiempo que permanece efectivamente como cliente."
                    },
                    {
                        opcion_id:2,
                        abierta:false,
                        texto:"CAC (coste de adquisición de cliente) Define si un cliente en particular generó ingresos para el negocio o no."
                    },
                    {
                        opcion_id:3,
                        abierta:false,
                        texto:"ROI (retorno sobre la inversión) Métrica utilizada para saber cuánto ha ganado la empresa con las inversiones en el área de Marketing y Ventas."
                    },
                    {
                        opcion_id:4,
                        abierta:false,
                        texto:"PQL (Product Qualified Lead) Mide la efectividad de llevar al usuario a probar el software y sus cualidades, para luego realizar la compra."
                    },
                    {
                        opcion_id:5,
                        abierta:false,
                        texto:"MQL (Marketing Qualified Lead) Mide los prospectos que tienen un buen nivel de conocimiento sobre su problema o necesidad y están investigando cuál sería la mejor solución para su demanda."
                    }
                ]
            }
        ],
        name:8
    }
];

module.exports = preguntas_empresas;