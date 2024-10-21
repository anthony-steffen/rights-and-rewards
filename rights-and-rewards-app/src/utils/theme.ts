import { extendTheme } from "@chakra-ui/react";

// Definindo o tema padrão
const theme = extendTheme({
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    '2xl': "96em", // 1536px
  },
  colors: {
    primary: {
      100: "#E3F9E5",
      500: "#38A169", // Verde escuro (padrão)
      700: "#2F855A",
    },
    secondary: {
      //vermelho
      100: "#FEE2E2",
      500: "#E53E3E", // Vermelho escuro (padrão)
      700: "#C53030",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif", // Fonte para os títulos
    body: "Inter, sans-serif", // Fonte para o corpo do texto
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "xl", // Borda arredondada
      },
      sizes: {
        lg: {
          px: 10, // Aumenta o padding horizontal nos botões grandes
        },
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.700",
          },
        },
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bg: "gray.100",
            _hover: {
              bg: "gray.200",
            },
            _focus: {
              bg: "white",
              borderColor: "primary.500",
            },
          },
        },
      },
    },
  },
});

export default theme;