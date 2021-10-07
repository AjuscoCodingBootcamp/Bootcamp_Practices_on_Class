//bring data with fetch method
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then( (response) => {
    // console.log(typeof(response))
      response.json().then (
      (data) => {
      console.log(data)
      console.log(data.name)
      })
}
)