//1. escribirme un arreglo de sus libros favoritos
let myFavBooks = ["El matrimonio de los peces rojos", "La insoportable levedad del ser", "El arte de la compasión", "Harry Potter y el prisionero de Azkaban"]
//método pop() elimina el último elemento del Array
myFavBooks.pop();
console.log(myFavBooks)
//método push() agrega elemento al Array al final
myFavBooks.push("Harry Potter y  el Prisionero de Azkaban")
console.log(myFavBooks)

//pintar dnámicamente mi array

let librero = document.getElementById("estante");
for (const libro of myFavBooks) {
      librero.innerHTML += "<div>"+ libro +"</div>";
}

//traer libro por agregar

let botonAgregar = document.getElementById("button-addon2")

//función para leer el valor del input
let traerValorInput = () => {
      let nuevoLibro = document.getElementById("inputLibro").value
      console.log(nuevoLibro)
      myFavBooks.push(nuevoLibro)
      console.log(myFavBooks)
      librero.innerHTML += "<div>"+ nuevoLibro +"</div>";
}

botonAgregar.addEventListener("click", traerValorInput)

//Botón de borrar último libro
let botonBorrarUltimo = document.getElementById("borrarUltimo")
//función de borrar último libro
const borrarLibro = () => {
      myFavBooks.pop()
      console.log(myFavBooks)
      librero.innerHTML = "";
      for (const libro of myFavBooks) {
            librero.innerHTML += "<div>"+ libro +"</div>";
      }

}
//darle la función al botón de borrar
botonBorrarUltimo.addEventListener("click", borrarLibro)

