const animales =[];

const limite = 5;

const formulario = document.getElementById("regisanimales");
const lista = document.getElementById("lista");
const animal = document.getElementById("an");
const inicio = document.getElementById("inicio");
const eliminar = document.getElementById("eliminar");
const insertar =document.getElementById("subir");


formulario.addEventListener("submit",  function(evento){

    evento.preventDefault();
        const valoringresado = animal.value.trim();

            if(valoringresado === ""){
                alert ("ingrese un animal." );
                return;
            }
            
            if (animales.length < limite){
                animales.push(valoringresado);
                animal.value = "";
                actualizarLista();

            }else{
                alert ("no se pueden ingresar mas de 5 animales.");
            }

});

inicio.addEventListener("click", function(){

    const valoringresado = animal.value.trim();


    if(animales.length >=limite){
        animales.pop();
    }

    animales.unshift(valoringresado);

    animal.value = "";

    actualizarLista();

})

eliminar.addEventListener("click", function(){

    const valoringresado = animal.value.trim();
    
    if(animal.length < 3 ){
        alert("No hay tercer registro para eliminar. ");
        return;
    }
    animales.splice(2,1,valoringresado);

    animal.value = "";

    actualizarLista();
});

function actualizarLista(){

 lista.innerHTML ="";
 animales.forEach(function(item){

    const li = document.createElement("li");

    li.textContent=item;

    lista.appendChild(li);
 });
}

