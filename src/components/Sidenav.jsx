import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      links: "/",
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: "Transactions",
      links: "/transactions",
    },
  ];
  // .class{
  //   display:flex,
  //   flex-direction:column,
  // } // Stack comes with this property

  // .hstack{
  //     display:flex,
  //   alignItems:center;

  // }
  return (
    <Stack justify="space-between"   h="100vh"
    boxShadow={{
      base:"none",
      lg:"lg"
    }} 
    w={{
      base:"full",
      w:"16rem"
    }}>
    <Box>
    <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
        CRYPTO PROJECT
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack
          borderRadius="10px"
           key={nav.text}
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium">
              {nav.text}
            </Text>
          </HStack>
        ))}
      </Box>
    </Box>
     <Box mt="6" mx="3" mb="6">  
     <HStack
          borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
     </Box>
    </Stack>
  );
};

export default Sidenav;
