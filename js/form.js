var botonadd=document.querySelector("#adicionar-paciente");

botonadd.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionar");
    var paciente=capform(form);
    var tabla = document.querySelector("#tabla-pacientes");
    var pacienteTr=constructr(paciente);
    var error=validarpaciente(paciente);

    if(error.length > 0) {
        mostrarmensaje(error);
        return;
    }

    tabla.appendChild(pacienteTr);
    form.reset();

    var mensajeserrores= document.querySelector('#messageerror');
    mensajeserrores.innerHTML="";
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

    pacientetr.appendChild(constructd(paciente.nombre,"info-nombre"));
    pacientetr.appendChild(constructd(paciente.peso,"info-peso"));
    pacientetr.appendChild(constructd(paciente.altura,"info-altura"));
    pacientetr.appendChild(constructd(paciente.gordura,"info-gordura"));
    pacientetr.appendChild(constructd(paciente.imc,"info-imc"));
    
    return pacientetr;
}


function constructd(dato,clase){
    var td= document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarpaciente(paciente){
    var mensaje=[];

    if(!validarpeso(paciente.peso)){
        mensaje.push("ERROR, verificar el campo del peso");
    }

    if(!validaraltura(paciente.altura)){
        mensaje.push("ERROR, verificar el campo de la altura");
    }

    if(!(paciente.nombre.length > 0)){
        mensaje.push("ERROR, verificar el campo del nombre");
    }

    if(!(paciente.gordura.length > 0)){
        mensaje.push("ERROR, verificar el campo de la gordura");
    }

    return mensaje;
}

function mostrarmensaje(error){
    var ul = document.querySelector('#messageerror');
    ul.innerHTML="";

   error.forEach(function(errors){
        var li = document.createElement("li");
        li.textContent = errors;
        ul.appendChild(li);
   });

}