<p align="center">
 <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/37/Logo_Alternativo_3_de_HYDRA.png/revision/latest?cb=20160507161941&path-prefix=es" width="256" height="256">
 </p>

# Hydra
Servicio de backend para el proyecto:                 
"Diagnostico de la situacion actual de la industria del software en la ciudad de San Francisco de Campeche.

# Endpoints
 - Publicos
    - */api/public <- todavía no hay nada, pero bueno.

 - Cuenta
    - */auth/login
    - */auth/cuenta <- para modificar contraseña de la cuenta del usuario
    
 - Administrador
    - */admin/preguntas  <- agrega/modifica/borra preguntas
    - */admin/categorias <- agrega/modifica/borra categorias
    - */admin/cuentas <- agrega/modifica/borra cuentas.

# Roles
 - 0: Publico
 - 1: IES
 - 2: Empresa
 - 3: Admin

# Instalacion
 -  Clonar el repositorio
 -  Iniciar quitar el ".example" del ".env" y configurarlo con los datos propios.
 -  Ejecutar "_**npm i**_" o "_**npm install**_" en la terminal en la raiz del proyecto
 -  Para correr el proyecto se ejecuta "_**nodemon app.js**_" en la raiz del proyecto (development branch).

# Reglas de repositorio
 -  Todo commit directo a master sera devuelto
 -  Los commits deben ser organizados por branches con su respectivo pull request.
 -  La version en desarrollo se maneja en la branch "development", no en master.
