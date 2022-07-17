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
    console.log(data);
  };

  useEffect(() => {
    searchRecipe();
    console.log(recipe);
  }, []);

  return (
    <Container>
      <Stack>
        <Heading>Recipe Book</Heading>
        <Text>Recetas de todo tipo y para todo tipo de gustos</Text>
      </Stack>
      {recipe?.map((element) => {
        return (
          <Stack key={element.idMeal} margin="25px 0">
            <Heading size="md">{element.strMeal}</Heading>
            <Image src={element.strMealThumb} boxSize="sm" />
            <Text textTransform="-moz-initial">{element.strInstructions}</Text>
            
          </Stack>
        );
      })}
    </Container>
  );
}

export default App;
