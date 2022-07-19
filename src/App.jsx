import {
  Container,
  Stack,
  Heading,
  Text,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CookieLogo from "./components/CookieLogo";
import Card from "./components/Card";
import CardIndividual from "./components/CardIndividual";

function App() {
  const API__URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const popularRecipe = async (search) => {
    const response = await fetch(`${API__URL}`);
    const data = await response.json();
    setRecipe(data.meals);
  };

  const searchRecipe = async (search) => {
    const response = await fetch(`${API__URL}${search}`);
    const data = await response.json();
    setRecipe(data.meals);
  };

  useEffect(() => {
    popularRecipe();
  }, []);
  console.log(recipe);
  return (
    <Container
      maxW="1200px"
      display="flex"
      flexDirection="column"
      gap="25px"
      flexWrap={"wrap"}
      padding="0"
    >
      <Stack
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        align="center"
        position={"fixed"}
        bg="white"
        zIndex={"100"}
        w="100%"
        padding={{ md: "3.5px 15px", lg: "7.5px 30px" }}
        justify={{ base: "center", md: "space-between" }}
        gap={{ base: "10px", lg: "25px" }}
      >
        <Stack align={{ md: "flex-start", base: "center" }}>
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
        </Stack>

        <Box
          display="flex"
          direction="row"
          gap="10px"
          alignSelf={"flex-start"}
          width={{ base: "auto", md: "35%" }}
        >
          <Input
            variant="outline"
            type="text"
            placeholder="Search your recipe"
            textTransform={"capitalize"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button colorScheme={"teal"} onClick={() => searchRecipe(search)}>
            Search
          </Button>
        </Box>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        justify={{ base: "center" }}
        align="flex-start"
        gap="25px"
        margin="65px 0"
      >
        {recipe.length <= 5
          ? recipe.map((element) => {
              return <CardIndividual props={element} key={element.idMeal} />;
            })
          : recipe?.map((element) => {
              return <Card props={element} key={element.idMeal} />;
            })}
      </Stack>
    </Container>
  );
}

export default App;
