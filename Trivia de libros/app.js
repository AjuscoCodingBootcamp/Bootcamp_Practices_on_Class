/* Componente principal de Trivia 
Author: Vania Ramírez
Projecto 1
15/septiembre/2021 */

//probar si están conectados
alert('estoy conectado')

var app = "Trivia"
var userName = prompt("Bienvenido, ingresa tu nombre")
console.log(userName) // muestrame el username

//acceder a html desde javaScript document
document.getElementById("title").innerHTML = ("Proyecto de " + app)
document.body.style.background = "pink"
//pintar en el document en el h2 el nombre ingresado del usuario
document.getElementById("user_name").innerHTML= 
("Bienvenido amigx " + userName)

var question1 = prompt("¿Cuántos años tienes?")
console.log(question1)

document.getElementById("receivedAnswer1").innerHTML = 
("Tu respuesta 1: " + question1)

var correctAnswer1 = 29

document.getElementById("correctAnswer1").innerHTML =
 ("La respuesta correcta era: " + correctAnswer1)

 if (question1 == correctAnswer1) {
       alert("Correcto!")
 } else {
       alert("Incorrecto ")
 } 