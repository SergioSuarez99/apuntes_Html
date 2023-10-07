// definicion o creacion de un arreglo}
// estructura para un arreglo
// const nombreArreglo =["elemento1", "elemento2", ...]
const colores=["verde", "rojo", "azul", "rosado", "morado", "amarillo", "blanco"]
console.log(colores)
// para acceder a un elemento especifico del objeto  se utiliza el  id que se le Asigna de la siguiente manera
console.log(colores[0])
console.log(colores[1])
console.log(colores[3])
console.log(colores[4])

const variosDatos =["dato caracter o String", 2345, true,"A", ["Sergio",25,["cancion Fav", "music Fav"]]]
console.log(variosDatos)
console.log(variosDatos[4][1])
console.log(variosDatos[4][2][1])
const informacion=["sergio Suarez", 3103350758,"sergio.990101@gmail.com"]
console.log(informacion)
informacion.push("calle 26#27-60")
console.log(informacion)
//sprice permite eliminar un elemento de acuerdo a la posicion que se tiene
informacion.splice(0,1)
console.log(informacion)
informacion.pop()
console.log(informacion)
//para crear arreglos de  n cantidad de elementos
const numeros = Array(100).fill(true)
console.log(numeros)
numeros.push(false)
console.log(numeros)
//propiedad length   sirve para contar cuantos elementos contiene un arreglo
console.log("el Arreglo tiene ", informacion.length, "elementos")
// recorriendo arreglos
const localidades=["kennedy","usaquen", "bosa", "Suba","fontibon", "sumapaz", "teusaquillo", "chapinero","ciudad Bolibar", "antonio Nariño", "Santafe", "martires", "puente Aranda", "soacha", "tunjuelito", "usme", "Engativa", "la Candelaria" ]
console.log (`en el Arreglo hay${localidades} localidades `)
// La estructura de Control For sirve para recorrer un Arreglo
for(let i=0;i<localidades.length;i++){
    console.log(`la localidad ${i}es ${localidades[i]}`)
}
for(let i=0;i<colores.length;i++){
    console.log(`el ${i} color es ${colores[i]}`)
}
//foreach: es una estructura de controla especialmente util para estructuras de datos compuestas como los arreglos
informacion.forEach(dato =>{
    console.log(dato)
})
colores.forEach(color =>{
    console.log(`Recorriendo localidades con foreach ${color}`)
})
localidades.forEach(localidad =>{
    console.log(`recorriendo localidades con foreach ${localidad}`)
})
const cancionFavorita =["Eclipse de Amor", "forever de kiss", "dia tras dia", "el Serrucho", "get luky", "wraiting for you", "open sesami", "cha|u", "perfect", "nombember rain", "las mañanitas", ]
// console.log(cancionFavoritas.length)
console.log(cancionFavorita.length)
for(let i=0;i<cancionFavorita.length;i++){
    console.log(`la ${i} cancion favorita es  ${cancionFavorita[i]}`)
}
cancionFavorita.forEach(cancion =>{
    console.log(`la cancion favorita es ${cancionFavorita}`)
})

//objetos
const carro ={
    // propiedades del carro
    marca: "suzuki",
    color: "negro",
    anio: 2024,
    duenios : ["Sergio", "Alejandro", "suarez"],
    acelerar:function(){
        return "Estoy Acelerando"

    },
    frenar: function(){
        return "Estoy frenando"
    }

}
console.log(`el Año del vehiculo es ${carro.anio} y la marca es ${carro.marca}`)
//Console.log carro dueños
carro.duenios.forEach(duenio =>{
    console.log("y los dueños del carro son",duenio)
})
//Acceder a las propiedades de un objeto
console.log(carro.acelerar())
console.log(carro.frenar())
//Modificar las propiedades
carro.marca="BMW"
console.log("La nueva marca del carro es ",carro.marca)
// acceder a un solo metodo de la funcion
console.log(carro.duenios[0])
carro.duenios[1]=("David")
console.log("el nuevo primer dueño es", carro.duenios[0])

const mascota ={
    nombre:undefined,
    edad: undefined,
    duenio: {
        nombre:"sergio",
        apellido:"suarez", 
        celular: 3103350758
    },
    vacunado:true,
    raza:"beagle",
    amigos:["luna", "pulgas", "paco", "sacha"],
    ladrar:function(){
        return "Estoy ladrando"
    },
    correr:function(){
        return "Estoy Corriendo"
    }
    

}
console.log(mascota)

console.log(`el telefono del Dueño de la mascota es ${mascota.duenio.celular} y su nombre es ${mascota.duenio.nombre}`)