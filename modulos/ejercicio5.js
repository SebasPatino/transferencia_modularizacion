// Sumar dos números
export function sumar(a, b) {
    return a + b;
}

// Restar dos números
export function restar(a, b) {
    return a - b;
}

// Multiplicar dos números
export function multiplicar(a, b) {
    return a * b;
}

// Propósito: Dividir dos números (validando división por cero)
export const dividir = (a, b) => {
    if (b === 0) {
        alert("Error: No se puede dividir entre cero.");
        return null; // retorno controlado
    }
    return a / b;
};

