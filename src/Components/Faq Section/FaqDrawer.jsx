import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

function FaqDrawer() {
  return (
    <Accordion
      allowToggle
      width={"100%"}
      gap={"1rem"}
      display={"flex"}
      flexDirection={"column"}
      marginTop={"4rem"}
    >
      <AccordionItem>
        <h2>
          <AccordionButton
            bg={"#5DA88A"}
            height={"4rem"}
            color={"white"}
            _hover={{ bg: "#5DA88A" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
            >
              Where do you source your potatoes from?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          We source our potatoes from trusted farmers and suppliers across
          regions renowned for their potato cultivation, ensuring the highest
          quality and freshness for our customers.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            bg={"#5DA88A"}
            height={"4rem"}
            color={"white"}
            _hover={{ bg: "#5DA88A" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
            >
              How do you ensure the quality and freshness of your potatoes
              during transportation?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          We employ strict quality control measures throughout the
          transportation process, including temperature-controlled storage and
          transportation facilities. Additionally, our experienced logistics
          team ensures that our potatoes reach their destination in optimal
          condition.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            bg={"#5DA88A"}
            height={"4rem"}
            color={"white"}
            _hover={{ bg: "#5DA88A" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
            >
              Can I place a custom order for specific potato varieties or
              quantities?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes, we welcome custom orders and can accommodate specific potato
          varieties, quantities, and packaging requirements. Please contact our
          sales team to discuss your custom order needs.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            bg={"#5DA88A"}
            height={"4rem"}
            color={"white"}
            _hover={{ bg: "#5DA88A" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
            >
              How can I place an order with your company?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          You can place an order by contacting our sales team via email, phone,
          or through our website. Our dedicated team will guide you through the
          ordering process and ensure that your requirements are met
          efficiently.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton
            bg={"#5DA88A"}
            height={"4rem"}
            color={"white"}
            _hover={{ bg: "#5DA88A" }}
          >
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={["14px", "14px", "14px", "14px", "20px"]}
            >
              What varieties of potatoes do you export?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          We export a wide range of potato varieties including LADY ROSSETA,
          CHIPSONA, SANTANA, and many more. Our selection ensures that we can
          meet the diverse needs of our customers worldwide.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default FaqDrawer;
