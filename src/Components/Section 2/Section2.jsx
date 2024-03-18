import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Section2Card from "./Section2Card";

import Image1 from "../../assets/potato-card.png";
import Image2 from "../../assets/potato-card1.png";
import Image3 from "../../assets/potato-card2.png";

function Section2() {
  return (
    <Box
      width={"100%"}
      minHeight={"50vh"}
      marginTop={"5rem"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      overflow={"hidden"}
    >
      <HStack justifyContent={"center"} gap={"20px"} flexWrap={"wrap"}>
        <Section2Card
          cardImage={Image1}
          CardSubHeading={"From Our Fields to Your Table"}
          cardTitle={"FARM-FRESH POTATO EXPORTER"}
          cardTitleColor={"#5EA98B"}
        />

        <Section2Card
          cardImage={Image2}
          CardSubHeading={"Bringing the Best of the Harvest"}
          cardTitle={"EXPORT QUALITY POTATOES"}
          cardTitleColor={"white"}
        />

        <Section2Card
          cardImage={Image3}
          CardSubHeading={"Exporting the Essence of Freshness"}
          cardTitle={"PREMIUM POTATO SUPPLIER"}
          cardTitleColor={"#5EA98B"}
        />
      </HStack>
    </Box>
  );
}

export default Section2;
