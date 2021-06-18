import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./config";
import CartPage from "./pages/CartPage";
import "./config/translations/i18n";

const queryClient = new QueryClient();

const AppRoot = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartPage />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppRoot;
