import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CounterApp } from "./CounterApp";

describe("CounterApp", () => {
  test("Should match snapshot", () => {
    // Usando screen y un poco de ARIA.
    render(<CounterApp />);

    const application = screen.getByRole("application");
    expect(application).toMatchSnapshot();

    // Usando "container" - Forma utilizada por el instructor
    // const { container } = render(<CounterApp />);
    // expect(container).toMatchSnapshot();
  });
});
