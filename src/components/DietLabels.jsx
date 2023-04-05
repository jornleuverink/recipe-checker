import { Text, Highlight } from "@chakra-ui/react";
import uuid from "react-uuid";

export const DietLabels = ({ recipe }) => {
  const dietLabels = recipe.dietLabels;

  return dietLabels.map((dietLabel) => {
    return (
      <Text color="blue.600" key={uuid()}>
        <Highlight
          query={dietLabel}
          styles={{ px: "1", py: "1", bg: "blue.200" }}
        >
          {dietLabel}
        </Highlight>
      </Text>
    );
  });
};
