import {
  Image,
  Stack,
  Box,
  Badge,
  Heading,
  Text,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";

export default function Card({ props }) {
  const transform = Object.entries(props);

  let ingredients = [];
  let measure = [];

  for (let index = 9; index <= 28; index++) {
    ingredients.push(transform[index][1]);
  }
  for (let index = 29; index <= 48; index++) {
    measure.push(transform[index][1]);
  }
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack key={props.idMeal}>
      <Heading>{props.strMeal}</Heading>
      <Image objectFit={"contain"} src={props.strMealThumb} boxSize="sm" />
      <Text fontSize="xl" fontWeight="semibold" textTransform="capitalize">
        {props.strTags}
      </Text>
      <Text fontWeight={"bold"} fontSize="2xl" textTransform="capitalize">
        {props.strArea}
      </Text>
      <Stack>
        <Stack width="100%">
          <Button onClick={onToggle}>Ingredients</Button>
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
              width="100%"
            >
              <Box>
                {ingredients?.map((e, index) => {
                  if (e === "" || e === " ") {
                    return;
                  } else {
                    return (
                      <Text
                        key={index}
                        textTransform="capitalize"
                        fontSize="md"
                      >
                        {e}
                      </Text>
                    );
                  }
                })}
              </Box>

              <Box>
                {measure?.map((e, index) => {
                  if (e === "" || e === " ") {
                    return;
                  } else {
                    return (
                      <Text
                        key={index}
                        textTransform="-moz-initial"
                        fontSize="md"
                      >
                        {e}
                      </Text>
                    );
                  }
                })}
              </Box>
            </Stack>
          </Collapse>
        </Stack>
      </Stack>
    </Stack>
  );
}
