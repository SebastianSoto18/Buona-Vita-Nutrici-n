var campofiltro = document.querySelector('#filtrar');

campofiltro.addEventListener('input', function(e) {

    var pacientes = document.querySelectorAll('.paciente');

    for (var i = 0; i < pacientes.length; i++) {
       
        var paciente = pacientes[i];
        var nombre= paciente.querySelector('.info-nombre').textContent;
        
        if (nombre != this.value) {
            paciente.classList.add('invisible');
        }else{
            paciente.classList.remove('invisible');
        }
    }

    

});