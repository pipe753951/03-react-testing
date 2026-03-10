import { ItemCounter } from "./shopping-cart/ItemCounter";

interface BookInCart {
  bookName: string;
  quantity: number;
}

const booksInCart: BookInCart[] = [
  { bookName: "Biblia RVR1960", quantity: 10 },
  { bookName: "Cien años de soledad", quantity: 2 },
  { bookName: "El principito", quantity: 5 },
  { bookName: "El coronel no tiene quién le escriba", quantity: 1 },
];

export function CounterApp() {
  return (
    <div role="application">
      <h1>Carrito de compras</h1>
      {/* <ItemCounter name="Biblia RVR1960" quantity={10} />
      <ItemCounter name="Cien años de soledad" quantity={2} />
      <ItemCounter name="El principito" quantity={3} />
      <ItemCounter name="El coronel no tiene quién le escriba" quantity={1} /> */}

      {booksInCart.map(({ bookName, quantity }) => (
        <ItemCounter key={quantity} name={bookName} quantity={quantity} />
      ))}
    </div>
  );
}
