import React from "react";
import { Container, Text, VStack, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Welcome to My Website
        </Text>
        <Text fontSize="xl">This is a simple website built with React and Chakra UI.</Text>
        <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE3MDcyMzc4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" boxSize="300px" objectFit="cover" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
