# Laboratorio de Pruebas Unitarias - Calculadora y Gestión de Usuarios

Este proyecto es una práctica de desarrollo y pruebas unitarias en JavaScript.  
Incluye funciones matemáticas (calculadora) y gestión básica de usuarios, además de pruebas usando Jest.

## Descripción

Se implementan y prueban los siguientes módulos:

- **Calculadora**: Funciones matemáticas básicas (`divide`, `multiply`, etc.)
- **Gestión de Usuarios**: Funciones para agregar, eliminar y buscar usuarios.

## Requerimientos del laboratorio

**Tarea 1:** Implementar pruebas para el módulo `./js/calculator/calculator.js`.
- Implementar 2 pruebas unitarias para la función `divide()`.
- Implementar 2 pruebas unitarias para la función `multiply()`.

**Tarea 2:** Implementar pruebas para las clases de los módulos `./js/user/user.js` y `./js/user/user-controller.js`.
- Implementar 1 prueba para la función `add()` que verifica un usuario que no está en la lista de usuarios.
- Implementar 1 prueba para la función `remove()` que verifica un usuario que no está en la lista de usuarios.
- Implementar 2 pruebas unitarias para la función `findByEmail()`.
- Implementar 2 pruebas unitarias para la función `findById()`.

**Tarea 3:** Usar el Desarrollo Orientado a Pruebas para desarrollar la función `divide` en el script `./js/calculator/calculator.js`.
- Escribir una prueba unitaria para verificar la función `divide()` pasando 0 como segundo argumento.
- Corregir la función `divide()` para que la prueba pase y maneje el caso de la división por 0.

## Instrucciones para ejecutar

1. Instala las dependencias:

    ```bash
    npm install
    ```

2. Instala Jest como dependencia de desarrollo:

    ```bash
    npm install --save-dev jest
    ```

3. Ejecuta las pruebas unitarias:

    ```bash
    npm test
    ```

## Estructura principal

- `js/calculator/calculator.js` — Funciones matemáticas.
- `js/calculator/calculator.test.js` — Pruebas de la calculadora.
- `js/user/user.js` y `js/user/user-controller.js` — Módulos de usuario.
- `js/user/user.test.js` — Pruebas de usuario.

## Objetivos prácticos

- Implementar y probar funciones matemáticas, incluyendo el manejo de errores en división por cero.
- Probar funciones de gestión de usuarios: agregar, eliminar y buscar.

---

**Este repositorio es únicamente para fines educativos y de práctica.**
