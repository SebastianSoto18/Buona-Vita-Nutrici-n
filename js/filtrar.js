var campofiltro = document.querySelector('#filtrar');

campofiltro.addEventListener('input', function(e) {

    var pacientes = document.querySelectorAll('.paciente');

    if(this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
       
            var paciente = pacientes[i];
            var nombre= paciente.querySelector('.info-nombre').textContent;
            
            var expression = new RegExp(this.value,"i");

            if (!expression.test(nombre)) {
                    paciente.classList.add('invisible');
            }else{
                paciente.classList.remove('invisible');
            }
        }

    }else{

        for (var i = 0; i < pacientes.length; i++) {
            pacientes[i].classList.remove('invisible');
        }
    }
 
});