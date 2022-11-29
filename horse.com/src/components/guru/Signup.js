import React from 'react'
import Styles from '../guru/Styles/signup.module.css';
const Signup = () => {
    return (
        <div className='Styles.div1'>
            <p className={Styles.p1}>Create an Account</p>
            <form onSubmit={{}} className={Styles.form1}>
                <input placeholder='First Name ' type='text' />
                <input placeholder='Last Name' type='text' />
                <input placeholder='Email' type='email' />
                <input placeholder="Password" type="password" />
                <div className={Styles.div2}>
                    <button type='submit'>Create Account</button>

                </div>
                <p>Already have an account?</p>
                <a src="">Login</a>

            </form>
        </div>
    )
}

export default Signup