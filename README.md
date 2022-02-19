<p align="center">
 <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/37/Logo_Alternativo_3_de_HYDRA.png/revision/latest?cb=20160507161941&path-prefix=es" width="256" height="256">
 </p>

# Hydra
Servicio de backend para el proyecto:                 
"Diagnostico de la situacion actual de la industria del software en la ciudad de San Francisco de Campeche.

# Notas
Esta aplicacion es una API construida con NodeJS + Express + MongoDB
Es totalmente independiente del proyecto "Phoenix" por lo que se puede construir una aplicacion sobre esta API.

Para cada endpoint su request body puede ser encontrado leyendo el codigo de dichos
endpoints (organizados lo mejor que se pudo en carpetas.)

Es de alta importancia llenar el archivo .env (copiado de .env.example) y colocar 
sus llaves (diferentes) para encriptacion de diversos elementos, asi como definicion
de la base de datos a la que se conectara y el puerto donde empezara a escuchar peticiones.

Para probar los endpoints se puede activar el DEV_MODE del archivo .env para saltar
validaciones de tokens y poder hacer postmans de manera libre, con validacion activa 
ningun request a algun endpoint administrativo deberia pasar.


# Autenticacion
La autenticacion funciona por JWT Tokens que se reciben en el header bajo la llave auth-token, estos tokens tienen una duracion de 2 dias por defecto.

# Endpoints
 - Publicos
    - */api/preguntas
    - */api/estadisticas
    - */api/estadistica_empresas

 - Cuenta
    - */auth/login
    
 - Administrador
    - */admin/entidad
    - */admin/status
    - */admin/resultados
    - */admin/usuario <- Este endpoint esta activo, mas no se usa.

# Roles
 - 0: Alumno
 - 1: IES
 - 2: Empresa
 - 3: Admin (Requiere Creacion Manual)

# Instalacion
 -  Clonar el repositorio
 -  Iniciar quitar el ".example" del ".env" y configurarlo con los datos propios.
 -  Ejecutar "_**npm i**_" o "_**npm install**_" en la terminal en la raiz del proyecto
 -  Para correr el proyecto se ejecuta "_**nodemon app.js**_" en la raiz del proyecto (development branch).
