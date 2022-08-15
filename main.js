let bulba;
let priPoke;
let bulba2;


let fetchPokemon = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await res.json()
    return data
}


// aca te daba error 
let char = fetchPokemon(5)

// pero podes hacerlo asi 
fetchPokemon(1).then(e => {
    bulba = e
    //console.log(bulba.name)
})

// o con una funcion 
async function ala (){
    bulba2 = await fetchPokemon(3)
    console.log(bulba2.name)
}

//ala() 

// para poder Armar Equipos 

let botonMiEquipo = document.getElementById("miEquipo")
let botonMiEquipoRival = document.getElementById("miEquipoRival")

// funcion para obtener un numero random
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// funcion para crear un equipo del numero que se necesite y guardarlo en un array 
let crearEquipo = async (numero, eqp) => {
    for (let i = 1; i <= numero; i++) {
        await fetchPokemon(random(1, 15)).then(e => eqp.push(e))
    }
    return eqp
}

// eventos 

/* botonMiEquipo.addEventListener("click", () => {
    equipo = []
    crearEquipo(5, equipo, "mi equipo").then(e => e.forEach(element => {
        console.log(element.name)
    }))
})

botonMiEquipoRival.addEventListener("click", () => {
    equipoRival = []
    crearEquipo(5, equipoRival, "equipo rival ").then(e => e.forEach(element => {
        console.log(element.name)
    }))
}) */


// aca quiero crear una lista de pokemon de los 25 primeros
let pokedex = []
crearEquipo(25, pokedex)

let miEquipo = []
let numeroPokeElegido = 1
// asumo que tengo mi pokemon elegido que podria ser 1,4,7
miEquipo.push(pokedex[numeroPokeElegido-1]) // porque como esta en 0 le tengo que restar 1
console.log(miEquipo) // este sale undefined
console.log(pokedex) // este sale con todos los primeros 25 pokes con sus propiedades
console.log(pokedex[0]) // pero este me sale undefined tambien
// console.log(pokedex[0].name) este me tira error directamente

// pero si en la consola de chrome ejecutas -> console.log(pokedex[0]) te sale el array del pokemon
// y otra linea mas con undefined

// si tambien ejecuto -> console.log(pokedex[0].name) que vendria siendo el nombre me pasa lo mismo
//tira el nombre y abajo undefined

// yo lo que quiero es cargar el array con los pokemon que quiero y despues usar el que quiero copiandolo
//a otro array 

// por ejemplo copiar el inicial y el inicial del rival y acceder a todas sus propiedades mediante el array
// quizas los estoy asignando mal pero no se