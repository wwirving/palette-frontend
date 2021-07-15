import React from "react";
import { render } from "@testing-library/react";
import ColourBlock from "./ColourBlock";

describe("ColourBlock tests", () => {
  it("should render", () => {
    expect(render(<ColourBlock />)).toBeTruthy();
  });
});
