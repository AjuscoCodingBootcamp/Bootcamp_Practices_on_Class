import { getPokemonfromApi} from "./data.js"
//in this JS Document we will make the DOM manipulations

//function to be triggered from button
let searchPokemon = ( ) => {
      let searchValue = document.getElementById("searchInput").value
      console.log(searchValue)
      getPokemonfromApi(searchValue)

}

//button to trigger the funtion search
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchPokemon)


