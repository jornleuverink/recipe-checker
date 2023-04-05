import { Text, Highlight } from "@chakra-ui/react";
import uuid from "react-uuid";

export const HealthLabels = ({ recipe }) => {
  const healthLabels = recipe.healthLabels;

  return healthLabels.map((healthLabel) => {
    return (
      <Text color="blue.300" key={uuid()}>
        <Highlight
          query={healthLabel}
          styles={{ px: "1", py: "1", bg: "blue.100" }}
        >
          {healthLabel}
        </Highlight>
      </Text>
    );
  });
};
