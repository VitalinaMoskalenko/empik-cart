import React from "react";
import { theme } from "../src/config/styles/theme";
import { ThemeProvider } from "styled-components";
import "../src/config/translations/i18n";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
