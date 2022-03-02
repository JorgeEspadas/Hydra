const IESPreguntas = [
    {
        header: "Institución Educativa de nivel Superior (IES)",
        indicadores: [
            {
                titulo: "Datos Generales de la IES",
                preguntas: [
                    {
                        modulo: "abierta",
                        texto: "Nombre de la IES",
                        id: "nombre_IES"
                    },
                    {
                        modulo: "abierta",
                        texto: "Clave de registro",
                        id: "clave_IES"
                    },
                    {
                        modulo: "abierta",
                        texto: "Ubicación de la IES",
                        id: "ubicacion_IES"
                    },
                    {
                        modulo: "abierta",
                        texto: "Sitio Web",
                        id: "sitio_IES"
                    },
                    {
                        modulo: "multiple",
                        texto: "La IES pertenece al",
                        id: "ies_5",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Subsistema de universidades públicas"
                            },
                            {
                                valor: 2,
                                texto: "Subsistema de educación tecnológica"
                            },
                            {
                                valor: 3,
                                texto: "Subsistema de instituciones particulares"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_6",
                        texto: "La cantidad de programas educativos de nivel superior en ciencias de la computación que oferta es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "0",
                            },
                            {
                                valor: 2,
                                texto: "Entre 1 y 3"
                            },
                            {
                                valor: 3,
                                texto: "Entre 4 y 6"
                            },
                            {
                                valor: 4,
                                texto: "Entre 7 y 9"
                            },
                            {
                                valor: 5,
                                texto: "Más de 9"
                            }
                        ]
                    },
                    {
                        modulo: "abierta",
                        id: "ies_7",
                        texto: "Nombre(s) del PE(s) en ciencias de la computación (solo si la respuesta anterior es distinta de 0)"
                    },
                    {
                        modulo: "abierta",
                        id: "ies_8",
                        texto: "La duración por ciclos escolares (semestral, trimestral, bimestral, etc.) es de:"
                    },
                    {
                        modulo: "multiple",
                        id: "ies_9",
                        texto: "La cantidad de Programas Educativos (de nivel posgrado) en Ciencias de la computación que oferta la IES es de",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "0"
                            },
                            {
                                valor: 2,
                                texto: "Entre 1 y 3",
                            },
                            {
                                valor: 3,
                                texto: "Entre 4 y 6"
                            },
                            {
                                valor: 4,
                                texto: "Entre 7 y 9"
                            },
                            {
                                valor: 5,
                                texto: "Más de 9"
                            }
                        ]
                    },

                ]
            },
            {
                titulo: "Instalaciones Físicas",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_10",
                        texto: "La IES cuenta con un espacio y servicio de información al visitante:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_11",
                        texto: "La IES cuenta con espacio y servicio de cafetería adecuados para cubrir la demanda del personal administrativo, docente y estudiantil:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_12",
                        texto: "La IES cuenta con auditorio(s) y/o salón de eventos para actividades académicas:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_13",
                        texto: "La IES cuenta con espacios deportivos (como canchas, piscinas, gimnasio, etc.)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_14",
                        texto: "La IES cuenta con áreas verdes en toda su instalación:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_15",
                        texto: "La IES cuenta con biblioteca y su acceso está disponible en horarios y periodos de tiempo considerables en turno matutino y vespertino",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_16",
                        texto: "La IES cuenta con aulas o salones equipados con iluminación, aire acondicionado, equipo audiovisual e internet",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_17",
                        texto: "La IES cuenta con estacionamiento de acceso a administrativos, personal docente, alumnos y público en general",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_18",
                        texto: "La IES cuenta con un laboratorio destinado específicamente para el desarrollo de software",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_19",
                        texto: "La IES cuenta con servicios de virtualización (laboratorios virtuales) para el desarrollo de prácticas",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                ]
            },
            {
                titulo: "Portafolio de proyectos",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_20",
                        texto: "La IES cuenta con un portafolio de proyectos priorizado y alineados a los objetivos de la Institución",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            },
                            {
                                valor: 3,
                                texto: "Parcialmente"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_21",
                        texto: "La cantidad promedio de proyectos anualmente en la IES es de: (Solo si respondiste 'Sí' a la pregunta anterior)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Mas de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_22",
                        texto: "En la IES, la alta dirección (rector o secretarias) participa en la priorización de los proyectos del portafolio",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            },
                            {
                                valor: 3,
                                texto: "Parcialmente"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_23",
                        texto: "La IES tiene implementa una metodología de administración de proyectos",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            },
                            {
                                valor: 3,
                                texto: "Parcialmente"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_24",
                        texto: "¿Qué metodología de administración de proyectos tiene implementada? (Solo si respondiste 'Sí' a la pregunta anterior)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "PMBOK"
                            },
                            {
                                valor: 2,
                                texto: "Metodología propia"
                            },
                            {
                                valor: 3,
                                texto: "Otra (Especifique)"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_25",
                        texto: "La IES cuenta con un departamento, oficina o área responsable del desarrollo de Proyectos.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_26",
                        texto: "La IES tiene o ha realizado proyectos de desarrollo de software en colaboración con otras IES en el año en curso",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_27",
                        texto: "La IES tiene o ha realizado proyectos de desarrollo de software en colaboración con la industria del sector público en el año en curso.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_28",
                        texto: "La IES tiene o ha realizado proyectos de desarrollo de software en colaboración con la industria del sector privado en el año en curso.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_29",
                        texto: "La IES tiene o ha realizado proyectos de desarrollo de software con alcance internacional (por proyecto(s), convenio(s), intercambio, empresas, etc.) en el año en curso.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },

                ]
            },
            {
                titulo: "Nuevas tecnologías",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_30",
                        texto: "La IES ha implementado alguna iniciativa relacionada con la Realidad Aumentada (AR)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementación de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploración de esa tecnología"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningún proyecto con esa tecnología"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_31",
                        texto: "La IES ha implementado alguna iniciativa relacionada con Realidad Virtual",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_32",
                        texto: "La IES ha implementado alguna iniciativa relacionada con la Nube",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_33",
                        texto: "La IES ha implementado alguna iniciativa relacionada con Blockchain",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_34",
                        texto: "La IES ha implementado alguna iniciativa relacionada con IA",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_35",
                        texto: "La IES ha implementado alguna iniciativa relacionada con Analítica predictiva",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_36",
                        texto: "La IES ha implementado alguna iniciativa relacionada con Internet de las Cosas (IoT)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_37",
                        texto: ". La IES ha implementado alguna iniciativa relacionada con Herramientas Web 4.0",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, se cuenta con una o varias soluciones liberadas"
                            },
                            {
                                valor: 2,
                                texto: "En proceso de implementacion de un proyecto"
                            },
                            {
                                valor: 3,
                                texto: "En exploracion de esa tecnologia"
                            },
                            {
                                valor: 4,
                                texto: "No se ha considerado ningun proyecto con esa tecnologia"
                            }
                        ]
                    }

                ]
            },
            {
                titulo: "Infraestructura de TI",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_38",
                        texto: ". La IES cuenta con servicio de Internet estable y accesible para la comunidad estudiantil",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_39",
                        texto: "La IES cuenta con un centro de cómputo de acceso abierto para cualquier usuario de la institución",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_40",
                        texto: "La IES cuenta con un laboratorio destinado específicamente para el uso o desarrollo de software",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_41",
                        texto: "La IES cuenta con un laboratorio destinado específicamente para la implementación y configuración de redes",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_42",
                        texto: "La IES cuenta con servicios de virtualización (laboratorios virtuales) para el desarrollo de prácticas",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                ]
            },
            {
                titulo: "Seguridad e Higiene",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_43",
                        texto: ". La IES cuenta con centro de primeros auxilios o de salud",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_44",
                        texto: "La IES cuenta con módulo de vigilancia",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_45",
                        texto: "La IES cuenta con protocolos de seguridad e higiene en sus instalaciones en general (aulas, laboratorios, biblioteca, sala de cómputo, etc.)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                ]
            },
            {
                titulo: "Clima institucional",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_46",
                        texto: "La IES fomenta un medio ambiente humano agradable, de respeto, cordial y de unidad",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_47",
                        texto: "La IES fomenta la identidad y el apego a la imagen institucional",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_48",
                        texto: "La IES fomenta la igualdad y equidad de género",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_49",
                        texto: "La IES da a conocer sus procedimientos existentes para presentar quejas y/o sugerencias",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_50",
                        texto: "La IES aplica encuestas de clima o ambiente laboral con una periodicidad de tiempo establecida",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_51",
                        texto: "La IES promueve actividades extracurriculares no académicas",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        header: "Programa Educativo",
        indicadores: [
            {
                titulo: "Datos Generales del Programa Educativo (PE)",
                preguntas: [
                    {
                        modulo: "abierta",
                        texto: "Nombre de la PE en ciencias de la computación",
                        id: "ies_52"
                    },
                    {
                        modulo: "multiple",
                        texto: "La duración del PE es",
                        id: "ies_53",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Mayor a 4 años"
                            },
                            {
                                valor: 2,
                                texto: "Entre 3 y 4 años"
                            },
                            {
                                valor: 3,
                                texto: "Menor o hasta 2 años"
                            },
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_54",
                        texto: "El PE en ciencias de la computación ofertado se cursa en modalidad",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Presencial"
                            },
                            {
                                valor: 2,
                                texto: "Virtual"
                            },
                            {
                                valor: 3,
                                texto: "Mixta"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_55",
                        texto: "El Mapa curricular del PE está disponible al público en general",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_56",
                        texto: "El servicio social es un requisito de carácter obligatorio para el PE en ciencias de la computación",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_57",
                        texto: "Cuántos convenios con organizaciones públicas o privadas cuenta para el alumnado realice su servicio social (área en ciencias de la computación)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_58",
                        texto: "Cuántos de estos convenios aún son vigentes",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_59",
                        texto: "Las Prácticas o Residencias Profesionales son un requisito de carácter obligatorio para el PE en ciencias de la computación",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_60",
                        texto: "Cuántos convenios con organizaciones públicas o privadas cuenta para el alumnado realice sus prácticas o residencia profesional (área de ciencias de la computación)",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_61",
                        texto: "Cuántos de estos convenios aún son vigentes",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_62",
                        texto: "La opción de Titulación más frecuente elegida por estudiantes del PE en ciencias de la computación es",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Desarrollo de Proyectos"
                            },
                            {
                                valor: 2,
                                texto: "Tesis"
                            },
                            {
                                valor: 3,
                                texto: "Examen CENEVAL"
                            },
                            {
                                valor: 4,
                                texto: "Diplomado o seminario de Titulación"
                            },
                            {
                                valor: 5,
                                texto: "Estudios de Maestría"
                            },
                            {
                                valor: 6,
                                texto: "Experiencia Laboral"
                            },
                            {
                                valor: 7,
                                texto: "Otro"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_63",
                        texto: "El perfil de egreso del PE en ciencias de la computación tiene una relación directa con la industria del software",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_64",
                        texto: "El perfil de egreso del PE en ciencias de la computación alude al desarrollo de proyectos de software y su vinculación con la industria",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_65",
                        texto: "Los Objetivos Educacionales del PE están disponibles al público en general",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_66",
                        texto: "Los Objetivos Educacionales del PE indican de forma explícita el uso de herramientas tecnológicas emergentes, innovadoras o de vanguardia en el área del desarrollo de software",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_67",
                        texto: "El Perfil de Egreso del PE está disponible al público en general",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    }
                ]
            },
            {
                titulo: "Características del PE",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_68",
                        texto: "El PE en ciencias de la computación incluye asignaturas relacionadas (directa o indirectamente) al desarrollo de software",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_69",
                        texto: "El perfil de egreso del PE en ciencias de la computación indica de forma explícita la competencia del desarrollo de software",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_70",
                        texto: "La última actualización realizada al PE en ciencias de la computación fue en un plazo máximo de 5 años",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_71",
                        texto: "El PE en ciencias de la computación actualmente está certificado por un organismo acreditador nacional o internacional",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_72",
                        texto: "El PE establece con carácter obligatorio algún tipo de certificación (afín al desarrollo de software) de empresas reconocidas en el ámbito de las Tecnologías como Microsoft, Oracle, HP, Amazon, Google, etc.",
                        respuestas: [
                            {
                                valor: 1,
                                modulo: "abierta",
                                texto: "Sí, especifique"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_73",
                        texto: "El PE en ciencias de la computación incluye asignaturas relacionadas al dominio del idioma inglés:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_74",
                        texto: "El PE en ciencias de la computación ofrece la movilidad nacional a otras IES",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_75",
                        texto: "El PE en ciencias de la computación ofrece la movilidad internacional a otras IES",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí"
                            },
                            {
                                valor: 2,
                                texto: "No"
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        header: "Personal Docente",
        indicadores: [
            {
                titulo: "Datos generales del empleo",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_76",
                        texto: "La cantidad de docentes activos en la IES es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_77",
                        texto: "La cantidad de docentes activos en la IES de tiempo completo (TC) es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_78",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación con medio tiempo (MT) es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_79",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación por horas es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_80",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación que desempeñan otras actividades profesionales y/o laborales en el ámbito de la industria de software.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                ]
            },
            {
                titulo: "Perfil académico/profesional",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_81",
                        texto: "El Currículo Vitae de los profesores activos en la IES para los PE en ciencias de la computación está disponible públicamente",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Sí, en el sitio web institucional"
                            },
                            {
                                valor: 2,
                                texto: "Sí, en los folletos o publicidad del PE"
                            },
                            {
                                valor: 3,
                                texto: "Sí, solo al solicitar informacion en la propia IES"
                            },
                            {
                                valor: 4,
                                texto: "No"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_82",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación con Grado de Maestría en el área disciplinar",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_83",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación con Grado de Doctorado en el área disciplinar.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_84",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación con alguna Especialidad en el área disciplinar.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_85",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación que cuentan con algún reconocimiento o distinción institucional en el año en curso es de",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_86",
                        texto: "La cantidad de docentes activos en la IES con reconocimiento del perfil PRODEP es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_87",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación que cuenta con el reconocimiento del Sistema Nacional de Investigadores (SNI) es de",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_88",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación que son integrantes de un Cuerpo Académico registrado ante la Secretaría de Educación Pública de México es de",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_89",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación que cuenta con una certificación, en el año en curso, de empresas reconocidas en el ámbito de las Tecnologías como Microsoft, Oracle, HP, Amazon, Google, etc.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_90",
                        texto: "La cantidad de profesores activos en la IES para los PE en ciencias de la computación que cuentan con una certificación, en el año en curso, de empresas reconocidas en el ámbito de la Dirección de Proyectos.",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_91",
                        texto: "La cantidad de docentes activos con alguna certificación del idioma inglés",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Más de 100"
                            },
                            {
                                valor: 2,
                                texto: "Entre 40 y 100"
                            },
                            {
                                valor: 3,
                                texto: "Entre 20 y 39"
                            },
                            {
                                valor: 4,
                                texto: "Entre 5 y 19"
                            },
                            {
                                valor: 5,
                                texto: "Menos de 5"
                            }
                        ]
                    }
                ]
            },
            {
                titulo: "Habilidades docentes y metodologia",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_92",
                        texto: "El último grado de estudios preponderante (más del 80%) de la plantilla docente es de:",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Licenciatura"
                            },
                            {
                                valor: 2,
                                texto: "Maestria"
                            },
                            {
                                valor: 3,
                                texto: "Doctorado"
                            },
                            {
                                valor: 4,
                                texto: "Postdoctorado"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_93",
                        texto: "La plantilla docente, en su mayoría (más del 80%) cuenta con cursos de habilidades y práctica docente",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_94",
                        texto: "La plantilla docente, en su mayoría (más del 80%) utiliza plataformas virtuales de aprendizaje en su práctica docente",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_95",
                        texto: "La plantilla docente, en su mayoría (más del 80%) utiliza las TICs en su práctica docente para establecer un canal o medio de comunicación con los estudiantes",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_96",
                        texto: "La plantilla docente, en su mayoría (más del 80%) domina el idioma inglés en nivel intermedio-avanzado",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_97",
                        texto: "La plantilla docente, en su mayoría (más del 80%) domina el idioma inglés en nivel básico-intermedio",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                ]
            },
            {
                titulo: "Capacitación continua",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_98",
                        texto: "La IES cuenta con un plan anual de capacitación para el personal docente",
                        respuestas: [
                            {
                                valor: 1,
                                texto: "Totalmente de acuerdo"
                            },
                            {
                                valor: 2,
                                texto: "De acuerdo"
                            },
                            {
                                valor: 3,
                                texto: "Ni de acuerdo, ni en desacuerdo"
                            },
                            {
                                valor: 4,
                                texto: "En desacuerdo"
                            },
                            {
                                valor: 5,
                                texto: "Totalmente en desacuerdo"
                            }
                        ]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_99",
                        texto: "La IES cuenta con un portafolio de cursos de docencia disponible para la capacitación continua de los docentes",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_100",
                        texto: "La IES cuenta con un portafolio de cursos disciplinares (ciencias de la computación) disponible para la capacitación continua de los docentes",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_101",
                        texto: "El docente recibe por lo menos un curso de capacitación de docencia al año",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_102",
                        texto: "El docente recibe por lo menos un curso de capacitación profesional en el área de las ciencias de la computación al año",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                ]
            },
            {
                titulo: "Investigación y consultoría",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "ies_103",
                        texto: "Los docentes publican artículos científicos relacionados con el desarrollo de software en revistas arbitradas nacionales y/o internacionales",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_104",
                        texto: "Los docentes publican artículos científicos relacionados con el desarrollo de software en revistas indexadas nacionales y/o internacionales",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_105",
                        texto: "Los docentes publican libros o capítulos de libro relacionados con el desarrollo de software",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_106",
                        texto: "Los docentes realizan proyectos de investigación afín al desarrollo de software",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_107",
                        texto: "Los estudiantes participan en colaboración con docentes en proyectos de investigación afín al desarrollo de software",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_108",
                        texto: "Los docentes participan en colaboración con otras IES en proyectos de investigación afín al desarrollo de software",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "ies_109",
                        texto: "Los estudiantes participan en colaboración con otras IES en proyectos de investigación afín al desarrollo de software",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                ]
            },
        ]
    }
]

