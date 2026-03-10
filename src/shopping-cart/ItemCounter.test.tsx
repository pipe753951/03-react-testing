import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("Should render with default values", () => {
    const name = "Cien años de soledad";

    render(<ItemCounter name={name} />);

    // expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("Should render with custom quantity", () => {
    const name = "Biblia";
    const quantity = 100;

    render(<ItemCounter name={name} quantity={quantity} />);

    // expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });

  test("Should increase count when +1 button is pressed", () => {
    render(<ItemCounter name="Test item" />);

    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("Should decrease count when -1 button is pressed and quantity is '5'", () => {
    const quantity = 5;

    render(<ItemCounter name="Test item" quantity={quantity} />);

    const [, buttonDecrease] = screen.getAllByRole("button");

    fireEvent.click(buttonDecrease);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("Should decrease count when -1 button is pressed and quantity is '1'", () => {
    const quantity = 1;
    render(<ItemCounter name="Test item" quantity={quantity} />);

    const [, buttonDecrease] = screen.getAllByRole("button");

    fireEvent.click(buttonDecrease);

    expect(screen.getByText("1")).toBeDefined();
  });
});
