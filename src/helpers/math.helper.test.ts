import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("Add", () => {
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
});

describe("Subtract", () => {
  test("Should subtract a positive with cero", () => {
    const a = 3;
    const b = 0;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test("Should subtract two rational numbers", () => {
    const a = 2.3;
    const b = 6.2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("Multiply", () => {
  test("Should multiply a positive with cero", () => {
    const a = 4;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test("Should multiply two rational numbers", () => {
    const a = 4.4;
    const b = 3.1416;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});

describe("Divide", () => {
  test("Should divide a positive with cero", () => {
    const a = 4;
    const b = 0;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });

  test("Should divide two rational numbers", () => {
    const a = 4.4;
    const b = 3.1416;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});
