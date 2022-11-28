import React from 'react'
import Styles from '../Styles/login.module.css'

const Login = () => {
    return (
        <>
            <p className={Styles.p1}>Login</p>
            <form onSubmit={{}} className={Styles.form1}>
                <input placeholder='Email' type='email' />
                <input placeholder="Password" type="password" />
            </form>
        </>

    )
}

export default Login