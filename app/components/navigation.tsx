import React from "react";
import { Flex, Box, Text, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";

interface NavigationProps {
  activeRoute: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeRoute }) => {
  return (
    <Flex bg="gray.800" color="white" align="center" p={4}>
      <Box ml={4}>
        <Text fontSize="xl" fontWeight="bold">
          Miso Woods
        </Text>
      </Box>
      <Spacer />
      <Box mr={4} display="flex" alignItems="center">
        <Link href="/" passHref prefetch={false}>
          <Text mr={4}>Inicio</Text>
        </Link>
        <Link href="/nosotros" passHref prefetch={false}>
          <Text mr={4}>Nosotros</Text>
        </Link>
        <Link href="/productos" passHref prefetch={false}>
          <Text mr={4}>Productos</Text>
        </Link>
        <Link href="/perfil" passHref prefetch={false}>
          <Text mr={4}>Perfil</Text>
        </Link>
        <Link href="/subirproducto" passHref>
          <Button mr={4}>Subir producto</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
