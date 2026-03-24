import type { estudianteType, estudianteInterface} from "./Records/Estudiante";

const estudiante: estudianteType = {
    nombre: "Kevin",
    edad: 24,
    promedio: 4.4
};

const estudiante2: estudianteInterface = {
    nombre: "Andres",
    edad: 31,
    promedio: 4.8
};

const estudiante3: estudianteType = {
    nombre: "Maria",
    edad: 22,
    promedio: 5.0
}


const estudiantes: estudianteType[] = [estudiante, estudiante2, estudiante3];

estudiantes.forEach(estudiante => {
    console.log("Información del Estudiante");
    console.log("\tNombre del estudiante: " + estudiante.nombre);
    console.log("\tEdad del estudiante: " + estudiante.edad);
    console.log("\tPromedio del estudiante: " + estudiante.promedio+"\n");
});

estudiante2.promedio = 2.5;

for(let i = 0 ; i < estudiantes.length ; i++) {
    estudiantes[i].promedio = 5.0;
}

console.log("Estudiantes: ", estudiantes);


