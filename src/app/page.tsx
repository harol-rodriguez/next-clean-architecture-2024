"use client";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <Box bg={bgColor} minHeight="100vh" p={5}>
      <VStack spacing={8} align="center">
        <Image
          src="/vercel.svg"
          alt="Logo"
          boxSize="100px"
        />

        <Heading as="h1" size="2xl" textAlign="center">
          Bienvenido a Mi Aplicación
        </Heading>

        <Text fontSize="xl" color={textColor}>
          Esta es una página de bienvenida simple utilizando Chakra UI en Next.js.
        </Text>

        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={() => alert('Haz clic en el botón!')}>
            Clic Aquí
          </Button>
          <Button colorScheme="teal" onClick={toggleColorMode}>
            Cambiar Modo de Color
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
