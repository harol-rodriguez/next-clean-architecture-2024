// theme.ts
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: "gray.800",
      lineHeight: "tall",
    },
    a: {
      color: "teal.500",
    },
  },
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "md",
    },
    sizes: {
      sm: {
        fontSize: "sm",
        px: 4,
        py: 3,
      },
      md: {
        fontSize: "md",
        px: 6,
        py: 4,
      },
    },
    variants: {
      outline: {
        border: "2px solid",
        borderColor: "brand.700",
        color: "brand.700",
      },
    },
    defaultProps: {
      variant: "outline",
    },
  },
}

const theme = extendTheme({ colors, styles, components })

export default theme
