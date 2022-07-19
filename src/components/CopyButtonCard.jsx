import {
  Box,
  useDisclosure,
  Button,
  Collapse,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function CopyButtonCard({ props,space='space-between' }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack width="100%">
      <Button onClick={onToggle}>Ingredients</Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          direction="row"
          justify={space}
          gap={{ base: "10px", md: "15px", lg: "25px" }}
          p="40px"
          color="white"
          bg="teal.500"
          rounded="md"
          shadow="md"
          width="100%"
        >
          <Box>
            {props.ingredients?.map((e, index) => {
              if (e === "" || e === " ") {
                return;
              } else {
                return (
                  <Text key={index} textTransform="capitalize" fontSize="md">
                    {e}
                  </Text>
                );
              }
            })}
          </Box>

          <Box>
            {props.measure?.map((e, index) => {
              if (e === "" || e === " ") {
                return;
              } else {
                return (
                  <Text key={index} textTransform="-moz-initial" fontSize="md">
                    {e}
                  </Text>
                );
              }
            })}
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  );
}
