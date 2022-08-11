const getPokemon = async (name)=> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res.json()
  const pokemon_name = data.forms[0].name
  const pokemon_img = data.sprites.front_shiny
  const ability_1 = data.abilities[0].ability.name
  const ability_2 = data.abilities[1].ability.name
  const attack = data.stats[1].base_stat
  const def = data.stats[2].base_stat
  const h_p = data.stats[0].base_stat
  const type = data.types[0].type.name
  const list = [pokemon_name, pokemon_img, ability_1, ability_2,attack,def,h_p,type]
  addToPage(list)
  console.log(list)
  return list
};

const getData  = document.querySelector('#show_pokemon')
getData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const pokemon_name =  e.path[0][0].value
    const pokemon_info = getPokemon(pokemon_name)
    
    return 
});


const addToPage = (list) =>{
  const p = document.createElement('p')
  p.innerHTML = `<div class="card m-auto" style="width: 18rem;">
  <img class="card-img-top w-75 mx-auto" src="${list[1]}" alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title text-center" style="text-transform: capitalize;">${list[0]}</h5>
  <p class="card-text" style="text-transform: capitalize;">Type: <br> ${list[7]}</p>
  <p class="card-text" style="text-transform: capitalize;">Abilities: <br> ${list[2]}, ${list[3]}</p>
  <p class="card-text" style="text-transform: capitalize;">Attack: <br> ${list[4]}</p>
  <p class="card-text" style="text-transform: capitalize;">D#: <br> ${list[5]}</p>
  <p class="card-text" style="text-transform: capitalize;">HP: <br> ${list[6]}</p>

  </div>
  </div>`
  document.querySelector('#pokemon_cards').append(p)
};



const clearBtn = document.getElementById('clear');
const clearPokemon = () =>{
    document.querySelector('.clear-div').innerHTML=""
};
clearBtn.addEventListener('click', clearPokemon);






// fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=100")
// .then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// const getPokemonData = async() => {
//   console.log("getting pokemon")
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
//   const data = await res.json()
//   console.log(data)
//   for (let name of data.pokemon) {
//     const p = document.createElement('p')
//     p.innerText = name
//     document.body.append(p)
  //     const info ={
  //     name: data['forms'][0]['name'],
  //     abilities: data['abilities'][1]['ability']['name'],
  //     base_exp: data['base_experience'],
  //     sprite: data['sprites']['front_shiny'],
  //     attack: data['stats'][1]['base_stat'],
  //     h_p: data['stats'][0]['base_stat'],
  //     def: data['stats'][2]['base_stat']
  //   }
  //   return info
  // }
// }}
// getPokemonData()
// const loadData = async () => {
//   console.log("Loading Pokemon")
//   const data = await getPokemonData()
//   const pokemon = data.pokemon
//   pokemon.map(addToPage)
// }


// const addToPage = (name) => {
//   const p = document.createElement("p")
//   p.innerText = name
//   document.querySelector("section").insertAdjacentElement("beforeend",p)

// }