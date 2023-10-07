let edad=71.5;
let nombre="Juan"

//if - else
if(edad>18){
    //Para sacar estas tildes es atlGr y la tecla }
    console.log(`Bienvenido ${nombre} tu edad es ${edad}`)
}else if(edad==18){
    //Else if permite más de una condición
    console.log(`Todavia no tienes la edad suficiente`)
}else{
    console.log("Lo siento, no eres mayor de edad,", "tu edad es", edad, "años")
}

//Operador ternario
// ? => si se cumple - verdadero
// : => de lo contrario - falso
let mayorEdad = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mayorEdad)

//Estructura switch
let opcion, num1,num2, resultado;
opcion="Suma"
num1=12;
num2=54

switch (opcion) {
    case "Suma":
        console.log("Escogiste la suma!")
        resultado=num1+num2
        break;
    case "Resta":
        console.log("Escogiste la resta!")
        resultado=num1-num2
        break;
    case "Multiplicacion":
        console.log("Escogiste la multiplicación!")
        resultado=num1*num2
        break
    case "Division":
        console.log("Escogiste la division!")
        resultado=num1/num2
    default:
        console.log("Operación no definida")
        resultado=null;
        break;
}
console.log(resultado)

let nom, apellido, age, cancion, respuesta;
nom="Sergio"
apellido="Suarez"
age=25
cancion="Soltero Feliz"

console.log(`Hola! Mi nombre es ${nom} ${apellido} y tengo ${age} años, mi canción favorita es ${cancion} y la respuesta es ${respuesta}`)

console.log("----------------------------ESTRUCTURAS CICLICAS-------")
// estructuras ciclicas
// mientras (WHILE)
// El ciclo While se ejecuta siempre que la condicion sea verdadera

let numero =0;

while(numero!=10){
    console.log("el numero va en " , numero
        )
        numero++

}
// para (FOR) se ejecuta un numero determinado de veces
for(let i=0; i<=10; i++){
    console.log("mensaje del For" ,i)

}
for(let i=0; i<=1; i++){
    console.log("mensaje del For" ,i)

}
// Priumer Taller de estructuras de Control
// 1. Imprima los números del 10 al 1.
// 2. Imprima los números pares.
let ejercicio1 =10;
while(ejercicio1!=0){
    console.log("impresion de numero", ejercicio1);
    ejercicio1--

}
// 2. Imprima los números pares.

    // for(let i=0; i>=10; i++){
    //     if (i % 2 == 0){
    //         console.log("El numero", i," es Par");
    //         }

    // };

    for(let i= 0; i>=10; i++){
        if(i % 2==0){
        console.log("Este es un numero par" ,i)
        }
        else{
            i++
        }
    }
