import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
  HStack,
  position,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaShoppingBag, FaHeart, FaShareAlt } from "react-icons/fa";
import data from "../../assets/Data";
import toast from "react-hot-toast";

function Section3Cards() {
  const [cardStates, setCardStates] = useState(
    data.map(() => ({ isClicked: false, isOverlayVisible: false }))
  );

  const changeFavIcon = index => {
    setCardStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].isClicked = !newStates[index].isClicked;
      return newStates;
    });
  };

  const changeOverlayVisible = (index, isVisible) => {
    setCardStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].isOverlayVisible = isVisible;
      return newStates;
    });
  };

  const addToCartHandler = item => {
    // const quantity = 1;
    // console.log("Added to cart", item);

    toast.success("Added to cart", {
      position: "bottom-center", // Set the position to bottom-center
    });
  };

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="2rem"
      >
        {data.map((item, index) => (
          <GridItem key={item.id} colSpan={1} rowSpan={1}>
            <Box
              width={"100%"}
              height={"100%"}
              overflow={"hidden"}
              marginTop={"1rem"}
              onMouseEnter={() => changeOverlayVisible(index, true)}
              onMouseLeave={() => changeOverlayVisible(index, false)}
            >
              {/* Card Items */}
              <VStack alignItems={"flex-start"}>
                {/* Card Image */}
                <HStack position={"relative"} overflow={"hidden"}>
                  <Image
                    borderRadius={"20px"}
                    boxSize={"400px"}
                    src={item.itemImage}
                  />

                  {/* Card Overlay */}
                  <HStack
                    width={"100%"}
                    height={"50px"}
                    position={"absolute"}
                    bottom={0}
                    justifyContent={"center"}
                    alignItems={"center"}
                    transition={"all 0.2s ease"}
                    {...(cardStates[index].isOverlayVisible
                      ? { transform: "translateY(0px)" }
                      : { transform: "translateY(300px)" })}
                  >
                    {/* Share Icon */}
                    <HStack
                      width={"100%"}
                      height={"100%"}
                      backgroundColor={"#a2e4ca3b"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      borderRadius={"0px 0px 20px 20px"}
                      fontFamily={"sans-serif"}
                      color={"white"}
                      cursor={"pointer"}
                      transition={"all 0.2s linear"}
                      _hover={{
                        transform: "scale(1)",
                      }}
                    >
                      <Text color={"black"} fontWeight={700}>
                        {item.itemTitle}
                      </Text>
                    </HStack>
                  </HStack>
                </HStack>

                <VStack alignItems={"center"}>
                  <HStack>
                    <Text
                      fontWeight={"600"}
                      letterSpacing={"2px"}
                      fontSize={"20px"}
                    >
                      {item.itemTitle}
                    </Text>
                  </HStack>

                  <HStack>
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Shape :</Th>
                            <Td>{item.shape}</Td>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>Size :</Th>
                            <Td>{item.size}</Td>
                          </Tr>
                          <Tr>
                            <Th>Skin :</Th>
                            <Td>{item.skin}</Td>
                          </Tr>
                          <Tr>
                            <Th>Eyes:</Th>
                            <Td>{item.eyes}</Td>
                          </Tr>
                        </Tbody>
                        <Tfoot>
                          <Tr>
                            <Th>Flesh :</Th>
                            <Td>{item.flesh}</Td>
                          </Tr>
                        </Tfoot>
                      </Table>
                    </TableContainer>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default Section3Cards;
