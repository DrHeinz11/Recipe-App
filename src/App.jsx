import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CookieLogo from "./components/CookieLogo";
import Card from "./components/Card";

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
    // console.log(data.meals);
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
      padding="0"
    >
      <Stack align={"center"}>
        <Heading
          display="flex"
          alignItems="center"
          gap="15px"
          textAlign="center"
        >
          {" "}
          <CookieLogo />
          Recipe Book
        </Heading>
        <Text>Recetas de todo tipo y para todo tipo de gustos</Text>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        justify={{ base: "center" }}
        align="flex-start"
        gap="25px"
      >
        {recipe?.map((element, index) => {
          return <Card props={element} key={element.idMeal} />;
        })}
      </Stack>
    </Container>
  );
}

export default App;
