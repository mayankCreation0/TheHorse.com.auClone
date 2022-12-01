import { Button,Drawer } from "@chakra-ui/react"
import { useDisclosure,DrawerOverlay,DrawerCloseButton,DrawerContent,DrawerHeader,DrawerBody,Input,DrawerFooter } from "@chakra-ui/react"
import React from "react"
export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent style={{top:'80px', backgroundColor:'  #545540', color:'white',width:'20%'}}>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
              <p>hschfv</p>
              <p>jscvjh</p>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
