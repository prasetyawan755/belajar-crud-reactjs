import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" type="text" placeholder="Full Name"/>
                <Gap height={18}/>
                <Input label="Email" type="email" placeholder="Email"/>
                <Gap height={18}/>
                <Input label="Password" type="password" placeholder="Password"/>
                <Gap height={50}/>
                <Button title="Register" type="button" onClick={() => history.push("/login")}/>
                <Gap height={100}/>
                <Link title="Kembali ke Login" onClick={() => history.push("/login")}/>
            </div>
        </div>
    )
}

export default Register
