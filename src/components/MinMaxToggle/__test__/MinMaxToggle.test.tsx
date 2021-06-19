import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import MinMaxToggle from "../";
import { theme } from "../../../config";

it("renders MinMaxToggle correctly", () => {
  const minMaxToggleComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <MinMaxToggle min={1} max={1} onValueChanged={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(minMaxToggleComponent).toMatchSnapshot();
});
