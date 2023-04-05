import { Text, Highlight } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Cautions = ({ recipe }) => {
  const cautions = recipe.cautions;

  return cautions.map((caution) => {
    return (
      <Text color="blue.600" key={uuid()}>
        <Highlight query={caution} styles={{ px: "1", py: "1", bg: "red.400" }}>
          {caution}
        </Highlight>
      </Text>
    );
  });
};
