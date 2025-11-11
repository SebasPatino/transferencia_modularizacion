// Importa la función el módulo personalizado
import { calcularPromedio, verificarPromedio, mostrarResultado } from "./ejercicio1.js";
import { depositarSaldo, retirarSaldo, consultarSaldo } from "./ejercicio2.js";
import { esPar, esPositivo, esPrimo } from "./ejercicio4.js";

// Exporta la función para que pueda ser importada desde este archivo
export * from "./ejercicio1.js"
export * from "./ejercicio2.js"
export * from "./ejercicio4.js"