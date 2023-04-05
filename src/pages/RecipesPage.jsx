import { Center, Box, Flex, Heading, Button } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import { RecipeSearch } from "../components/RecipeSearch";
import { RecipeDetails } from "../components/RecipeDetails";
import { Searchbar } from "../components/Searchbar";

export const RecipesPage = ({}) => {
  const recipes = data.hits;

  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const [userChoice, setUserChoice] = useState();

  const [filteredRecipes, setFilteredRecipes] = useState(recipe);

  const filterVegetarianRecipes = () => {
    const vegetarianRecipes = recipe.filter((recipe) => {
      return recipe.healthLabels.includes("Vegetarian");
    });
    setFilteredRecipes(vegetarianRecipes);
  };

  const filterVeganRecipes = () => {
    const veganRecipes = recipe.filter((recipe) => {
      return recipe.healthLabels.includes("Vegan");
    });
    setFilteredRecipes(veganRecipes);
  };

  const resetFilters = () => {
    setFilteredRecipes(recipe);
  };

  return (
    <Center flexDir="column">
      <Center
        width="100%"
        height="120px"
        mb={{ base: "10px", md: "20px", lg: "20px" }}
      >
        <Heading size="2xl" color="blue.700">
          RecipecheckerXL
        </Heading>
      </Center>
      <Box className="app">
        {userChoice ? (
          <RecipeDetails recipe={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <Flex
              direction="column"
              flexWrap="wrap"
              align="center"
              justify="center"
            >
              <Flex direction={{ base: "column", md: "column", lg: "row" }}>
                <Flex
                  direction={{ base: "column", md: "column", lg: "row" }}
                  gap={2}
                  ml={2}
                  mb={{ base: "0px", md: "10px", lg: "10px" }}
                >
                  <Searchbar
                    setFilteredRecipes={setFilteredRecipes}
                    recipe={recipe}
                  />
                  <Button
                    onClick={filterVeganRecipes}
                    w={40}
                    color="blue.700"
                    backgroundColor="blue.100"
                  >
                    Vegan
                  </Button>
                  <Button
                    onClick={filterVegetarianRecipes}
                    w={40}
                    color="blue.700"
                    backgroundColor="blue.100"
                  >
                    Vegetarian
                  </Button>
                  <Button
                    onClick={resetFilters}
                    w={40}
                    color="blue.700"
                    backgroundColor="blue.100"
                  >
                    Show All
                  </Button>
                </Flex>
              </Flex>
            </Flex>

            <RecipeSearch onClick={setUserChoice} recipe={filteredRecipes} />
          </>
        )}
      </Box>
    </Center>
  );
};
