# #08. Componentes ficticios - Mock components

Los componentes ficticios es una manera de imitar los componentes de React para que probar un componente padre donde se utilize con únicamente lo necesario, sin necesidad de pasar por ejecución de código peticiones a Internet innecesarios para la prueba. Estos se encuentran en diferentes frameworks de pruebas, incluido Vitest.

En Vitest, para crear un componente ficticio se hace de la misma manera que se realiza cualquier mock. Un mock es una versión falsa de una importación que se utiliza para probar otra cosa. Para crear un mock, se utiliza `vi.mock()`. Este método pide la ubicación al módulo a falsificar, y una función que devuelve lo que se va a falsificar. Aunque para módulos exportados por defecto todavía no sé falsificarlos, para módulos no exportados por defecto se devuelve un objeto con las propiedades de lo que se desea falsificar, nombradas cómo el nombre de donde donde se desea falsificar. Por ejemplo:

```tsx
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: ItemCounterProps) => mockItemCounter(props),
}));
```

## Falsificar funciones

Es posible crear mocks de funciones para, entre otras cosas, supervisar las veces que fue llamada la función (En Vitest es posible). Para ello, se utiliza `vi.fn`, que recibe como parámetro el comportamiento de la función falsificada. Este método devuelve una función. Por ejemplo:

```tsx
const mockItemCounter = vi.fn((props: ItemCounterProps) => {
  return (
    <div
      data-testid="ItemCounter"
      data-name={props.name}
      data-quantity={props.quantity}
    />
  );
});
```

Ahora, para verificar si se ha llamado ciertas veces con `expect`, se envía en este método la función falsificada, junto con el método `toHaveBeenCalledTimes(*veces*)`.

### ⚠️ Nota

Para supervisar sólo las veces que una función falsificada fue llamada dentro de una prueba, hay que _reiniciar el conteo_. Para ello, se utiliza `afterEach` dentro del grupo de la prueba deseada y/o fuera de la prueba, con `vi.clearAllMocks` en el callback. Por ejemplo:

```tsx
afterEach(() => {
  vi.clearAllMocks();
});
```

## Falsificar componentes

Se puede falsificar componentes utilizando los mocks, para ello, se falsifica de manera parecida a cómo se declara un componente funcional. Por ejemplo:

```tsx
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: ItemCounterProps) => {
    return <div>Contador</div>;
  },
}));
```

### Recibir parámetros específicos

Para esperar y recibir parámetros específicos en un componente ficticio, se crea el componente con una función mock para poder utilizar `expect` con aquella función, y se utiliza el método `toHaveBeenCalledWith(*props*)`. Por ejemplo:

```tsx
test("Should render ItemCounter with correct props", () => {
  render(<CounterApp />);

  expect(mockItemCounter).toHaveBeenCalledWith({
    name: "Biblia RVR1960",
    quantity: 10,
  });
  expect(mockItemCounter).toHaveBeenCalledWith({
    name: "Cien años de soledad",
    quantity: 2,
  });
});
```
