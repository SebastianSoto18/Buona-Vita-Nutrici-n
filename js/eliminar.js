
var tabla = document.querySelector('#tabla-pacientes');


tabla.addEventListener('dblclick', function(e) {
    
    e.target.parentNode.classList.add('out');
    
    setTimeout(function() {

        e.target.parentNode.remove();

    },300);
    
    });
