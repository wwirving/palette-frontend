import React from "react";
import { render } from "@testing-library/react";
import ColourCard from "./ColourCard";

describe("ColourCard tests", () => {
  it("should render", () => {
    expect(render(<ColourCard />)).toBeTruthy();
  });
});
