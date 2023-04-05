import { Center, Image, Text, Box, Flex } from "@chakra-ui/react";
import { DietLabels } from "./dietLabels";

export const Recipes = ({ onClick, recipe }) => {
  const VegButtons = () => {
    if (recipe.healthLabels.includes("Vegan")) {
      return "Vegan";
    }
    if (recipe.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    } else return "";
  };

  return (
    <Center gap={8} cursor={"pointer"} onClick={() => onClick(recipe)}>
      <Box
        w="100%"
        h={475}
        p={4}
        color="white"
        borderRadius={5}
        borderColor="blue.100"
        borderWidth={1}
        m="10px"
      >
        <Flex direction="column" align="center">
          <Text fontWeight={"450"} color="blue.600">
            {recipe.label}{" "}
          </Text>
          <Image
            src={recipe.image}
            width={220}
            height={220}
            borderRadius="5%"
            alt={recipe.alt}
            mt={15}
            mb={25}
          />
          <Box>
            <Text color="blue.400">{recipe.mealType}</Text>
          </Box>
          <Box>
            <Text>{recipe.dishType}</Text>
          </Box>
          <Box>
            <DietLabels recipe={recipe} />
          </Box>
          <Box>
            <Text color="blue.500" as="i">
              {VegButtons()}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
