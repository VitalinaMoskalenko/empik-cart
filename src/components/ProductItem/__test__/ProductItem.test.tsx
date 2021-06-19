import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import ProductItem from "../";
import { theme } from "../../../config";

it("renders ProductItem correctly", () => {
  const productItemComponent = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ProductItem title="Title" price="10" />
      </ThemeProvider>
    )
    .toJSON();

  expect(productItemComponent).toMatchSnapshot();
});
