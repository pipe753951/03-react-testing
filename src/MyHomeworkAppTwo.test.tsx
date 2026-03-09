import { describe, test } from "vitest";

import { render, screen } from "@testing-library/react";
import { MyHomeworkAppTwo } from "./MyHomeworkAppTwo";

describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName", () => {
    // const { container } = render(<MyHomeworkAppTwo />);
    render(<MyHomeworkAppTwo />);

    screen.debug();

    // console.log(container);
  });
});
