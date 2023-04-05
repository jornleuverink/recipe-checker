import { Center, Box, Image, Text, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { DietLabels } from "./dietLabels";
import { Ingredients } from "./Ingredients";
import { HealthLabels } from "./HealthLabels";
import { Nutrients } from "./Nutrients";
import { Cautions } from "./Cautions";

export const RecipeDetails = ({ onClick, recipe }) => {
  return (
    <>
      <Center>
        <Button
          onClick={() => {
            onClick();
          }}
          bg="blue.600"
          color="white"
          mt="10px"
          mb="20px"
        >
          <ArrowLeftIcon />
        </Button>
      </Center>
      <Center
        p={4}
        color="blue.400"
        pt={15}
        pb={30}
        pl={30}
        pr={30}
        ml={30}
        mr={30}
        mb={10}
        w={{ base: "80px", md: "200px", lg: "1000px" }}
        borderRadius="20px"
        borderColor="blue.100"
        borderWidth={3}
      >
        <Box>
          <Flex direction="column" alignItems="center">
            <Image
              src={recipe.image}
              width={{ base: "200px", md: "250x", lg: "350px" }}
              height={{ base: "200px", md: "250px", lg: "350px" }}
              alt={recipe.alt}
              borderRadius="5%"
              mt={10}
            />
            <Text
              fontSize={{ base: "20px", md: "35px", lg: "35px" }}
              fontWeight={"300"}
              color="blue.600"
              mt={10}
              mb={7}
            >
              {recipe.label}
            </Text>
            <Box
              width={200}
              borderWidth={2}
              borderColor="blue.200"
              borderRadius={10}
              bg="blue.100"
            >
              <Box>
                <Flex direction="column" alignItems="center">
                  <Box as="b" mt={2}>
                    {recipe.mealType}
                  </Box>
                  <Box mb={2}>{recipe.dishType}</Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", md: "column", lg: "row" }}
            gap={20}
            mt={10}
          >
            <Box>
              Ingredients:
              <Ingredients recipe={recipe} />
            </Box>
            <Flex direction="column">
              <Flex direction="row">
                <Text mr={2}>Cooking time:</Text>
                <Text color="blue.600">{recipe.totalTime} minutes</Text>
              </Flex>
              <Flex direction="row">
                <Text mr={2}>Servings:</Text>
                <Text color="blue.600"> {recipe.yield}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Box mt={5}>
            Dietlabels:
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <DietLabels recipe={recipe} />
            </Flex>
          </Box>
          <Box mt={5}>
            Healthlabels:
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <HealthLabels recipe={recipe} />
            </Flex>
          </Box>
          <Box mt={5}>
            Nutrients:
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <Nutrients recipe={recipe} />
            </Flex>
          </Box>
          <Box mt={5}>
            Cautions:
            <Flex direction="row" flexWrap="wrap" gap={2}>
              <Cautions recipe={recipe} />
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};
