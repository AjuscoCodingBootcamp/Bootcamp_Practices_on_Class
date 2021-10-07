
//Functions 
/*
let huevos = 5
let leche = 1.5
let harina = 2000
let sabor = "chocolate" */

//funcion para hacer el pastel
function elaborarPastel (huevos, leche, harina, sabor) {

      // traer ingredientes
      
      //mezclar ingredientes
     let masaDePastel =  harina + huevos + leche;

     // agregar el sabor
     let pastelListo = masaDePastel + sabor;

     return alert("pastel Listo" + pastelListo)
}


//encendido
elaborarPastel(10, 3, 4000, "fresa")

//mostrar pastel hecho
