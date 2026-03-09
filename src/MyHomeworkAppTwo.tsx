import type { CSSProperties } from "react";

const firstName = "Gabriel José";
const lastName = "García Márquez";

const favoriteBooks = [
  "Bible",
  "Le Petit Prince",
  "La historia, los viajes y la abuela",
];

const isActive = false;

const address = {
  zipCode: "ABC-123",
  country: "Colombia",
};

const myStyles: CSSProperties = {
  backgroundColor: "#e0faf0",
  padding: 10,

  borderRadius: isActive ? 10 : 20,
};

export function MyHomeworkAppTwo() {
  return (
    <>
      <section>
        <h1 data-testid="first-name-title">{firstName}</h1>
        <h2>{lastName}</h2>

        <p>{favoriteBooks.join("; ")}</p>
        <p>{2 + 2}</p>
        <p>2 + 2</p>
      </section>

      <hr></hr>

      <section>
        <h1>{isActive ? "Active" : "Not active"}</h1>
      </section>

      <hr />

      <section>
        {/* <p>{address}</p> - React no permite colocar objetos */}
        <p style={myStyles}>{JSON.stringify(address)}</p>
      </section>
    </>
  );
}
