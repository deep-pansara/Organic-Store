import { Box, VStack, Image, Button } from "@chakra-ui/react";
import HeroBg from "../../assets/Hero bg.jpg";

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
        width={["100%", "100%", "100%", "100%" , "95%"]}
        height={"100%"}
        margin={"auto"}
        backgroundColor={"#6CB095"}
        borderRadius={["0px", "0px", "0px", "0px" , "80px"]}
        color={"white"}
        overflow={"hidden"}
        position={"relative"}
      >
        {/* Hero Image  */}
        <Image
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          objectPosition={['right', 'right', 'right', 'center', 'center']}
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
          alignItems={["center", "center", "center", "flex-start", "flex-start",]}
          backgroundColor={["#ffffffc5", "#ffffffc5", "#ffffffc5", "transparent", "transparent",
          ]}
          className="bg-[#ffffffc5]"
          justifyContent={[
            "center",
            "center",
            "center",
            "center",
            "flex-start",
          ]}
        >
          <h1 className="text-2xl max-md:text-xl max-[500px]:text-lg  tracking-widest font-normal">
            Fresh & Organically Grown
          </h1>
          <h1 className="text-4xl max-md:text-3xl max-[500px]:text-2xl font-medium tracking-wider mt-4 text-[#5EA98B]">
            FLOURISHED VEGGIES
          </h1>
          <h1 className="text-4xl max-md:text-3xl max-[500px]:text-2xl font-light tracking-widest mt-4 ">
            Save Upto <span className="font-medium italic">20% off</span>
          </h1>

          <Button
            fontSize={"1.1rem"}
            padding={["0.5rem 1.5rem", "0.5rem 1.5rem", "1.2rem 2rem"]}
            backgroundColor={"#5EA98B"}
            borderRadius={"20px"}
            color={"white"}
            textTransform={"uppercase"}
            marginTop={["0.8rem", "0.8rem", "1.5rem"]}
            _hover={{
              backgroundColor: "transparent",
              border: "1px solid black",
              color: "black",
            }}
          >
            Shop Now
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Hero;
