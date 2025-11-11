// Permite agregar dinero al saldo actual
export function depositarSaldo(saldo, monto) {
    // Verifica que el monto ingresado sea mayor a 0
    if (monto > 0) {
        // Suma el monto al saldo existente
        saldo += monto;
        // Muestra un mensaje con el valor depositado y el nuevo saldo
        alert(`Has depositado $${monto}. Nuevo saldo: $${saldo}`);
    } else {
        // Si el monto no es válido, muestra una advertencia
        alert("El monto a depositar debe ser mayor a cero");
    }
    // Retorna el saldo actualizado
    return saldo;
}


// Permite retirar dinero del saldo actual
export function retirarSaldo(saldo, monto) {
    // Verifica si el usuario intenta retirar más de lo que tiene
    if (monto > saldo) {
        alert("Fondos insuficientes");
    // Verifica si el monto es cero o negativo
    } else if (monto <= 0) {
        alert("El monto a retirar debe ser mayor a cero");
    // Si todo es correcto, realiza la resta del saldo
    } else {
        saldo -= monto;
        alert(`Has retirado $${monto}. Nuevo saldo: $${saldo}`);
    }
    // Retorna el saldo actualizado
    return saldo;
}

// Muestra el saldo actual del usuario
export function consultarSaldo(saldo) {
    alert(`Tu saldo actual es: $${saldo}`);
}