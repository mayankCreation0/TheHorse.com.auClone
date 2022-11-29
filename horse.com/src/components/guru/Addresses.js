import React from 'react';
import Styles from './Styles/addressess.module.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button


} from '@chakra-ui/react'

const Addresses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <div>
            <p>Addresses</p>

            <button onClick={onOpen}>Add New Address</button>
            <Modal

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <div><ModalHeader>Create your account</ModalHeader>
                        <ModalCloseButton /></div>

                    <ModalBody pb={6}>
                        <form className={Styles.form1}>
                            <input placeholder='First Name' />
                            <input placeholder='Last Name' />
                            <input placeholder='Company' />
                            <input placeholder='Address 1' />
                            <input placeholder='Address 2' />
                            <input placeholder='City' />
                            <input placeholder='Country' />
                            <input placeholder='Postal/Zip Code' />
                            <input placeholder='Phone' />
                        </form>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Addresses