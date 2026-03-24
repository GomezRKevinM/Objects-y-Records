import Records.Estudiante

fun main() {
    val estudiante = Estudiante("Kevin",24,4.4);
    val estudiante2 = Estudiante("Andres",31,4.8);
    val estudiante3 = Estudiante("Maria",22,5.0);

    val estudiantes = listOf(estudiante, estudiante2, estudiante3);

    estudiantes.forEach{ (nombre, edad, promedio) ->
        println("Información del Estudiante")   
        println("\tNombre del estudiante: $nombre")
        println("\tEdad del estudiante: $edad")
        println("\tPromedio del estudiante: $promedio\n")
    }


    estudiante2.promedio = 2.5;
        println("Información del Estudiante")   
        println("\tNombre del estudiante: ${estudiante2.nombre}")
        println("\tEdad del estudiante: ${estudiante3.edad}")
        println("\tPromedio del estudiante: ${estudiante2.promedio}\n")

    for(estudent in estudiantes){
        estudent.promedio = 5.0;
    }

    println("Estudiantes: ${estudiantes}")
}
