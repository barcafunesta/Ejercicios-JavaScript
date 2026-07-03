let arreglo = ["Rojo","Verde","Azul","Amarillo","Negro"];

let conjunto = new Set(arreglo);

let mapa = new Map();

function transformar(){

    mapa.clear();

    let i = 1;

    conjunto.forEach(color=>{

        mapa.set(i,color);

        i++;

    });

}

function imprimir(){

    let texto="";

    mapa.forEach((valor,clave)=>{

        texto += clave + " => " + valor + "<br>";

    });

    document.getElementById("resultado").innerHTML=texto;

}