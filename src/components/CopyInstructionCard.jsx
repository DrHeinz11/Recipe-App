import {
  Box,
  useDisclosure,
  Button,
  Collapse,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function CopyButtonCard({ props }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack width="100%">
      <Button onClick={onToggle}>Instructions</Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          direction="row"
          justify="space-between"
          gap={{ base: "10px", md: "15px", lg: "25px" }}
          p="40px"
          color="white"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Box>
            <Text textTransform="-moz-initial" fontSize="md">
              {props}
            </Text>
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  );
}
