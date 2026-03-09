# #03. Agrupar pruebas similares

Para agrupar pruebas similares de Vitest, se colocan dentro de un callback de la función `describe`, que sirve para aquel propósito. Aquella función tiene dos parámetros, el nombre de la agrupación y el callback con las pruebas (E incluso otras agrupaciones). Por ejemplo:

```tsx
describe("Add", () => {
  test("Should add two positive numbers", () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(a + b);
  });
});
```
