import React from "react";
import { render } from "@testing-library/react";
import AddModal from "./AddModal";

describe("AddModal tests", () => {
  it("should render", () => {
    expect(render(<AddModal />)).toBeTruthy();
  });
});
