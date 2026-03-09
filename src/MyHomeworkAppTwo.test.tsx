import { describe, expect, test } from "vitest";

import { render, screen } from "@testing-library/react";
// import { render } from "@testing-library/react";
import { MyHomeworkAppTwo } from "./MyHomeworkAppTwo";

describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyHomeworkAppTwo />);

    const h1 = container.querySelector("h1");
    const h2 = container.querySelector("h2");

    // expect(h1?.innerHTML).toBe("Gabriel José");
    expect(h1?.innerHTML).toContain("Gabriel José");
    expect(h2?.innerHTML).toContain("García Márquez");
  });

  test("Should render firstName and lastName (Using 'screen')", () => {
    render(<MyHomeworkAppTwo />);
    screen.debug();

    screen.getByRole("heading", {
      level: 1,
    });
  });
});
