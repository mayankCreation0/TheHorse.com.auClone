import React from 'react';
import Styles from './Styles/addressess.module.css';
import { useState } from 'react';
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
    const [address, setAddress] = useState({ fname: "", lname: "", company: "", address1: "", address2: "", city: "", country: "", zip: 0, phone: "", default: false })
    // const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)

    const submittAddress = (e) => {
        e.preventDefault();
        console.log(address);
    }
    return (
        <div className={Styles.div1} >
            <p className={Styles.p1}>Addressess</p>

            <button onClick={onOpen} className={Styles.btn_b}>Add New Address</button>
            <Modal isOpen={isOpen} onClose={onClose} className={Styles.modal1}>
                <ModalOverlay bgColor="#545540" />
                <ModalContent className={Styles.modal2} w="350px" h="620px" m="auto" p="0px" overflowY="scroll" borderRadius="none">
                    <ModalBody >
                        <form className={Styles.form1}>
                            <input className={Styles.input1} placeholder='First Name' onChange={(e) => { setAddress({ ...address, fname: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Last Name' onChange={(e) => { setAddress({ ...address, lname: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Company' onChange={(e) => { setAddress({ ...address, company: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Address 1' onChange={(e) => { setAddress({ ...address, address1: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Address 2' onChange={(e) => { setAddress({ ...address, address2: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='City' onChange={(e) => { setAddress({ ...address, city: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Country' onChange={(e) => { setAddress({ ...address, country: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Postal/Zip Code' type='number' onChange={(e) => { setAddress({ ...address, zip: e.target.value }) }} />
                            <input className={Styles.input1} placeholder='Phone' onChange={(e) => { setAddress({ ...address, phone: e.target.value }) }} />
                            <div className={Styles.div3}>
                                <input className={Styles.input2} id="checkbx" type='checkbox' onChange={() => { setAddress({ ...address, default: !(address.default) }); }} />
                                <label className={Styles.label2} htmlFor='checkbx'>Set As Default Address</label>
                            </div>
                            <div className={Styles.div2} >
                                <button className={Styles.btn_b} onClick={submittAddress}>Add Address</button>
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