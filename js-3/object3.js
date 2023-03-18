let receta = {
}

receta.nombre = "Sandwich"
receta.ingredientes = []

receta.ingredientes.push({nombre:"Pan", cantidad:2})
receta.ingredientes.push({nombre:"Queso", cantidad:1})

console.log(receta.ingredientes[0].nombre)

function sumCant(receta){
    let cant=0
    for (let i=0; i<receta.ingredientes.length; i++){
        cant+=receta.ingredientes[i].cantidad
    }
    return cant
}

console.log(sumCant(receta))


