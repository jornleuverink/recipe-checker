import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Ingredients = ({ recipe }) => {
  const ingredients = recipe.ingredientLines;

  return ingredients.map((ingredient) => {
    return (
      <Text color="blue.600" key={uuid()}>
        <Text as="i">{ingredient}</Text>
      </Text>
    );
  });
};