const IESestudiantes = [
    {
        header: "Institucion de Educacion Superior",
        indicadores: [
            {
                titulo: "Servicios de apoyo al estudiante",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "st_1",
                        texto: "¿Los estudiantes cuentan con un programa formal de Tutorías?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_2",
                        texto: "¿Los estudiantes cuentan con un programa formal de Asesorías académicas?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_3",
                        texto: "¿Los estudiantes cuentan con un programa formal de Becas por la IES?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_4",
                        texto: "¿Los estudiantes cuentan con un programa de movilidad nacional y/o internacional a otras IES?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_5",
                        texto: "¿Los estudiantes cuentan con servicio de Transporte?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_6",
                        texto: "¿Los estudiantes cuentan con un servicio de apoyo a la Salud?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_7",
                        texto: "¿La IES cuenta con un servicio de Bolsa de Trabajo?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_8",
                        texto: "¿La IES cuenta con un programa de becas para el estudiante?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_9",
                        texto: "¿La IES cuenta con una incubadora de proyectos o de emprendurismo?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_10",
                        texto: "¿Los estudiantes al terminar su Residencia o Práctica profesional consigue empleo en donde lo desarrollo?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                ]
            },
            {
                titulo: "Percepcion de la calidad de la educacion recibida",
                preguntas: [
                    {
                        modulo: "multiple",
                        id: "st_11",
                        texto: "¿Cómo valora el proceso de enseñanza-aprendizaje recibido?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_12",
                        texto: "¿El nivel de calidad en el proceso de enseñanza-aprendizaje es?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_13",
                        texto: "¿Tuvo acceso a Nuevas Tecnologías en el proceso de enseñanza-aprendizaje?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_14",
                        texto: "¿Tuvo acceso a Herramientas Tecnológicas en el proceso de enseñanza-aprendizaje?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                    {
                        modulo: "multiple",
                        id: "st_15",
                        texto: "¿Recomendaría a un familiar o amigo estudiar el mismo PE que está cursando?",
                        respuestas: [{
                            valor: 1,
                            texto: "Totalmente de acuerdo"
                        },
                        {
                            valor: 2,
                            texto: "De acuerdo"
                        },
                        {
                            valor: 3,
                            texto: "Ni de acuerdo, ni en desacuerdo"
                        },
                        {
                            valor: 4,
                            texto: "En desacuerdo"
                        },
                        {
                            valor: 5,
                            texto: "Totalmente en desacuerdo"
                        }]
                    },
                ]
            }
        ]
    }
]

module.exports = {IESPreguntas, IESestudiantes};