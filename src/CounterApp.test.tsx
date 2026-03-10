import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { CounterApp } from "./CounterApp";

import type { ItemCounterProps } from "./shopping-cart/ItemCounter";

// vi.mock("./shopping-cart/ItemCounter", (props: ItemCounterProps) => ({
//   ItemCounter: () => (
//     <div
//       data-testid="ItemCounter"
//       data-name={props.name}
//       data-quantity={props.quantity}
//     />
//   ),
// }));

const mockItemCounter = vi.fn((props: ItemCounterProps) => {
  return (
    <div
      data-testid="ItemCounter"
      data-name={props.name}
      data-quantity={props.quantity}
    />
  );
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: ItemCounterProps) => mockItemCounter(props),
}));

describe("CounterApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should match snapshot", () => {
    // Usando screen y un poco de ARIA.
    render(<CounterApp />);

    const application = screen.getByRole("application");
    expect(application).toMatchSnapshot();

    // Usando "container" - Forma utilizada por el instructor
    // const { container } = render(<CounterApp />);
    // expect(container).toMatchSnapshot();
  });

  test("Should render the correct number of ItemCounter components", () => {
    render(<CounterApp />);

    const ItemCounterComponents = screen.getAllByTestId("ItemCounter");

    expect(ItemCounterComponents.length).toBe(4);

    screen.debug();
  });

  test("Should render ItemCounter with correct props", () => {
    render(<CounterApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(4);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Biblia RVR1960",
      quantity: 10,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Cien años de soledad",
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "El principito",
      quantity: 5,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "El coronel no tiene quién le escriba",
      quantity: 1,
    });
  });
});
