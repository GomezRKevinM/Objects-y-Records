# 🧱 Objects vs Records - Kotlin & TypeScript

Este proyecto demuestra el uso de **Records (o estructuras de datos)** en **Kotlin** y **TypeScript**, comparando su implementación, comportamiento y diferencias clave.

---

# Objetivo

Entender cómo modelar datos de forma simple utilizando **Records**, evitando la complejidad innecesaria de los objetos tradicionales.

---

# ¿Qué es un Record?

Un **Record (o Struct)** es una estructura de datos cuyo propósito es:

* Representar información
* Agrupar datos relacionados
* Minimizar lógica
* Evitar dependencias externas

Se enfoca en **datos, no en comportamiento**

---

# Record vs Objeto

| Record                  | Objeto                           |
| ----------------------- | -------------------------------- |
| Modela datos            | Modela datos + comportamiento    |
| Lógica mínima           | Lógica de negocio                |
| Inmutable (idealmente)  | Puede ser mutable                |
| Sin efectos secundarios | Puede interactuar con el sistema |

---

# 🟣 Implementación en Kotlin

```kotlin
data class Estudiante(
   val nombre: String,
   val edad: Int,
   var promedio: Double
)
```

### Características

* `data class` → implementación real de record
* `val` → inmutable
* `var` → mutable
* Métodos automáticos:

    * `copy()`
    * `equals()`
    * `toString()`

---

# 🔵 Implementación en TypeScript

## Usando `type`

```ts
type Estudiante = {
    readonly nombre: string;
    readonly edad: number;
    promedio: number;
}
```

## Usando `interface`

```ts
interface Estudiante {
    readonly nombre: string;
    readonly edad: number;
    promedio: number;
}
```

### Características

* Solo existe en compilación
* No genera código en runtime
* `readonly` simula inmutabilidad

---

# Diferencias clave

| Característica        | Kotlin     | TypeScript          |
| --------------------- | ---------- | ------------------- |
| Existencia en runtime | ✔ Sí       | ❌ No                |
| Tipado                | Fuerte     | Solo en compilación |
| Inmutabilidad         | Real       | Simulada            |
| Implementación        | Clase real | Definición de tipo  |

---

# Inicialización

## Kotlin

```kotlin
val estudiante = Estudiante("Kevin",24,4.4)
```

## TypeScript

```ts
const estudiante: Estudiante = {
    nombre: "Kevin",
    edad: 24,
    promedio: 4.4
};
```

---

# Recorrido de datos

## Kotlin

```kotlin
estudiantes.forEach { (nombre, edad, promedio) ->
    println(nombre)
}
```

✔ Soporta destructuring automático

---

## TypeScript

```ts
estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
});
```

---

# Modificación

## Kotlin

```kotlin
estudiante.promedio = 5.0
```

## TypeScript

```ts
estudiante.promedio = 5.0;
```

---

# Iteración

## Kotlin

```kotlin
for (estudiante in estudiantes) { }
```

## TypeScript

```ts
for (let i = 0; i < estudiantes.length; i++) { }
```

---

# 🧠 Conceptos clave aprendidos

* Diferencia entre datos vs comportamiento
* Uso de estructuras simples (Records)
* Inmutabilidad y mutabilidad
* Tipado en Kotlin vs TypeScript
* Iteración y manipulación de datos

---

# 🚀 Cómo ejecutar

## Kotlin

```bash
npm build:kt // Para compilar, crear un ejecutable y ejecutar
npm run kt // Para ejecutar el ultimo ejecutable creado
```

---

## TypeScript

```bash
npm run ts
```

---

# Conclusión

* Kotlin usa `data class` como **implementación real de records**
* TypeScript usa `type` o `interface` como **definiciones de datos**
* Kotlin es más estricto y seguro en runtime
* TypeScript es más flexible pero depende del compilador

---

# Frase clave

> Un record representa datos con mínima lógica, mientras que un objeto representa comportamiento además de datos.

---
