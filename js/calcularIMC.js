function calcularIMC(peso,altura){

    return (imc = peso/ (altura*altura)).toFixed(2);

}

function validarpeso(peso){ 

    if(peso> 0 && peso<500){

        return true;

    }else{

        return false;

    }

}

function validaraltura(altura){

    if(altura>0.50 && altura<2.70){

        return true;

    }else{

        return false;

    }

}





   
 var pacientes = document.querySelectorAll(".paciente");

    for(var i=0;i<pacientes.length;i++){

     var paciente=pacientes[i];

     var peso=paciente.querySelector(".info-peso").textContent;
     var altura=paciente.querySelector(".info-altura").textContent;



    if( validarpeso(peso) && validaraltura(altura) ){ 

        paciente.querySelector(".info-imc").textContent=calcularIMC(peso,altura);

    }else{

        paciente.querySelector(".info-imc").textContent="Verifique peso o altura del paciente";
        paciente.classList.add("paciente-error");

    }
}
