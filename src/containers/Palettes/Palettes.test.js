import React from "react";
import { render } from "@testing-library/react";
import Palettes from "./Palettes";

describe("Palettes tests", () => {
  it("should render", () => {
    expect(render(<Palettes />)).toBeTruthy();
  });
});
