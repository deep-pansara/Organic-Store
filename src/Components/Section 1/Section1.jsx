import { Box, HStack } from "@chakra-ui/react";
import Section1Card from "./Section1Card";

import Image1 from "../../assets/filter.gif";
import Image2 from "../../assets/package.gif";
import Image3 from "../../assets/warehouse.gif";
import Image4 from "../../assets/boat.gif";

function Section1() {
  return (
    <Box
      width={"100%"}
      min-height={"100vh"}
      // backgroundColor={'red'}
    >
      {/* Section 1 Cards */}
      <HStack
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        flexWrap={"wrap"}
      >
        <Section1Card
          cardImage={Image1}
          cardNumber={"01"}
          cardTitle={"Sorting"}
          cardText={"Inspect potatoes for quality, size, and any defects."}
        />
        <Section1Card
          cardImage={Image2}
          cardNumber={"02"}
          cardTitle={"Packing"}
          cardText={
            "Package sorted potatoes into appropriate containers such as crates, bags, or boxes."
          }
        />
        <Section1Card
          cardImage={Image3}
          cardNumber={"03"}
          cardTitle={"Warehouse"}
          cardText={"Store packed potatoes in a designated warehouse facility."}
        />
        <Section1Card
          cardImage={Image4}
          cardNumber={"04"}
          cardTitle={"Export"}
          cardText={
            "Arrange logistics for transporting packed potatoes to the destination."
          }
        />
      </HStack>
    </Box>
  );
}

export default Section1;
