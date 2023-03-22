let receta={

}

receta.nombre="Sandwich"
receta.ingredientes=[]

receta.ingredientes.push({nombre:"Pan",cantidad:2})
receta.ingredientes.push({nombre:"Queso",cantidad:1})
receta.ingredientes.push({nombre:"Quo",cantidad:7})

console.log(receta.ingredientes[0].nombre)

let cantidades=0
for (let i=0; i<receta.ingredientes.length; i++){
    cantidades+=receta.ingredientes[i].cantidad
}
console.log(cantidades)