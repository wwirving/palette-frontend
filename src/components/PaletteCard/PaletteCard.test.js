import React from "react";
import { render } from "@testing-library/react";
import PaletteCard from "./PaletteCard";

describe("PaletteCard tests", () => {
  it("should render", () => {
    expect(render(<PaletteCard />)).toBeTruthy();
  });
});
