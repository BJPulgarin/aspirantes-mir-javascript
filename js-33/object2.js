let persona={
    nombre: "Luis",
    edad: 70,
    ciudad: "Ponedera",
    profesion: "desempleado"
}

console.log(persona)

function presentacion(persona){
    return ("Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años y soy de " + persona.ciudad )
}

let mensaje = presentacion(persona)

console.log(mensaje)

persona.hobbies = ["cantar", "bailar"]

console.log(persona.hobbies)

for (let i=0; i<persona.hobbies.length; i++){
    console.log(persona.hobbies[i])
}