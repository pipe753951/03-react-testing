# #05. Evaluar snapshots.

Los snapshots son copias de datos “estáticos” evaluados en Vitest que son comparados cada vez que se hace una prueba. Cuando estos datos en la ejecución de la prueba cambian, la prueba será errónea. Esto puede usarse con HTML y React, para mantener un componente estático.

Cada snapshot, en el caso de un proyecto de React con Vite, se crea dentro del directorio `src/__snapshots__`. Se guardan con el mismo nombre del código donde se hizo la comparación con la extensión `.snap`.

## Crear un snapshot

El método `expect` contiene un método llamado `toMatchSnapshot`, que es utilizado para hacer la comparación entre un valor y su snapshot. El método no recibe argumentos. Por ejemplo:

```tsx
// ...

test("Should match snapshot", () => {
  const { container } = render(<MyHomeworkAppTwo />);
  expect(container).toMatchSnapshot();
});

test("Should match snapshot (Screen)", () => {
  render(<MyHomeworkAppTwo />);
  expect(screen.getByTestId("div-app")).toMatchSnapshot();
});
```

> **💡 Nota:** Para crear snapshots de la DOM a través de la constante `screen`, se debe seleccionar el elemento deseado; Cómo se ve en el ejemplo.
