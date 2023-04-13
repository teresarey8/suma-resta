alert("A continuación se solicitarán dos números");
let números1 = ParseFloat(prompt("Por favor, introduce el primer número:"));
let números2 = ParseFloat(prompt("Por favor, introduce el segundo número:"));

let suma = números1 + números2;
let resta = números1 - números2;
let divión = números1 / números2;
let multiplicación = números1*números2;

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la división es: " + divión);
alert("El resultado de la multiplicación es: " + multiplicación);
