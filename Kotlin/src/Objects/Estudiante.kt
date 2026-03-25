package Objects;

class Estudiante(val nombre: String, val edad: Int, var promedio: Double){
    constructor(nombre: String, edad: Int): this(nombre, edad,0.0){}
    constructor(nombre: String):this(nombre,0,0.0){}

    fun mostrarInfo(){
        println("Nombre: ${this.nombre}")
        println("Edad: ${this.edad}")
        println("Promedio: ${this.promedio}\n")
    }
}