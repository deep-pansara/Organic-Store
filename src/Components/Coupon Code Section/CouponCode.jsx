import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import bg from "../../assets/Testimonial bg.png";

function CouponCode() {
  return (
    <Box
      width={"100%"}
      height={'50vh'}
      marginTop={"5rem"}
      position={"relative"}
      overflow={"hidden"}
    >

        {/* Background Image */}
      <VStack
       position={"absolute"}
       zIndex={-1}
       width={"100%"}
       height={"100%"}
       >
        <Image
        width={"100%"}
        height={"100%"}
        objectFit={'cover'}
        src={bg} />
      </VStack>

        <VStack 
        width={"100%"} 
        height={"100%"} 
        justifyContent={"center"}
        gap={"30px"}
        >
            <Text
            fontSize={['16px' , '25px' , '40px' , '50px']}
            fontWeight={'600'}
            letterSpacing={'2px'}
            textAlign={'center'}
            >
            Use this Coupon Code For 15% Off
            </Text>

            <Text
            fontSize={['16px' , '20px' , '20px' , '30px']}
            border={'1px dashed #5EA98B'}
            width={['10rem' ,   '10rem' , '15rem' ,    '15rem']}
            height={[ '4rem' ,   '3rem' , '4rem' , '5rem']}
            display={'grid'}
            placeItems={'center'}
            >
            Orga15
            </Text>

            <Text>
            Note: For New Users Only
            </Text>

        </VStack>

    </Box>
  );
}

export default CouponCode;
