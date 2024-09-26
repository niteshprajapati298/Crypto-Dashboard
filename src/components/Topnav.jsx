import React from 'react';
import { Box, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaUserCircle, FaBars } from "react-icons/fa";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4">
      <HStack 
        h="16"
        justify={'space-between'} 
        maxW={"70rem"}
        mx={"auto"}
      >
        {/* FaBars icon triggers onOpen when clicked */}
        <Icon 
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none"
          }}
        />
        
        <Heading fontSize={"28px"} fontWeight={"medium"}>{title}</Heading>

        {/* Menu for user actions like Logout and Support */}
        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} fontSize={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
