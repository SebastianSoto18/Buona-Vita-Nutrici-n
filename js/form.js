var botonadd=document.querySelector("#adicionar-paciente");

botonadd.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionar");
    var paciente=capform(form);
    var tabla = document.querySelector("#tabla-pacientes");
    var pacienteTr=constructr(paciente);
    
    tabla.appendChild(pacienteTr);

    form.reset();
});


function capform(form){

    var paciente ={
         nombre:form.nombre.value,
         peso:form.peso.value,
         altura:form.altura.value,
         gordura:form.gordura.value,
         imc:calcularIMC(form.peso.value,form.altura.value)
    }

   return paciente;
}

function constructr(paciente){

    var pacientetr=document.createElement("tr");
    pacientetr.classList.add("paciente");

    var nombretd=constructd(paciente.nombre,"info-nombre")
    var pesotd=constructd(paciente.peso,"info-peso");
    var alturatd=constructd(paciente.altura,"info-altura");
    var gorduratd=constructd(paciente.gordura,"info-gordura");
    var imctd=constructd(paciente.imc,"info-imc");

    pacientetr.appendChild(nombretd);
    pacientetr.appendChild(pesotd);
    pacientetr.appendChild(alturatd);
    pacientetr.appendChild(gorduratd);
    pacientetr.appendChild(imctd);
    
    return pacientetr;
}


function constructd(dato,clase){
    var td= document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}