import { useState } from 'react';
import './Register.scss'
import {useNavigate} from "react-router-dom";
import {postRegister} from "../../services/apiService";
import {toast} from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);


    const navigate = useNavigate();
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async() => {
        const isValidEmail = validateEmail(email);
        // validate email
        if (!isValidEmail) {
            toast.error('Invalid email address');
            return;
        }
        // validate password
        if (!password) {
            toast.error('Invalid password');
            return;
        }
        // Goi API
        let data = await postRegister(email,password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if(data && +data.EC !== 0 ) {
            toast.error(data.EM);
        }
    }
    return(
        <div className='register-container'>
            <div className='header'>
                <span>  Already have an account ? </span>
                <button
                    className='btn btn-primary'
                    onClick={() => navigate('/login')}
                >Login
                </button>
            </div>
            <div className='title col-4 mx-auto'>
                Học React
            </div>
            <div className='welcome col-4 mx-auto'>
                Start your journey with us
            </div>
            <div className='content-form col-4 mx-auto'>
                <div>
                    <label>Email (*)</label>
                    <input type={"email"}
                           className='form-control'
                           value={email}
                           onChange={(event)=> setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group pass-group' style={{position: 'relative'}}>
                    <label>Password (*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        style={{paddingRight: '40px'}}
                    />
                    <span
                        className='icon-eye'
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '38px',
                            cursor: 'pointer',
                            zIndex: 2
                        }}
                    >
                        {isShowPassword ? <VscEye/> : <VscEyeClosed/>}
                    </span>
                </div>
                <div className='form-group'>
                    <label>Username (*)</label>
                    <input
                        type={"text"}
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div >
                    <button
                    className='btn-submit'
                    onClick = {() => handleRegister()}
                    >
                        Create new account
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() =>{navigate('/')}}>Go to Home
                    </span>
            </div>
        </div>
        </div>
    )
}
export default Register;