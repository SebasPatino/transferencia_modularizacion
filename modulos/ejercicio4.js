// Determinar si un número es par o impar
export function esPar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Determinar si un número es positivo, negativo o cero
export function esPositivo(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Determinar si un número es primo
export function esPrimo(numero) {
    
    let primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
        }
    }
    return primo

}