import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = () => {
    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
    return (
        <div>
            <ReCAPTCHA sitekey="6LcnE0EjAAAAAPC228EO_jngbUFQgY6m4apOsG_L" onChange={onChange} />
        </div>
    )
}

export default Recaptcha