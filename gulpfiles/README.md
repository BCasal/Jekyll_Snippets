# Gulpfiles Jekyll

## Jekyll-BS

[**Scaffold completo**](https://github.com/BCasal/Scaffold-Jekyll-Empty-Gulp-BS)
[**Descripcion detallada tareas**](https://gist.github.com/BCasal/89e0a0dde82e04c64bf8e74babd0710e#file-jekyll-bs-js)

Después de instalar las dependencias con `$ npm install` hay que ejecutar
el comando `$ jekyll build` para hacer el primer complidao del sitio,
después (y el resto de veces) ya se puede ejecutar el comando `$ gulp`
para trabajar en el proyecto.

El comando `$ gulp` ejecuta los mismos procesos que el comando
`$ jekyll s` con una diferencia, el servidor local se monta con
*Browser-Sync*.

Hay una tarea *sass* para procesar el archivo `.css` compilado por Jekyll,
la tarea se ejecuta con el comando `$ gulp sass` y no está integrada en
el compilado, hay que ejecutarla después de detener el comando `$ gulp`

## Gulp-Sass

[**Scaffold completo**](https://github.com/BCasal/Scaffold-Jekyll-Empty-Gulp-SASS)
[**Descripcion detallada tareas**](https://gist.github.com/BCasal/89e0a0dde82e04c64bf8e74babd0710e#file-gulp-sass-js)

Despues de instalar las dependencias con `$ npm install` hay que ejecutar
la teréa `$ gulp jekyll-build` para hacer el primer complidao del sitio,
despues (y el resto de veces) ya se puede ejecutar el comando `$ gulp`
para trabajar en el proyecto.

Este archivo es una ampliación del anterior, y en este caso se integra
la tarea *sass* con el compilado de archivos `.scss`

OJO!!! Primero hay que deshabilitar el compilado de archivos .scss a Jekyll.

> OJO!!! Para deshabilitar el compilado de archivos .scss a Jekyll
> hay que mover el archivo principal .scss (archivo con imports) dentro de la carpeta `_sass`
> después hay que borrar la cabecera front matter de ese mismo archivo

## Archivo package.json

El archivo package.json es valido para instalar las dependencias de los
2 archivos gulpfile.js

## Fuentes

**FORK:** [http://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/](http://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/)

**TAREA SASS:** [https://gist.github.com/BCasal/1eb6747760abe62472aa](https://gist.github.com/BCasal/1eb6747760abe62472aa)
