# Ejercicio SASS

1. Añade el código SCSS necesario en _style.scss para estilizar la sección de equipo. Utiliza el __nesting__ propio de SASS para definir los estilos, siguiendo el ejemplo de 'showcase'. Usa el operador '&' en alguna ocasión
2. Explore el fichero main.css. Fíjate que se han generado varios estilos de forma dinámica: m-0, m-1, m-2, my-0, my-1, etc. Esto se debe al bucle @each en la linia 11 de _utilities.scss. En la linia 28 del HTML usa la clase 'my-1'; para seprar 1rem el contenedor por el top i el bottom. Añade una clase en el elemento HTML adecuado  para dejar 5rem de margen entre la sección del header y la sección de equipo.
3. Añade una nueva regla CSS en **responsive/_mobile.scss**; para que al llegar a 700px el viewport, los miembros del equipo queden apilados unos encima de otros.
4. Parametriza el breakpoint de móvil ubicado en **responsive/_mobile.scss**. Usa una variable definida en **_config.scss** para establecer en que punto queremos aplicar el diseño responsive para móvil.
5. Crea un nuevo botón a partir de la plantilla de botón definida en **componentes/_button.scss**. Este nuevo boton debe ser igual a los otros, pero debe tener un color rgb(36, 94, 36). Define el color junto a las otras variables. Usa este nuevo estilo para el botón 'Sign In'.

### Diseño final esperado
![Diseño](https://github.com/omiras/sass-landing-page/blob/main/img/dise%C3%B1o.png)


## BONUS

Serias capaz de enriquecer  el bucle de la linia 11 de _utilities.scss? Queremos generar ahora 5 clases nuevas: .mt-1 , .mt-2, .mt-3, .mt-4, .mt-5. Estas clases permitiran separar 1,2,3,4,5 rems el elemento HTML SOLO en la parte superior (top). Piensa como montar esta regla CSS dinámics dentro de la directiva @each.
