// Las funciones se definen mediante la palabra function
// Funciones Declaradas
function saludar (nombre, edad,){
    console.log(`hola mi nombre es ${nombre} y mi edad es ${edad}`)
}
saludar("Sergio", "25")
saludar("juan", "32")
// una funcion siempre debe tener un nombre al cual yo puedo llamarla mas tarde si es necesario
// los parametros son cualquier dato que yo necesite para ejecutar la funcion y no son obligatorios pueden ir vacios ()
/*Estructura de una Funcion Declarada
function NOMBRE DE FUNCION (PARAMETROS){
    Logica de la App
}*/
function sumar (a,b){
    //Valor de retorno= valor que devuelve la funcion una vez sea llamada
    let resultado
    resultado=a+b
    return resultado 
}

console.log(sumar (23,40))
// Funciones Expresadas: HAcen parte de l ambito local es decir que solo estaran disponibles una Vez creadas, NO ESTAN DISPONIBLES antes de que se creen
const despedir=function(){
    return "Gracias por usar la App Hasta pronto"   
}
console.log(despedir())
function saludarMascota(nombre,edad){
    return (`Hola, mi mascota es ${nombre} y tiene ${edad} años`)

}
console.log(saludarMascota("mia", "3"))

const saludar2= function (nombre,nombreMascora, edad){
return(`hola, me presento. Mi nombre es ${nombre} y mi edad es ${edad} y mi mascota se llama ${nombreMascora}`)

}

console.log(saludar2("Sergio", "Mia", "25"))
//hacer un codigo para cada una de las siguientes Expresiones
// suma, resta, multiplicacion,division
//hacer un menu con Switch
//funcion Suma
const suma= function(num1 , num2, ){
    return(`hola  la suma de ${num1} mas ${num2} es igual a ${num1+num2}`);
}
//funcion resta
const resta= function(num1 , num2, ){
    return(`hola  la resta de ${num1} menos ${num2} es igual a ${num1-num2}`);
}
//funcion Multiplicacion
const producto= function(num1 , num2, ){
    return(`hola  la multiplicaion de ${num1} por ${num2} es igual a ${num1*num2}`);
}
//Funcion de Division
const Division= function(num1 , num2, ){
    let operacion =(b==0) ? "No es posible la operacion":(a/b)
    
    return(`hola  la division de ${num1} entre  ${num2} es igual a ${operacion}`);
}

console.log("*****MENU CALCULADORA******")
console.log("1 para sumar")
console.log("2 para restar")
console.log("3 para Multiplicar")
console.log("4 para dividir")
let opcion=3
switch(opcion){
    case 1:
        console.log(suma(4,6))
        break;
    case 2:
        console.log(resta(20,7))
        break;
    case 3:
        console.log(producto(5,5))
        break;
    case 4:
        console.log(Division(20, 4))

}
// las alertas pueden mostras salidas o informacion
alert("hola esta es mi primera alerta")
//las Entradas de Texto las puedes Realizar entradas por consola
let mensaje = prompt("Hola, este es mi primer promt")
alert(`tu valor ingresado fue ${mensaje}`)
let option = prompt("seleccione 1 para sumar, 2 para restar,3 para Multiplicar, 4 para dividir ")
let num1=6,num2=8;
switch(option){
    case "1":
        alert(suma(num1,num2))
        break;
        case "2":
        alert(resta(num1,num2))
        break;
    case "3":
        alert(producto(num1,num2))
        break;
    case "4":
        alert(Division(num1,num2))
        break;
    default:
        alert("No es una entrada valida")
        break;
}
alert(option)
// pasar numero a texto
let number =1
console.log(number.toStering)
//parseint es el metodo para pasar de texto a tipo de dato entero
// parsefloat 
let numbertext= "2"
console.log(parseInt(numbertext))
