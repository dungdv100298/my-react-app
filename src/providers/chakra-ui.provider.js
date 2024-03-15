import theme from '@/configs/theme';
import '@fontsource/noto-sans';
import { ChakraProvider } from '@chakra-ui/react';

export function ChakraUiProvider({ children }) {
  return (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  );
}
