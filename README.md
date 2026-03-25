# Records and Objects

Este repositorio contiene el desarrollo de la actividad de la unidad 1 en la asignatura **Estructura de datos**

**Estudiante:** Kevin Manuel Gómez Rojas
**Codigo:** 7502420013

## Actividad

### 1. Record o Struct

#### Fundamentos:

1. Concepto y utilidad (almacenar datos relacionados).
2. Diferencias entre un registro/struct y un objeto.
3. Tipado y acceso a campos.

#### Actividades:

1. **Declaración :**
   Definir un struct o record que contenga: nombre, edad, promedio.

2. **Inicialización :**
   Crear 3 instancias con datos ficticios en todos los lenguajes dados (Java, C#, JS, TS, Python, Kotlin, Dart, Go, C,
   C++, PHP).

3. **Recorrido :**
   Guardar las instancias en un arreglo y recorrerlo mostrando los datos.

4. **Modificación :**
   Cambiar el promedio de un estudiante específico.

5. **Comparativa :**
   Documentar las diferencias de implementación en los lenguajes.

---

### 2. Objetos (Clases e instancias)

#### Actividades:

1. **Declaración :**
   Definir una clase Estudiante con: nombre, edad, promedio y un método mostrarInfo.

2. **Inicialización :**
   Crear 3 instancias y almacenarlas en un arreglo/lista.

3. **Recorrido :**
   Llamar al método mostrarInfo para cada objeto.

4. **Modificación :**
   Cambiar el promedio de un estudiante mediante un método setPromedio.

5. **Comparativa :**
   Explicar la diferencia entre esta clase y un struct o record.

--- 

## Comparativa Struct/Record vs Object

### Concepto

Un **Record** es un modelo de datos puro: su único propósito es representar y estructurar información. Un **Objeto** es
una
abstracción más completa, pues modela tanto datos como comportamiento, permitiendo que sus métodos interactúen con el
sistema exterior. Por eso, mientras un **Record** se define y se agota en sí mismo, un **Objeto** puede cambiar su
estado
interno, afectar otros componentes y responder a eventos del sistema.

##### **Ventajas de un record:**

1. Nos permite representar, organizar y estructurar datos de forma segura.
2. Está diseñado para favorecer la inmutabilidad, aunque no todos los lenguajes la imponen por defecto.
3. construcción simple.
4. única y clara responsabilidad (representar o contener datos)

**Desventaja:** _Al crecer los requisitos del sistema, un Record se queda cort, no puede evolucionar hacia
comportamiento sin
convertirse en otra cosa._

#### **Ventajas de un Object:**

1. Permite abstraer formas que van más allá de solo datos.
2. Permite manejar comportamientos y herencia de estos mismos.
3. Es útil para digitalizar entidades del mundo real al sistema.
4. Es fundamental para constituir un dominio.

**Desventaja:** _Mayor complejidad, más superficie para errores, acoplamientos y efectos secundarios si no se diseña
bien._

#### Adicional:

En lenguajes como C/C++, los structs se almacenan en el stack (memoria estática, más rápida), mientras que los objetos
generalmente se alojan en el heap (memoria dinámica). En lenguajes como Kotlin o TypeScript ambos van al heap, pero la
distinción conceptual se mantiene.

### Diferencias entre Struct/Record y Objetos

| Aspecto    | Struct/Record                                                                                                                                                                                | Object                                                                                                                                                                   |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Definición | **Modelo de datos:** Estructura que agrupa campos relacionados bajo un mismo tipo. Su único propósito es representar datos. No contiene lógica de negocio.                                   | **Modelo entidad:** Abstracción que encapsula datos + comportamiento. Modela entidades del mundo real con estado y métodos que pueden interactuar con el exterior.       |
| Mutabilidad | Diseñado para favorecer la inmutabilidad, aunque depende del lenguaje                                                                                                                        | Mutabilidad controlada por el diseñador mediante encapsulamiento                                                                                                         |
| Tipado | Estático en lenguajes compilados, dinámico en scripts. Los campos tienen tipo fijo desde la declaración. No admite herencia de tipos.                                                        | Estático o dinámico según el lenguaje, con soporte para herencia, interfaces y polimorfismo. El tipo puede cambiar en jerarquías de clases.                              |
| Uso en memoria (stack/heap) | C / C++: Los struct se asignan en el stack por defecto → acceso rápido, sin GC. Kotlin / TS: Se alojan en el heap como cualquier objeto JVM/V8, aunque conceptualmente se usan como valores. | Siempre en el heap. La variable guarda una referencia, no el objeto en sí. El Garbage Collector gestiona su ciclo de vida. Mayor overhead que un struct nativo en C/C++. |
| cuando usarlo | Transferencia de datos entre capas (DTOs), respuestas de API, configuraciones, modelos de base de datos. **Cuando no se necesita comportamiento**. | Entidades del dominio (Usuario, Pedido, Producto), servicios, controladores. Cuando el dato **tiene comportamiento** asociado o necesita evolucionar.|

#### Ejemplos de codigo

* **Lenguaje estático:**

1. Struct/Record:

```kotlin
// Kotlin
data class Estudiante(
val nombre: String,
val edad: Int,
val promedio: Double
) // equals, hashCode, copy() gratis
```

2. Object:

```kotlin
//Kotlin
class Estudiante(
  val nombre: String,
  private var promedio: Double
) {
  fun setPromedio(v: Double) { promedio = v }
  fun mostrarInfo() = println(nombre)
}
```


* **Lenguaje Dinámico:**

1. Struct/Record:

```typescript
// Typescript
type Estudiante = {
   nombre: string
   edad: number
   promedio: number
} // solo existe en compilación
```

2. Object:

```typescript
// Typescript
class Estudiante {
  constructor(
    public nombre: string,
    private promedio: number
  ) {}
  setPromedio(v: number) { this.promedio = v }
  mostrarInfo() { console.log(this.nombre) }
}
```

Kotlin private var + getters/setters
TS private + métodos
Python @property / __slots__

#### Actividad teórico-práctica:

1. Los estudiantes crearán una tabla comparativa con:
    * Definición
    * Mutabilidad
    * Tipado
    * Uso en memoria (stack/heap)
      _Ejemplo en un lenguaje `estático` y uno `dinámico`_

Implementar el mismo problema con un struct/record y con un objeto para analizar ventajas y desventajas.

> [!TIP]
> 💡 Tip para evaluación final:
> Un mini-proyecto integrador donde deban:
> Usar un arreglo de objetos que contengan un campo que sea a su vez una matriz.

**Implementar la solución en dos lenguajes distintos para comparar diferencias sintácticas y de paradigma.**

2. ACTIVIDAD PRÁCTICA:

   Modificar el ejercicio asignado en la actividad Protocolo Individual Unidad 1 (ver lista de asignación de ejercicios)
   y aplicar los conceptos de Objetos, Struct y Récord como elementos (items) guardados en los arreglos o matrices. (
   Java) opcional y mejor calificación si lo hace en otro de los lenguajes indicados en esta actividad.