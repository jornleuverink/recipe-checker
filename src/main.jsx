import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecipesPage } from "./pages/RecipesPage";

const fonts = {
  body: "Courier New",
  heading: "Courier New",
};

const theme = extendTheme({ fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecipesPage />
    </ChakraProvider>
  </React.StrictMode>
);
