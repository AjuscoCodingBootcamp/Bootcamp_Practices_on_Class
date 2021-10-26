//bring data with fetch method

//function to render a pokemon
let renderingPokemonCard = (pokemonData) => {
  console.log(pokemonData)
  let pokemonCard = document.getElementById("pokemon-card")
  let pokemonName = document.getElementById("pokemon-name")
  pokemonName.innerHTML = pokemonData.name
  let pokemonImg = document.getElementById("pokemon-img")
  pokemonImg.setAttribute("src", pokemonData.sprites.front_default)

}
 
export let getPokemonfromApi = (pokemon) => {
  //let pokemon = pokemon
fetch("https://pokeapi.co/api/v2/pokemon/" + `${pokemon}`)
.then( (response) => response.json())
.then( (data) => renderingPokemonCard(data) )
.catch((error) => console.log(error))

}
//get random pokemones
let getRandomID = () => {
  let randomID = Math.round(Math.random() * 150)
}


/* FUNCTION TO PAINT INTO THE DOCUMENT

console.log(response.status)
      if(response.status == 404) {
            alert("existe ese pokemon?")
           
      } else {
            response.json()
            .then( (data) => renderingPokemon(data))
            .catch((error) => console.log(error))
      }

function renderPokemon(pokeData){
  let allPokemonContainer = document.getElementById('poke-container');
  let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
  pokeContainer.classList.add('ui', 'card');


  let pokeName = document.createElement('h4') 
  pokeName.innerText = pokeData.name

  let pokeNumber = document.createElement('p')
  pokeNumber.innerText = `#${pokeData.id}`
 
  let pokeTypes = document.createElement('ul') //ul list will hold the pokemon types



  pokeContainer.append(pokeName, pokeNumber, pokeTypes);   //appending all details to the pokeContainer div
  allPokemonContainer.appendChild(pokeContainer);       //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}
*/












// testing movies API if still free and available only working in Chrome
/*
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c05a093b")
.then( (response) => {
  response.json().then (
    (data) => {
      console.log(data.Title)
    }
  )
}

)

*/
