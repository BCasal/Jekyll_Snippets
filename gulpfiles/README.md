# Gulpfiles

## Jekyll-BS

El comando `$ gulp` ejecuta los mismos procesos que el comando
`$ jekyll s` con una diferencia, el servidor local se monta con
*Browser-Sync*.

Hay una tarea llamada *sass* para procesar el archivo .css
compilado por jekyll que, renombra el archivo como "archivo.min.css"
añade los prefijos necesarios, y minifica el contenido.

## Gulp-Sass

En este archivo a Jekyll se le quita el compilado de archivos .scss para
integrarlo con gulp-sass.

Despues de instalar las dependencias con `$ npm install` hay que ejecutar
la teréa `$ gulp jekyll-build` para hacer el primer complidao del sitio,
despues (y el resto de veces) ya se puede ejecutar el comando `$ gulp`
para trabajar en el proyecto.

> RECUERDA!!! Solo es necesario ejecutar `$ gulp jekyll-build` una unica
> vez igual que `$ npm install`.

## Archivo package.json

El archivo package.json es valido para instalar las dependencias de los
2 archivos gulpfile.js.
