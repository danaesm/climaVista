# README
## Instrucciones para la instalación
Aqui se encuenran las insrucciones de manera general para poner en marcha el proyecto.
* Clonar el repositorio y bajar los archivos.
* Instalar dependencias:
  * npm install
* Compilar el proyecto:
  * npx cross-env NODE_ENV=production webpack
* Iniciar el servidor:
  * npm start
    * Este comando inicia automaticamente la aplicación en el navegador.

## Uso
* En el campo de texto se puede escribir el nombre de una ciudad o una ubicación, la app busca en la api y devuelve la información sobre el clima actual, una imagen referente y la predicción para las siguientes 10 horas en ese lugar.
* el botón de abajo, obtiene la ubicacipon en tiempo real (despues de obtner permisos) y busca en la API la misma información que de manera manual.
* Si no encuentra el lugar o está mal escrito, devuelve un mensaje y muestra la imagen por defecto.