import {Estudiante}  from "./Objects/Estudiante";

const estudiante = new Estudiante("Kevin",24,3.5)
const estudiante2 = new Estudiante("Andres", 44, 3.0)
const estudiante3 = new Estudiante("Jimena",22,3.8)

const estudiantes = [estudiante, estudiante2, estudiante3]

for (const est of estudiantes){
    est.mostrarInfo()
}

estudiante.setPromedio(4.8)

console.log(`Promedio de ${estudiante.nombre} actualizado a: ${estudiante.getPromedio()}`)