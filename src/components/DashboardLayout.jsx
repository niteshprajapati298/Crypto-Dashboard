import SideDrawer from './SideDrawer'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import { Flex,Box, Container, useDisclosure } from '@chakra-ui/react'

const DashboardLayout = ({title,children}) => {

    const {isOpen ,onOpen, onClose} = useDisclosure()
  return (

    <Flex>
    <Box display={{
        base:"none",
        lg:"flex"
    }} >
    <Sidenav/>
    </Box>
        
        <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
        <Box  flexGrow={1}>
        <Topnav title="Dashboard" onOpen={onOpen} />      
        <Container maxW="70rem" bg="red">{children}</Container>
        </Box>
     </Flex>

   
  )
}

export default DashboardLayout;

