import React from "react";
import { render } from "@testing-library/react";
import MenuModal from "./MenuModal";

describe("MenuModal tests", () => {
  it("should render", () => {
    expect(render(<MenuModal />)).toBeTruthy();
  });
});
