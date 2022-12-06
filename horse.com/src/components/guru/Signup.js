import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Input, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Slide } from '@chakra-ui/react'
import Styles from './Styles/signup.module.css';
import Navbar from '../mayankFolder/navbar/Navbar'
import Footer from '../mayankFolder/footer/footer'


const Signup = () => {
    const [showBM, SetShowBM] = useState(false);
    const [userData, setUserData] = useState({ fname: "", lname: "", email: "", password: "" })
    const navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleSignup = async (e) => {
        e.preventDefault();
        let usersRes = await fetch(` http://localhost:3001/users?email=${userData.email}`);
        let usersData = await usersRes.json();

        if (usersData.length > 0) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false)
            }, 4000)
            return;
        }
        let res = await fetch("http://localhost:3001/users", {
            method: 'POST',
            body: JSON.stringify({ ...userData, token: userData.fname + Date.now() + userData.lname }),
            headers: { "Content-Type": "application/json" }
        })
        await res.json();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            navigate('/account/login');
        }, 4000)
    }
    useEffect(() => {
        (document.querySelector('title').innerText = 'Signup | thehourse')
    }, [])
    return <>

         
        <Slide in={alert} direction='top' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='error' w='40vw' mx='30vw' mt='50px' flexWrap='wrap'>
                <AlertIcon />
                <AlertTitle>This Email already used | User already exists!</AlertTitle>
                <AlertDescription>Try logging in.</AlertDescription>
            </Alert>
        </Slide>
        <Slide in={success} direction='top' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='success' w='40vw' mx='30vw' mt='50px' flexWrap='wrap'>
                <AlertIcon />
                <AlertTitle>Account Created Succesfully!</AlertTitle>
                <AlertDescription>Redirecting to login page</AlertDescription>
            </Alert>
        </Slide>
        <Box textAlign='center' w={['280px', '400px']} m='auto' mt='30px' mb='30px'>
            <Heading
                color="RGB(84, 85, 64)"
                letterSpacing="2px"
                fontSize="27px"
                fontWeight="500"
                textAlign="center"
                fontFamily="Canela"
                marginTop="50px">Create an Account</Heading>
            <form onSubmit={handleSignup}>
                <Box borderBottom="solid 1px #bdbdbd" mt="20px" p="7px 14px">
                    <Input outline='none'
                        variant='unstyled'
                        placeholder="First Name"
                        border='none'
                        fontFamily="AtlasGrotesk, Helvetica, san-serif"
                        fontSize='14px'
                        color="RGBA(105, 106, 83, 1)"
                        height='20px'
                        marginTop='20px'
                        required onChange={(e) => setUserData({ ...userData, fname: e.target.value })} />
                </Box>
                <Box borderBottom="solid 1px #bdbdbd" mt="20px" p="7px 14px">
                    <Input outline='none'
                        variant='unstyled'
                        placeholder="Last Name"
                        border='none'
                        fontFamily="AtlasGrotesk, Helvetica, san-serif"
                        fontSize='14px'
                        marginTop='20px'
                        color="RGBA(105, 106, 83, 1)"
                        height='20px' required onChange={(e) => setUserData({ ...userData, lname: e.target.value })} />
                </Box>
                <Box borderBottom="solid 1px #bdbdbd" mt="20px" p="7px 14px">
                    <Input outline='none'
                        variant='unstyled'
                        placeholder="Email"
                        border='none'
                        fontFamily="AtlasGrotesk, Helvetica, san-serif"
                        fontSize='14px'
                        marginTop='20px'
                        color="RGBA(105, 106, 83, 1)"
                        height='20px' required onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

                </Box>
                <Box borderBottom="solid 1px #bdbdbd" mt="20px" p="7px 14px">
                    <Input outline='none'
                        variant='unstyled'
                        placeholder="Password"
                        type='password'
                        border='none'
                        fontFamily="AtlasGrotesk, Helvetica, san-serif"
                        fontSize='14px'
                        marginTop='20px'
                        color="RGBA(105, 106, 83, 1)"
                        height='20px' required onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </Box>

                <button className={Styles.btn_b} type="submit">Create Account</button>
            </form>
            <Box display='flex' justifyContent='center' alignItems='center' mt='20px'>
                <Text fontFamily="AtlasGrotesk, Helvetica, san-serif"
                    fontSize='14px'
                    color="RGBA(105, 106, 83, 1)"
                    height='20px'>Already have an account? &nbsp;</Text>
                <Link to='/account/login'>
                    <Text fontFamily="AtlasGrotesk, Helvetica, san-serif"
                        fontSize='14px'
                        color="RGBA(105, 106, 83, 1)"
                        height='20px'
                        textDecoration="underline">Login</Text>
                </Link>
            </Box>
        </Box>
        <Footer />
    </>
}
export default Signup;