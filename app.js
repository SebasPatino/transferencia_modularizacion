// Importación de funciones desde el módulo principal
// Estas funciones se encuentran en './modulos/index.js'
import { 
    calcularPromedio,
    verificarPromedio,
    mostrarResultado,
    depositarSaldo,
    retirarSaldo,
    consultarSaldo,
    esPar,
    esPositivo,
    esPrimo
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

// EJERCICIO 2 -------------------------------------------------------------------

// Inicializamos el saldo del usuario en 0
let saldo = 0;
// Variable para almacenar la opción elegida por el usuario
let opcion;

// Estructura repetitiva que permite realizar varias operaciones
// Se repite hasta que el usuario elija la opción "4" (Salir)
do {
    opcion = prompt(
        `Seleccione una opción:
        1. Depositar dinero
        2. Retirar dinero
        3. Consultar saldo
        4. Salir`
    );

    // Estructura condicional para ejecutar una acción según la opción elegida
    switch (opcion) {
        // Opción 1: Depositar dinero
        case "1":
            const montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
            saldo = depositarSaldo(saldo, montoDeposito);
            break;
        // Opción 2: Retirar dinero
        case "2":
            const montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
            saldo = retirarSaldo(saldo, montoRetiro);
            break;
        // Opción 3: Consultar saldo
        case "3":
            consultarSaldo(saldo);
            break;
        // Opción 4: Salir del sistema
        case "4":
            alert("Gracias por usar el sistema bancario.");
            break;
        // Cualquier otra opción no válida
        default:
            alert("Opción no válida. Intente nuevamente.");
    }
// El ciclo continúa mientras la opción elegida no sea "4"
} while (opcion !== "4");

// EJERCICIO 4 -------------------------------------------------------------------

const analizarNumero = () => {
    const numero = parseInt(prompt("Ingrese un número entero:"));

    const tipo = esPar(numero);
    const signo = esPositivo(numero);
    const primo = esPrimo(numero) ? "sí es primo" : "no es primo";

alert(`
Número ingresado: ${numero}
Es ${tipo}.
Es ${signo}.
Y ${primo}.`);
};

// Llamamos a la función principal
analizarNumero();

// EJERCICIO 5 ------------------------------------------------------------------- 

// Función flecha principal
// Mostrar menú de calculadora y ejecutar operaciones
const calculadora = () => {
    let opcion;

    do {
        opcion = prompt(
            `Seleccione una operación:
            1. Sumar
            2. Restar
            3. Multiplicar
            4. Dividir
            5. Salir`
        );

        if (opcion === "5") {
            alert("Gracias por usar la calculadora");
            break;
        }

        // Pedimos los números solo si la opción no es salir
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        let resultado;

        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case "2":
                resultado = restar(num1, num2);
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                alert(`El resultado de la multiplicación es: ${resultado}`);
                break;
            case "4":
                resultado = dividir(num1, num2);
                if (resultado !== null) {
                    alert(`El resultado de la división es: ${resultado}`);
                }
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }

    } while (opcion !== "5");
};

// Llamamos a la función principal
calculadora();