# #02. Introducción a las pruebas automáticas de Vitest

Las pruebas automáticas de Vitest son pruebas que se ejecutan automáticamente al detectar cualquier cambio en el código fuente del proyecto. El instructor utilizará Vitest en el curso.

## Archivos de prueba

Los archivos de prueba de un proyecto JavaScript (o TypeScript) pueden colocarse en el lugar de preferencia del desarrollador. Por ejemplo: En la una carpeta individual de pruebas o junto al script que se desea probar. Hay que anotar que los archivos de prueba —Por lo menos en Vitest— deben terminar con la extensión `.test.js` ó `.test.ts` dependiendo del lenguaje que se esté utilizando.

## Probar con Vitest

Toda prueba de Vitest funciona dentro de un callback del método `test`, que solicita el nombre de la prueba, y el callback de la prueba. Así:

```tsx
import { expect, test } from "vitest";

test("Should add two positive numbers", () => {
  // Arrange
  const a = 1;
  const b = 2;
  // Act
  const result = add(a, b);
  // Assert
  expect(result).toBe(a + b);
});
```

> **💡 Nota:** Una prueba fallará si un error se lanza durante su ejecución.

### Método `expect`

El método `expect` funciona para comparar un valor con otro deseado. Cuando los dos valores no cumplen con la condición deseada, la prueba fallará. Este método contiene otros métodos que funcionan para hacer la comparación deseada. Un ejemplo está en el ejemplo anterior.
