window.onscroll = function(){
    scroll = document.documentElement.scrollTop; // esta variable va almacenando los datos de cunado hacemos scroll. Numero de pixeles que recorremos
    header = document.getElementById("header"); // almacena mos la variable header dentro de una variable header
    if(scroll > 20){
        header.classList.add('nav_mod'); // Añadimos la clase al header, esta clase sera la imaginaria que creamos en el css para cuando se mueva el scroll
    } else if(scroll<20){
        header.classList.remove('nav_mod'); // removemos la clase cuando ya regrese a la posición inicial el scroll
    }
    
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu); //al hacer click en el boton menu se ejecutará la función mostar_menu

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');  //toggle permite añadir la clase al hacer click y temoverla cuando nuevamente se haga click
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav'); //para que se muestre el menu el pantalla pequeña al hacer click sobre el icono de menu de amburguesa
}

window.addEventListener("resize", function() {

    if(window.innerWidth > 760){
        menu.classList.remove("move_content");  //Removemos las clases agregadas para la opción responsive
        body.classList.remove("move_content");
        nav.classList.remove("move_nav"); 
    }

})


// Agrandar los gráficos del resultado
mediumZoom('.zoom', {
    background: '#1c1c1c'
})