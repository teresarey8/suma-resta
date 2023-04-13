alert("A continuación se solicitaran dos números")
let num1 = parseFloat(prompt("Introduzca aquí el primer número:"));
let num2 = parseFloat(prompt("Introduzca aquí el segundo número"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicación = num1 * num2;
let división = num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero";

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicación);
alert("El resultado de la división es: " + división);