var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){
     var paciente=pacientes[i];

     var peso=paciente.querySelector(".info-peso").textContent;
     var altura=paciente.querySelector(".info-altura").textContent;



    if((peso > 0 && peso < 500) && (altura > 0 && altura < 2.80)){
        paciente.querySelector(".info-imc").textContent=(peso/(altura*altura)).toFixed(2);
    }else{
        paciente.querySelector(".info-imc").textContent="Verifique peso y altura del paciente";
        paciente.classList.add("paciente-error");
    }
}