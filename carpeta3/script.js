
const meses = new Map ();

meses.set(1, "enero");
meses.set(2, "febrero");
meses.set(3, "marzo");
meses.set(4, "abril");
meses.set(5, "mayo");

const btnbuscar = document.getElementById("buscar");
const btnverano= document.getElementById("verano");
const btnimprimir = document.getElementById("imprimir");

const resultado = document.getElementById("resultado");
const lista = document.getElementById("lista");



btnbuscar.addEventListener("click", function(){
     
    if(meses.has(5)){
        resultado.innerHTML = "<h3> El mes 5 es: "+ meses.get(5)+ "</h3>";
    }else{
        resultado.innerHTML ="<h3> El mes no existe.</h3>";
    }

});

btnverano.addEventListener("click", function(){

    const verano = ["Junio", "Julio", "Agosto"];

    meses.set("Verano", verano);

    alert("Meses de verano agregados.");

});

btnimprimir.addEventListener("click", function(){

    lista.innerHTML = "";

    meses.forEach(function(valor, clave){

        const li = document.createElement("li");

        if(Array.isArray(valor)){
            li.textContent = clave + " → " + valor.join(", ");
        }else{
            li.textContent = clave + " → " + valor;
        }

        lista.appendChild(li);

    });

});