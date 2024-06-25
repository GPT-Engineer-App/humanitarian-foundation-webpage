import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { SupabaseProvider } from "/src/integrations/supabase/index.js";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <SupabaseProvider>
      <ChakraProvider theme={theme}>
        <Box pt="60px">
          <App />
        </Box>
      </ChakraProvider>
    </SupabaseProvider>
  </React.StrictMode>
);
