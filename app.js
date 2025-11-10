// Importación de funciones desde el módulo principal
// Estas funciones se encuentran en './modulos/index.js'
import { 
    calcularPromedio,
    verificarPromedio,
    mostrarResultado
 } from './modulos/index.js';

// EJERCICIO 1 -------------------------------------------------------------------

// Entrada de datos: solicitamos información al usuario
let nombre = prompt("Ingrese el nombre del estudiante:");
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Proceso: calculamos el promedio y verificamos el estado
const promedio = calcularPromedio(nota1, nota2, nota3);
const estado = verificarPromedio(promedio);

// Salida: mostramos el resultado final
mostrarResultado(nombre, promedio, estado);

