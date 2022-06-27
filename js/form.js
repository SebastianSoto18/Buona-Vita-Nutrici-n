var botonadd=document.querySelector("#adicionar-paciente");

botonadd.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionar");
    var tabla = document.querySelector("#tabla-pacientes");
    var nombre=form.nombre.value;
    var peso=form.peso.value;
    var altura=form.altura.value;
    var gordura=form.gordura.value;


    pacientetr=document.createElement("tr");
    nombretd=document.createElement("td");
    pesotd=document.createElement("td");
    alturatd=document.createElement("td");
    gorduratd=document.createElement("td");
    imctd=document.createElement("td");

    nombretd.textContent=nombre;
    alturatd.textContent=altura;
    pesotd.textContent=peso;
    gorduratd.textContent=gordura;
    imctd.textContent=calcularIMC(peso,altura);

    pacientetr.appendChild(nombretd);
    pacientetr.appendChild(pesotd);
    pacientetr.appendChild(alturatd);
    pacientetr.appendChild(gorduratd);
    pacientetr.appendChild(imctd);
    

    tabla.appendChild(pacientetr);
});