import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("Should render with default values", () => {
    const name = "Cien años de soledad";

    render(<ItemCounter name={name} />);

    // TODO: remove
    screen.debug();

    // expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("Should render with custom quantity", () => {
    const name = "Biblia";
    const quantity = 100;

    render(<ItemCounter name={name} quantity={quantity} />);
    screen.debug();

    // expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(quantity)).not.toBeNull();
  });
});
