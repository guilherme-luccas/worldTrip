import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  colors: {
    yellow: {
      "300": "#FFBA08",
    },
    gray: {
      "500": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.50",
      },
    },
  },
});
