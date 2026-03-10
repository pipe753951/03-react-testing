# #07. Comprobar estilos

Para comprobar estilos de CSS de un elemento en Vitest, se selecciona el elemento DOM (A través de `container` ó `screen.get*`; ambos devuelven un objeto de la DOM), y se busca el estilo deseado para hacer la comparación. Por ejemplo:

```tsx
test("Should text color change to red when count is 1", () => {
  const quantity = 1;
  const name = "Test item";
  render(<ItemCounter name={name} quantity={quantity} />);

  const itemText = screen.getByText(name);

  expect(itemText.style.color).toBe("red");
});
```
