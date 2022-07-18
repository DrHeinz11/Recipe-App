import { Container, Stack, Heading, Text, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CookieLogo from "./components/CookieLogo";

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
    >
      <Stack align={"center"}>
        <Heading display="flex" alignItems="center" gap="15px" textAlign="center">
          {" "}
          <CookieLogo />
          Recipe Book
        </Heading>
        <Text>Recetas de todo tipo y para todo tipo de gustos</Text>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        justify={{ lg: "space-between", base: "center" }}
        align="flex-start"
        gap="25px"
      >
        {recipe?.map((element) => {
          const transform = Object.entries(element);
          let ingredients = [];
          let measure = [];
          for (let index = 9; index <= 28; index++) {
            ingredients.push(transform[index][1]);
          }
          for (let index = 29; index <= 48; index++) {
            measure.push(transform[index][1]);
          }

          console.log(ingredients);
          console.log(measure);
          return (
            <Stack
              maxW={"325px"}
              margin="0"
              key={element.idMeal}
              alignItems="flex-start"
            >
              <Heading size="md">{element.strMeal}</Heading>
              <Image
                objectFit={"contain"}
                src={element.strMealThumb}
                boxSize="sm"
              />
              <Text
                fontSize="xl"
                fontWeight="semibold"
                textTransform="-moz-initial"
              >
                {element.strTags}
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize="2xl"
                textTransform="-moz-initial"
              >
                {element.strArea}
              </Text>

              <Stack
                direction="row"
                justify="space-between"
                gap={{ base: "10px", md: "15px", lg: "25px" }}
              >
                <Box>
                  {ingredients?.map((e) => {
                    if (e === "" || e === " ") {
                      return;
                    } else {
                      return (
                        <>
                          <Text textTransform="capitalize" fontSize="md">
                            {e}
                          </Text>
                        </>
                      );
                    }
                  })}
                </Box>

                <Box>
                  {measure?.map((e) => {
                    if (e === "" || e === " ") {
                      return;
                    } else {
                      return (
                        <>
                          <Text textTransform="-moz-initial" fontSize="md">
                            {e}
                          </Text>
                        </>
                      );
                    }
                  })}
                </Box>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
}

export default App;
