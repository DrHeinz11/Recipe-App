import { Image, Stack, Heading, Text } from "@chakra-ui/react";
import CopyButtonCard from "./CopyButtonCard";
import CopyInstructionCard from "./CopyInstructionCard";

export default function CardIndividual({ props }) {
  const transform = Object.entries(props);
  const objData = {
    ingredients: [],
    measure: [],
  };

  for (let index = 9; index <= 48; index++) {
    index <= 28
      ? objData.ingredients.push(transform[index][1])
      : objData.measure.push(transform[index][1]);
  }

  return (
    <Stack
      key={props.idMeal}
      minH="400px"
      maxW="100%"
      justifyContent={"space-between"}
      direction="row"
    >
      <Stack direction="column" align="center" justifyContent="center">
        <Heading textTransform="capitalize">{props.strMeal}</Heading>

        <a
          target="_blank"
          href="https://cookpad.com/uy/recetas/116102-chivito-uruguayo"
          alt={`Cookpad-${props.strMeal}`}
        >
          {" "}
          <Image
            objectFit={"contain"}
            src={props.strMealThumb}
            boxSize="sm"
            alt={props.strMeal}
          />
        </a>

        {props.strArea === "" ||
        props.strArea === " " ||
        props.strArea === "Unknown" ? (
          ""
        ) : (
          <Text fontWeight={"bold"} fontSize="2xl" textTransform="capitalize">
            {props.strArea}
          </Text>
        )}
      </Stack>
      <Stack>
        {props.strTags === "" ||
        props.strTags === " " ||
        props.strTags === "Unknown" ? (
          ""
        ) : (
          <Text fontSize="xl" fontWeight="semibold" textTransform="capitalize">
            {props.strTags}
          </Text>
        )}
      </Stack>

      <Stack direction="row">
        <CopyInstructionCard props={props.strInstructions} />
        <CopyButtonCard space='center' props={objData} />
      </Stack>
    </Stack>
  );
}
