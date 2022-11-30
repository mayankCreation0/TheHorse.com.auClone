import React from 'react';
import Styles from './Styles/addressess.module.css';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button
} from '@chakra-ui/react'

const Addresses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)
    return (
        <div className={Styles.div1} >
            <p className={Styles.p1}>Addressess</p>

            <button onClick={onOpen} className={Styles.btn_b}>Add New Address</button>
            <Modal isOpen={isOpen} onClose={onClose} className={Styles.modal1}>
                <ModalOverlay bgColor="#545540" />
                <ModalContent className={Styles.modal2} w="350px" h="620px" m="auto" p="0px" overflowY="scroll" borderRadius="none">
                    <ModalBody >
                        <form className={Styles.form1}>
                            <input className={Styles.input1} placeholder='First Name' />
                            <input className={Styles.input1} placeholder='Last Name' />
                            <input className={Styles.input1} placeholder='Company' />
                            <input className={Styles.input1} placeholder='Address 1' />
                            <input className={Styles.input1} placeholder='Address 2' />
                            <input className={Styles.input1} placeholder='City' />
                            <input className={Styles.input1} placeholder='Country' />
                            <input className={Styles.input1} placeholder='Postal/Zip Code' />
                            <input className={Styles.input1} placeholder='Phone' />
                            <div className={Styles.div3}>
                                <input className={Styles.input2}
                                    id="checkbx" placeholder='Phone' type='checkbox' />
                                <label className={Styles.label2}
                                    htmlFor='checkbx'>Set As Default Address
                                </label>
                            </div>

                            <div className={Styles.div2} >
                                <button className={Styles.btn_b}>Add Address</button>
                                <button className={Styles.btn_w} onClick={onClose}>Cancel</button>
                            </div>

                        </form>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div >
    )
}

export default Addresses;