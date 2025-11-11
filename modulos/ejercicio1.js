// Recibe tres notas numéricas y calcula el promedio general.
export function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Evalúa si el estudiante aprueba o reprueba según su promedio.
export function verificarPromedio(promedio) {
    if (promedio >= 3.0) {
        return "Aprobado"
    } else {
        return "Reprobado"
    }
}

// Muestra en consola y en una ventana emergente (alert)
// el nombre del estudiante, su promedio y su estado final.
export function mostrarResultado(nombre, promedio, estado) {
    console.log(
`- Estudiante: ${nombre}
- Promedio: ${promedio}
- Estado: ${estado}`);

    alert(
`- Estudiante: ${nombre}
- Promedio: ${promedio}
- Estado: ${estado}`);
}