# REST-NODEJS-POSTGRESQL

## Descripción
Rest api con las tecnologías de back end node.js y como bdd postgresql de usuarios con los verbos GET, POST, PUT, DELETE.
Requisitos: 
- NodeJS actualizado en su version LTS.
- PostgreSQL actualizado en su version 12.

## Base de datos
En el repositorio se incluye el script de creación de la bdd y la inserción de un registro de prueba inicial, es decir un usuario registrado en la bdd.

## Ejecución
Una vez creada la BDD en postgresql, modificar el archivo `'.\REST-NODEJS-POSTGRESQL\src\controllers\index.controller.js'`, con los datos de la bdd
```
const pool = new Pool ({
    host: 'localhost', 
    user: 'usuarioconelquesecreolaBDD',
    password: 'clavebdd',
    database: 'nombrebddcreada',
    port: '5432'//podemos darle el puerto, si no lo establece por defecto, el 5432 es el por defecto de postgresql 
});
```
## Iniciar el servicio
Luego de descargar el repositorio, haber creado la bdd en postgresql y finalmente haber modificado el archivo `'.\REST-NODEJS-POSTGRESQL\src\controllers\index.controller.js'`,
debemos abrir la consola de comandos en la carpeta del proyecto, y ingresar el siguiente comando para descargar las dependencias del proyecto.

`'npm install'`

Luego para poder ejecutar el servicio ingresamos el siguiente comando:

`'node /src/index.js'`
a lo que nos mostrará el mensaje `'Server on port 4000'`

## Consumir la REST API

| EndPoint												  |   Tipo      	 | Ejemplo                        |
| ----------------------------------|--------------- |--------------------------------|
|/users/											   		| GET 			 | http://localhost:4000/users		|
|/users/ <id>									          | GET		 | http://localhost:4000/users/1 	|
|/users/								            | POST      		 | http://localhost:4000/users		  |
|/users/ <id>                       		| DELETE 		     | http://localhost:4000/users/1		|
|/users/ <id>               		        | PUT  					 | http://localhost:4000/users/6   |
  
 - En la tabla anterior el primer GET trae todos los registros de la API
 - El segundo GET trae un registro de la API según su ID
 - El método POST se usa para ingresar un registro a la API (el ID se genera automaticamente)
 - El método DELETE se usa para eliminar un registro según su ID
 - El método PUT se usa para modificar un registro según du ID


