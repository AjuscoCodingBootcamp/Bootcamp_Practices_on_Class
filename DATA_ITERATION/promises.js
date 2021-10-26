//JS PROMISES PTRACTICE

//Promises are statements that should complete to pass to the next step
let suRespuesta;
//promise with 2 states handlers; resolve & reject
let promesa = new Promise( (resolve, reject) => {
      let a = 1 + 1
      let leGusto = true;
      if(a == 2 && leGusto == true) {
            resolve(" Success! ")
      } else {
            reject("Fail!")
      }
})

let seamosNovios = (suRespuesta) => {
      console.log("ser novios en proceso! " + suRespuesta)
     
      if( suRespuesta == true ){
            let meQuiere = true;
            console.log( "sí seremos novios... " + suRespuesta)
            console.log("me Quiere: " + meQuiere)

      } else {
            console.log("falsa alarma no me quiere, SIGAMOS SOLTEROS! " + suRespuesta)
      }
}

//exercise add new pinky promise to get married and have children 


promesa.then((respuesta) => {
      console.log("la promesa se cumplió, estamos listos para el siguiente paso" + respuesta)
      suRespuesta = true;
      seamosNovios(suRespuesta)
}).catch((respuesta) => {
      suRespuesta = false;
      console.log("la promesa no se cumplió, rejected! " + respuesta)
}).finally( () => {
      let selfLove = true 
      console.log("work is done anyway! " + selfLove) 
      }
)

//other excercise 

let keepsHisWord;
keepsHisWord = true;

let promise1 = new Promise((resolve, reject) => {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});

console.log(promise1);

promise1.then( (response) => {
      console.log(response)
}).catch(
      (error) => {console.log(error)}
)

//time out on promises
promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          message: "The man likes to keep his word",
          code: "aManKeepsHisWord"
        });
      }, 10 * 1000);
    });
    console.log(promise2);