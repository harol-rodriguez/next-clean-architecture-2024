// chakra-ui.tsx
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const theme = extendTheme({
  // Personaliza el tema aquí si es necesario
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
