import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recaptcha = () => {
    const [verify, setVerify] = useState(false);
    const navigate = useNavigate()
    const onChange = (value) => {
        setVerify(true);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: "300px", justifyContent: 'center', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <ReCAPTCHA sitekey="6LcnE0EjAAAAAPC228EO_jngbUFQgY6m4apOsG_L" onChange={onChange} />
            <button disabled={verify ? false : true} onClick={() => { navigate("/account") }}
                style={{
                    backgroundColor: '#7596b8', width: '80px', height: '40px', borderRadius: '20px', color: 'white'
                }}>Verify</button>
        </div>
    )
}

export default Recaptcha