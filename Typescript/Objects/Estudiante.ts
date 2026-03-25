export class Estudiante{
    readonly nombre: string;
    readonly edad: number;
    private promedio: number;

    constructor(nombre: string, edad: number, promedio: number){
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    public mostrarInfo(): void{
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad},\nPromedio: ${this.promedio}\n`);
    }

    public setPromedio(promedio: number){
        this.promedio = promedio;
    }

    public getPromedio():number{
        return this.promedio;
    }
}
