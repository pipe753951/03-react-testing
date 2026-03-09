import { expect, test } from "vitest";
import { add } from "./math.helper";

test("Should add two positive numbers", () => {
  //? Arrange
  const a = 1;
  const b = 2;

  //? Act
  const result = add(a, b);

  //? Assert
  expect(result).toBe(a + b);

  // const result = add(1, 2);
  // console.log({ result });

  // Forma no recomendada
  // if (result !== 3) {
  //   throw new Error("Sum isn't equal to 3");
  // }

  // expect(result).toBe(3);
});
