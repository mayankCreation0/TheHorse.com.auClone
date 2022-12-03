import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Slide,
} from "@chakra-ui/react";
import { AuthContext } from './API/Context';

const Recaptcha = () => {
    const [verify, setVerify] = useState(false);
    const [success, setSuccess] = useState(false);
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate()
    const onChange = (value) => {
        setVerify(true);
    }
    const verification = () => {
        setIsAuth({ ...isAuth, loggedin: true });
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            navigate("/");
        }, 3000);

    }
    return (
        <>
            <Slide
                in={success}
                direction="top"
                position="fixed"
                top="0px"
                style={{ zIndex: 10 }}
            >
                <Alert status="success" w="40vw" mx="30vw" mt="50px" flexWrap="wrap">
                    <AlertIcon />
                    <AlertTitle>Logged In Succesfully!</AlertTitle>
                    <AlertDescription>Redirecting to Home page</AlertDescription>
                </Alert>
            </Slide>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: "300px", justifyContent: 'center', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '80px' }}>
                <ReCAPTCHA sitekey="6LcnE0EjAAAAAPC228EO_jngbUFQgY6m4apOsG_L" onChange={onChange} />
                <button disabled={verify ? false : true} onClick={verification}
                    style={{
                        backgroundColor: '#7596b8', width: '80px', height: '40px', borderRadius: '20px', color: 'white'
                    }}>Verify</button>
            </div>
        </>
    )
}

export default Recaptcha