import React  from "react"
import {  Button, Modal , ModalOverlay , useDisclosure, ModalContent,ModalHeader,ModalCloseButton,Text,ModalBody,ModalFooter } from "@chakra-ui/react"

export default function BackdropExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    // const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  
    return (
      <>
        {/* {sizes.map((size) => ( */}
        {
          <Button
            onClick={() => handleSizeClick('full')}
            key={'full'}
            m={4}
          >{`Open ${size} Modal`}</Button>
        }
  
        <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent style={{top:'70px'}}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>mgfukucugc</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }