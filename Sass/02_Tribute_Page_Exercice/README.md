# Ejercicio SASS

Este proyecto es un [**frork**](https://github.com/HugoGiraudel/sass-boilerplate) del **boilerplate** definido por @HugoGiraudel; siguiendo las guías de estilo de SASS para estructurar los ficheros SCSS.

Escribe las reglas SASS necesarias para obtener el diseño deseado.

## Requisitos

0. Fíjate que el contenido de __main__ no está centrado, ni tiene un ancho máximo definido. Busca en **base/_helpers.scss** una clase adecuada para ello y añádela al tag main.

1. Escribe en **pages/_home.scss** una [regla SASS anidada](https://www.w3schools.com/sass/sass_nesting.asp), que permita alinear el texto en el centro para los tags __h1, p, figure, #img_caption__

2. Escribe en **pages/_home.scss** una regla SASS/CSS para poner el fondo del color gris más clarito posible de todos los colores definidos en **abstracts/_variables.scss**

3. Escribe en **pages/_home.scss** una regla SASS anidada, que permita alinear el texto en el centro para el texto que pone "Here's a tiem line of DR. Borlaug life"

4. Hay un margen molesto en todos los **h1** que nos gustaria hacer desaparecer. Si queremos hacer desaparecer el margen para **todos** los h1 de nuestra Web; ¿dónde sería más adecuado definir la regla CSS? .

5. Queremos cambiar los estilos de **todas** las listas desordebadas de nuestra Web. Queremos que en vez de un círculo se vea un cuadradito. Además. queremos dejar un margen superior de 10px entre elementos \<li> ¿Dónde lo podemos cambiar y qué regla CSS debemos escribir?

6. Queremos cambiar el color "Main brand color" de la Web por el #5037CD.
Hazlo y observa que efecto ocurre. Por cierto, nos piden que usemos el formato RGB para definir el color; en armonía con el formato de los demás colores.

7. Queremos crear un estilo de borde para poder reutilizar en el futuro en 
varias partes de la Web. Crea un [mixin](https://www.w3schools.com/sass/sass_mixin_include.asp) en **abstracts/_mixins.scss** de nombre 'addBorder'. Este mixin toma 1 parámetro de entrada, que será el grosor del borde. El mixin debe generar un borde de dicho grosor, sólido y de color "Main brand color". Aplica después el borde a la foto con una regla SASS.

8. Nos hemos dado cuenta al aplicar el borde que la foto no "cabe" dentro del contenedor asignado, ni tampoco es responsive. Mira que estilos debes aplicar a la imagen para que se vuelva [responsive](https://www.w3schools.com/howto/howto_css_image_responsive.asp). Puesto que queremos que **todas** las ímagenes de nuestra Web se comporten de la misma manera, piensa donde definir estos estilos.

9. Crea una media query **anidada** de manera que el borde en la foto solo se incluye en el caso que el ancho del dispositivo sea, como mínimo, de 768px. Incluye la media query en el lugar adecuado en **pages/_home.scss**

10. Crea una media query para que el tamaño del texto de toda la Web sea de 1rem cuando el ancho del dispositivo sea, como mucho, 768px

## BONUS

Observa que en **abstracts/_variables.scss** existe un variable llamada __$breakpoints__ . Trata de averiguar como obtener el valor 768px de dicha variable y úsalo en tus media queries, usando la función de SASS [map-get](https://sass-lang.com/documentation/values/maps).
