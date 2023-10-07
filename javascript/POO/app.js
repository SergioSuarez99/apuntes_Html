class Mascota{ //Definicion de una clase
// El constructor  no es mas que el molde o la plantilla de los objetos que cree con la clase
    constructor(nombre, edad){
    this.nombre=nombre
    this.edad=edad
    this.adoptado=true
    }
    comer(){
        return "Estoy comiendo"
    }
    mover(){
        return "Se esta Desplazando"
    }
}
const tara= new Mascota ("Tara", 5)
const simba= new Mascota ("Simba", 3)
console.log (tara)
console.log (simba)
//Acceder a la informacion de los objetos
console.log(`Tara es adoptada? ${tara.mover()}`)
console.log(simba.mover())
// Herencia
class Perro extends Mascota{
    constructor(nombre, edad, adoptado,tamanio,){
        super(nombre, edad,adoptado)
        this.tamanio=tamanio
    }
    ladrar(){
        return "Guau"
    }
}
// Instanciar una clase Hijo
const tiny= new Perro("tinny", 7, true, "grande");
console.log (tiny)
// Accediendo a los metodos de una clase Hijo
console.log(tiny.ladrar)
class Aves extends Mascota{
    constructor(nombre,edad,adoptado,color, tipo, alturaVuelo){
        super(nombre, edad,adoptado)
        this.color=color
        this.tipo=tipo
        this.alturaVuelo=0
        this.plumas=null
    }
    volar(){
        return "El ave esta volando a una altura de ", alturaVuelo 
    }
    // Set es el metodo que permite modificar una propiedad de una clase
set setPlumas(plumas){
    this.plumas=plumas
}

}
const paloma= new Aves("palomita", 1, true, "blanco", 50);
const pollito= new Aves("pollito", 1, false, "Amarillo", 1);
console.log (paloma)
console.log(paloma.alturaVuelo)

class Gato extends Mascota{
    constructor(nombre, edad, adoptado,color, pelo){
        super(nombre, edad,adoptado)
        this.color=color
        this.pelo=pelo
    }
    ronrronear(){
        return "r r r r r r "
    }
}
// Instanciar una clase Hijo
const negro= new Gato("negro", 2, false, "gris", "largo");
console.log (negro)
// Accediendo a los metodos de una clase Hijo
console.log(negro.ronrronear)

//Setters y Getters
// nos permite obtener o mandar cierta informacion de las clases
console.log (pollito)
console.log(pollito.getColor)

// Set es el metodo que permite modificar una propiedad de una clase
// set setPlumas(plumas){
//     this.plumas=plumas
// }
pollito.plumas = ("largas")
console.log(pollito.plumas)