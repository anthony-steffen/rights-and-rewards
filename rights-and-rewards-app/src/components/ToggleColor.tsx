import { Button, useColorMode } from "@chakra-ui/react";

const ToggleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} mt={4}>
      {colorMode === "light" ? "Mode Dark" : "Mode Light"}
    </Button>
  );
};

export default ToggleColor;