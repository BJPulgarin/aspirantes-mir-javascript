let persona={
    nombre: "Brajan",
    edad: 20,
    ciudad: "Medellín",
    profesion: "desocupado",
}

console.log(persona)

function presentacion(persona){
    return ("Hola, soy "+ persona.nombre + ", tengo " + persona.edad + " años, " + "vivo en " + persona.ciudad + " y soy un " + persona.profesion + ".")
}

let mensaje = presentacion(persona)

console.log(mensaje)

persona.hobbies = ["leer", "escuchar música", "álgebra"]

console.log(persona.hobbies)

function imprimirHobbies(persona){
    let hobbies = persona.hobbies
    for (i=0; i<hobbies.length; i++){
        console.log(hobbies[i])
    }
}

imprimirHobbies(persona)