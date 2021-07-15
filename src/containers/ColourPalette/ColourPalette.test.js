import React from "react";
import { render } from "@testing-library/react";
import ColourPalette from "./ColourPalette";

describe("ColourPalette tests", () => {
  it("should render", () => {
    expect(render(<ColourPalette />)).toBeTruthy();
  });
});
