const libros = new Set ();
const limite = 5;

const textlibro = document.getElementById("libro");
const lista = document.getElementById("lista");

const btnagregar = document.getElementById("subir");
const btneliminar = document.getElementById("eliminar");
const btnImprimir = document.getElementById("imprimir");


function actualizarlista(){
    
    lista.innerHTML = "";

    libros.forEach(function(libro){

    const li = document.createElement("li");
    li.textContent = libro;
    lista.appendChild(li);
   
    });

}

actualizarlista();

btnagregar.addEventListener("click", function(){

    const libro = textlibro.value.trim();
    
        if(libro === ""){
            alert("ingrese un libro");
            return;
        }

        if(libros.size >= limite){
            alert("No se pueden agregar mas de 5 libros");
            return;
        }

        if(libros.has(libro)){
            alert("Este libro ya existe");
            return;
        }

        libros.add(libro);

        textlibro.value ="";

        actualizarlista();

});


btneliminar.addEventListener("click", function(){

   const nombre = textlibro.value.trim();

   if (nombre === ""){
    alert("Ingrese el nombre del libro que quiere eliminar");
    return;
   }

   if(libros.delete(nombre)){
    alert("el libro ha sido eliminado");
    return;
   }else{
    alert("el libro no existe");
    return;
   }

   textlibro,value ="";

    actualizarLista();

});

btnImprimir.addEventListener("click", function () {
    actualizarlista();

});