import { Box, VStack, Image, Button } from "@chakra-ui/react";
import HeroBg from "../../assets/hero.png";

function Hero() {
  return (
    <Box
      width={"100%"}
      height={["50vh", "50vh", "50vh", "50vh", "100vh"]}
      paddingY={"1rem"}
      overflow={"hidden"}
      marginBottom={"5rem"}
    >
      <VStack
        width={["100%", "100%", "100%", "100%", "95%"]}
        height={"100%"}
        margin={"auto"}
        backgroundColor={"#6CB095"}
        borderRadius={["0px", "0px", "0px", "0px", "80px"]}
        color={"white"}
        overflow={"hidden"}
        position={"relative"}
      >
        {/* Hero Image  */}
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          objectPosition={["right", "right", "right", "center", "center"]}
          src={HeroBg}
        />

        {/* Hero Content */}
        <VStack
          position={"absolute"}
          width={["100%", "100%", "100%", "50%"]}
          height={["100%", "100%", "100%", "50%"]}
          top={["0rem", "0rem", "0rem", "10vh", "10rem"]}
          left={["0rem", "0rem", "0rem", "5rem", "10rem"]}
          color={"black"}
          alignItems={[
            "center",
            "center",
            "center",
            "flex-start",
            "flex-start",
          ]}
          backgroundColor={[
            "#ffffffc5",
            "#ffffffc5",
            "#ffffffc5",
            "transparent",
            "transparent",
          ]}
          className="bg-[#ffffffc5]"
          justifyContent={[
            "center",
            "center",
            "center",
            "center",
            "flex-start",
          ]}
        ></VStack>
      </VStack>
    </Box>
  );
}

export default Hero;
