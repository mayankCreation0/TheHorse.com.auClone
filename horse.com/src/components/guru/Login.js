import React from 'react'
import Styles from '../guru/Styles/login.module.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';


const Login = () => {
    let reference1 = useRef();
    const openForgot = (e) => {
        e.preventDefault();

        reference1.current.style.display = 'flex';
    }
    return (
        <div className='Styles.div1'>
            <p className={Styles.p1}>Login</p>
            <form onSubmit={{}} className={Styles.form1}>
                <input placeholder='Email' type='email' />
                <input placeholder="Password" type="password" />
                <div className={Styles.div2}>
                    <button type='submit'>Login</button>
                    <button onClick={openForgot}>Forgot password?</button>
                </div>
                <p>Don't have an account?</p>
                <a src="">Sign up</a>

            </form>
            <form className={Styles.form2} ref={reference1}>
                <p className={Styles.p1}>Forgotten Password</p>
                <input placeholder='Email' type='email' />
                <div className={Styles.div2}>
                    <button type='submit'>Submit</button>
                    <button onClick={openForgot}>cancel</button>
                </div>
            </form>
        </div>

    )
}

export default Login;