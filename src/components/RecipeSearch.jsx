import { Grid, Box } from "@chakra-ui/react";
import { Recipes } from "./Recipes";

export const RecipeSearch = ({ onClick, recipe }) => {
  return (
    <Box h="calc(100vh)" bg="blue.200">
      <Grid
        templateColumns={{
          base: "repeat(1, 350px)",
          md: "repeat(2, 350px)",
          lg: "repeat(4, 350px)",
        }}
        justifyContent="center"
      >
        {recipe.map((recipe) => (
          <Box key={Math.random()}>
            <Recipes onClick={onClick} recipe={recipe} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
