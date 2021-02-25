
//----------DOM----------------

// METODOS DE SELECCION DE ELEMENTOS

// getElementById () // Selecciona un elemento por ID
// parrafo = document.getElementById ("parrafo");

// getElementsByTagName () // Selecciona todos los elementos que coinciden con el nombre de la etiqueta especificada
// parrafo = document.getElementsByTagName ("p"); --------> nos devuelve el p como coleccion de elementos HTML

// querySelector () // Devuelve el primer elemento que coincida con el grupo especificado de selectores
// parrafo = document.querySelector ("#rancio");  seleccionamos con # para id y con . para clases

// querySelectorAll () // Devuelve todos los elementos que coinciden con el grupo especificado de selectores.


//-----METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS------------


// setAttribute () - Modifica el valor de un atributo

// getAttribute () - Obtiene el valor de un atributo

// removeAttribute () - Remueve el valor de un atributo


//-------------ATRIBUTOS GLOBALES------------


// class - lista de clases del elemento separadas por espacios

// contentEditable - Indica si el elemento puede ser modificable por el usuario (bool)

// dir - Indica la direccionalidad del texto, derecha a izquierda o al reves.

// id - Define un identificador unico

// style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento

// tabindex - Indica si el elemento puede obtener un focus de input

// title - Contiene un texto con informacion relacionada al elemento al que pertenece

//----------------------------------



// const titulo = document.querySelector(".titulo");

//titulo.setAttribute ("contentEditable", "true"); // edita el texto en cuestion

// titulo.setAttribute ("dir", "rtl"); // edita el texto en cuestion


//-----ATRIBUTOS DE INPUTS------------

// input.className
// input.value
// input.type

// accept  IMPORTANTE!!!!!!!!!!!!
// const titulo = document.querySelector(".input-normal");
// input.accept = "image/png" -----> solo aceptara imagenes .png

// input.form

// IMPORTANTE PARA CANTIDAD DE CARACTERES DE UNA CONTRASEÑA
// input.minLength ----> La minima cantidad de caracteres que tiene que tener un input

// input.placeholder

// IMPORTANTE PARA LOS CAMPOS REQUERIDOS EN UN FORMULARIO
// input.required = "required";