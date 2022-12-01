import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Input, StylesProvider, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Slide,
} from "@chakra-ui/react";
import { AuthContext } from "./API/Context";
import Styles from './Styles/login.module.css'


const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            let usersData = await fetch(
                `http://localhost:3001/users?email=${userData.email}&password=${userData.password}`
            );
            usersData = await usersData.json();

            localStorage.setItem("thehorse-token", usersData[0].token);
            setIsAuth({ ...isAuth, data: usersData[0], loggedin: true });

            setSuccess(true);

            setTimeout(() => {

                setSuccess(false);
                navigate("/account");
            }, 3000);
        } catch (error) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
            return;
        }
    };
    useEffect(() => {
        document.querySelector("title").innerText = "Login | thehourse";
    }, []);
    return (
        <>

            <Slide
                in={alert}
                direction="left"
                position="fixed"
                top="0px"
                style={{ zIndex: 10 }}
                bg="white"
            >
                <Alert status="error" w="80vw" mx="10vw" mt="50px" flexWrap="wrap">
                    <AlertIcon />
                    <AlertTitle>User with given credentials doesn't exist!</AlertTitle>
                    <AlertDescription>Try signing up.</AlertDescription>
                </Alert>
            </Slide>
            <Slide
                in={success}
                direction="left"
                position="fixed"
                top="0px"
                style={{ zIndex: 10 }}
            >
                <Alert status="success" w="80vw" mx="10vw" mt="50px" flexWrap="wrap">
                    <AlertIcon />
                    <AlertTitle>Logged In Succesfully!</AlertTitle>
                    <AlertDescription>Redirecting to Home page</AlertDescription>
                </Alert>
            </Slide>
            <Box w={["240px", "400px"]} m="auto" mt="65px" mb="140px" zIndex={1}>
                <Heading
                    color="RGB(84, 85, 64)"
                    letterSpacing="2px"
                    fontSize="27px"
                    fontWeight="500"
                    textAlign="center"
                    fontFamily="Canela"
                >
                    Login
                </Heading>
                <form onSubmit={handleLogin}>
                    <Box
                        borderBottom="solid 1px #bdbdbd"
                        mt="20px"
                        p="7px 14px"

                    >
                        <Input
                            outline='none'
                            variant='unstyled'
                            placeholder="Email"
                            border='none'
                            fontFamily="AtlasGrotesk, Helvetica, san-serif"
                            fontSize='14px'
                            color="RGBA(105, 106, 83, 1)"
                            height='20px'
                            marginTop='20px'
                            onChange={(e) =>
                                setUserData({ ...userData, email: e.target.value })
                            }
                            required
                        />
                    </Box>
                    <Box
                        borderBottom="solid 1px #bdbdbd"
                        mt="20px"
                        p="7px 14px"
                    >
                        <Input
                            outline='none'
                            variant='unstyled'
                            placeholder="Password"
                            border='none'
                            fontFamily="AtlasGrotesk, Helvetica, san-serif"
                            fontSize='14px'
                            color="RGBA(105, 106, 83, 1)"
                            height='20px'
                            marginTop='20px'
                            required
                            onChange={(e) =>
                                setUserData({ ...userData, password: e.target.value })
                            }
                        />

                    </Box>
                    <div className={Styles.div2}>
                        <button className={Styles.btn_b} type="submit">Login</button>&nbsp;
                        <button className={Styles.btn2}>Forgot password?</button>
                    </div>

                </form>
                <Box display="flex" justifyContent="center" mt="20px">
                    <Text fontFamily="AtlasGrotesk, Helvetica, san-serif"
                        fontSize='14px'
                        color="RGBA(105, 106, 83, 1)"
                        height='20px'>
                        Don't have an account? &nbsp;
                    </Text>
                    <Link to="/account/register">
                        <Text
                            fontFamily="AtlasGrotesk, Helvetica, san-serif"
                            fontSize='14px'
                            color="RGBA(105, 106, 83, 1)"
                            height='20px'
                            textDecoration="underline"
                        >
                            Sign up
                        </Text>
                    </Link>
                </Box>
            </Box>
        </>
    );
};
export default Login;