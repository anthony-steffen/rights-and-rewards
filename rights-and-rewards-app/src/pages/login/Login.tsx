import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading, VStack, useToast } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Call the login API here
      const response = await fetch("localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
    setIsLoading(false);
  }

  return (
    <Box 
    width={["100%", "400px"]} 
      mx="auto" 
      mt={["10", "20"]} 
      p={["4", "8"]} 
      borderWidth="1px" 
      borderRadius="lg" 
      boxShadow="lg"
      color='blackAlpha.900'
      >
      <VStack spacing={4} align="center">
        <Heading as="h2" size="lg" textAlign="center">
          Login
        </Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button 
          colorScheme="teal" 
          size="md" 
          width="100%" 
          mt={4} 
          onClick={handleLogin} 
          isLoading={isLoading}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;