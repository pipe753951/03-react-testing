import { useState } from "react";

// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

export interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export function ItemCounter({ name, quantity = 1 }: ItemCounterProps) {
  if (quantity < 1) {
    throw new Error("ItenCounter won't work because 'quantity' is less than 1");
  }

  // const itemCounterObj = useState(10);
  const [count, setCount] = useState(quantity);

  // const handleClick = () => {
  //   console.log(`Click en ${name}`);
  // };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  return (
    <section
      // className="item-row"
      className={styles["item-row"]}
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      // }}
    >
      {/* <h2 className="item-text">{name}</h2> */}
      <h2
        className={styles["item-row"]}
        style={{
          color: count === 1 ? "red" : "black",
        }}
      >
        {name}
      </h2>
      <button
        onMouseEnter={() => {
          console.log(`Mouse enter ${name}`);
        }}
        onClick={handleAdd}
        // onClick={handleClick}
        // onClick={(event) => {
        //   console.log(event);

        //   console.log(`Click ${name}`);
        // }}
      >
        +1
      </button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
}
