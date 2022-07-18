import { Container, Stack, Heading, Text, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

function App() {
  const API__URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const [recipe, setRecipe] = useState([]);

  // const searchRecipe = async (Title) => {
  //   const response = await fetch(`${API__URL}${Title}`);
  //   const data = await response.json();
  //  setRecipe(data.meals[0]);
  // };

  const searchRecipe = async () => {
    const response = await fetch(API__URL);
    const data = await response.json();
    setRecipe(data.meals);
    console.log(data.meals);
  };

  useEffect(() => {
    searchRecipe();
  }, []);

  return (
    <Container
      maxW="1200px"
      display="flex"
      flexDirection="column"
      flexWrap={"wrap"}
    >
      <Stack align={"center"}>
        <Heading textAlign="center">Recipe Book</Heading>
        <Text>Recetas de todo tipo y para todo tipo de gustos</Text>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        justify={{ lg: "space-between", base: "center" }}
        align="center"
        gap="25px"
      >
        {recipe?.map((element) => {
          console.log(element.strIngredient1)
          return (
            <Stack maxW={"325px"} margin="0" key={element.idMeal}>
              <Heading size="md">{element.strMeal}</Heading>
              <Image
                objectFit={"contain"}
                src={element.strMealThumb}
                boxSize="sm"
              />
              <Text textTransform="-moz-initial">{element.strTags}</Text>
              <Text fontWeight={"semibold"} textTransform="-moz-initial">
                {element.strArea}
              </Text>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
}

export default App;
