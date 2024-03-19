import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image src="https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGxvZ298ZW58MHx8fHwxNzEwODY4MTIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="React logo" boxSize="200px" objectFit="contain" mx="auto" />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to Your New React App
      </Heading>
      <Text color={"gray.500"} mb={6}>
        This is the homepage of your new React application. You can start editing this page in <code>src/pages/Index.jsx</code>
      </Text>

      <Flex justify="center" mt={8}>
        <Link href="https://reactjs.org" isExternal mx={4}>
          <Button colorScheme="blue" leftIcon={<FaGithub />}>
            Learn React
          </Button>
        </Link>
        <Link href="https://chakra-ui.com" isExternal mx={4}>
          <Button colorScheme="teal">Chakra UI Docs</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
