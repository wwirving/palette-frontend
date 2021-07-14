import React from "react";
import { render } from "@testing-library/react";
import Colours from "./Colours";

describe("Colours tests", () => {
  it("should render", () => {
    expect(render(<Colours />)).toBeTruthy();
  });
});
