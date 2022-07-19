import { Image, Stack, Heading, Text } from "@chakra-ui/react";
import CopyButtonCard from "./CopyButtonCard";

export default function Card({ props }) {
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
      minH={{ lg: "565px", base: "400px" }}
      justifyContent={"space-between"}
      margin="0 0.5rem"
      marginInlineEnd="0.5 rem"
    >
      <Heading textTransform="capitalize">{props.strMeal}</Heading>

      <a
        target="_blank"
        href={props.strSource}
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

      {<props className="strTags"></props> === "" ||
      <props className="strTags"></props> === " " ||
      <props className="strTags"></props> === "Unknown" ? (
        ""
      ) : (
        <Text fontSize="xl" fontWeight="semibold" textTransform="capitalize">
          {props.strTags}
        </Text>
      )}

      {props.strArea === "" ||
      props.strArea === " " ||
      props.strArea === "Unknown" ? (
        ""
      ) : (
        <Text fontWeight={"bold"} fontSize="2xl" textTransform="capitalize">
          {props.strArea}
        </Text>
      )}

      <Stack>
        <CopyButtonCard props={objData} />
      </Stack>
    </Stack>
  );
}
