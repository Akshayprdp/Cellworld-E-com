import React from 'react';
import './Login.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, } from 'react-router-dom';
import { userLogin } from '../../../Services/UserApi';
import { toast } from 'react-toastify';
import { useState } from 'react';


function Login() { 
    const navigate = useNavigate();
    
    const initialValues = {
        username: "",
        Password: "",
    };
    

    const validationSchema = yup.object().shape({
        username: yup.string()
            .required('Username required'),
        Password: yup.string()
            .required("Password required"),
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function onSubmit(values) {
        try {
            const response = await userLogin(values);
            if (response.data.success) {
                const { token, username, Emailaddress, Phonenumber } = response.data;  
                console.log(`responsee${response.data}`)
                toast.success(response.data.message);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('Emailaddress', Emailaddress); 
                localStorage.setItem('Phonenumber', Phonenumber); 
                navigate('/'); 
            } else {
                toast.error(response.data.message); 
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            toast.error("An unexpected error occurred. Please try again later.");
        }
    }
    
    
    
    const formik = useFormik({
        validationSchema,
        onSubmit,
        initialValues,
    });

    return (
        <div className='Login1'>
            <div className='div2'>
                <center>
                    <form onSubmit={formik.handleSubmit} className='Login2'>
                        <br/>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" style={{width: 300}}
                                name='username'
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                value={formik.values.username} />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="error">{formik.errors.username}</div>
                            ) : null}
                        </div><br />
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="Password" style={{width: 300}} 
                                name='Password'
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.Password}/>
                            {formik.touched.Password && formik.errors.Password ? (
                                <div className="error">{formik.errors.Password}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className='button'>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default Login;
