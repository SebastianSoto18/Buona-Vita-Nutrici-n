function calcularIMC(peso,altura){
    return (imc = peso/ (altura*altura)).toFixed(2);
}

//TODO ADICIONAR FUNCIONALIDADES PARA ELIMINAR Y ACTUALIZAR CON BOOTSTRAP Y SEEWTALERT

   
 var pacientes = document.querySelectorAll(".paciente");

    for(var i=0;i<pacientes.length;i++){
     var paciente=pacientes[i];

     var peso=paciente.querySelector(".info-peso").textContent;
     var altura=paciente.querySelector(".info-altura").textContent;



    if((peso > 0 && peso < 500) && (altura > 0 && altura < 2.80)){
        paciente.querySelector(".info-imc").textContent=calcularIMC(peso,altura);
    }else{
        paciente.querySelector(".info-imc").textContent="Verifique peso y altura del paciente";
        paciente.classList.add("paciente-error");
    }
}
