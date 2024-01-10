import { Box, Grid, GridItem, Image, Text, VStack, HStack } from '@chakra-ui/react';
import React from 'react';
import watermelon from '../../assets/Fruits & Vegetables/Watermelon.png';
import data from '../../assets/Data';

function Section3Cards() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap="1rem"
    >
      {data.map((item) => (
        <GridItem key={item.id} colSpan={1} rowSpan={1}>
          <Box
            // backgroundColor={'gray'}
            width={'100%'}
            height={'100%'}
            overflow={'hidden'}
            marginTop={'2rem'}
          >
            <VStack alignItems={'flex-start'}>
              <HStack>
                <Image borderRadius={'20px'} boxSize={'250px'} src={item.itemImage} />
              </HStack>

              <VStack alignItems={'flex-start'}>
                <HStack>
                  <Text fontWeight={'600'} letterSpacing={'2px'} fontSize={'20px'}>
                    {' '}
                    {item.itemTitle}{' '}
                  </Text>
                </HStack>

                <HStack>
                  <Text fontWeight={700}>Rs. {item.price} </Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default Section3Cards;
