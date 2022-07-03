var buton = document.querySelector('#buscar');

buton.addEventListener('click', function(e) { 

    var peticion= new XMLHttpRequest;

    peticion.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    
    peticion.addEventListener('load', function (){
        console.log(peticion.response);
    });

    peticion.send();

    });