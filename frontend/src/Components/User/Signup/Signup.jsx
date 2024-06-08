import React from 'react'
import './Signup.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userRegister } from '../../../Services/UserApi';
import 'react-toastify/dist/ReactToastify.css';


function Signup() { 
    const initialValues = {
        username: "",
        Emailaddress: "",
        Password: "",
        confirmpassword: "",
        Phonenumber: "",
    };

    const validationSchema = yup.object().shape({
        username: yup.string()
            .required('Username required')
            .min(5, "Minimum 5 characters")
            .max(15, "Maximum 15 characters")
            .matches(/^[A-Za-z][A-Za-z]{4,14}$/,
             "Username should not include spaces or special characters"),
             Emailaddress: yup.string()
             .email("Invalid email")
             .required('Email required')
             .matches(/[^\s@]+\.com$/, "Invalid email"),
         
        Password: yup.string()
            .required("Password required")
            .min(6, "Password must be more than 6 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one digit")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special symbol"),
        confirmpassword: yup.string()
            .oneOf([yup.ref('Password'), null], 'Passwords must match')
            .required('Please confirm your password'),
        Phonenumber: yup.string()
            .min(10, "That doesn't look like a phone number")
            .max(10,"That doesn't look like a phone number")
            .matches(/(7|8|9)\d/,"That doesn't look like a phone number")
            .required('A phone number is required')
    });

    async function onSubmit(values) {
        try {
            const data = await userRegister(values);
            if (data.data.status) {
                toast.success(data.data.message);
            } else {
                toast.error(data.data.message);
            }
        } catch (error) {
            toast.error("An error occurred during registration");
            console.log(error);
        }
    }


    const formik = useFormik({
        validationSchema,
        onSubmit,
        initialValues,
    });

    return (
        <div className='Login1'>
            <div className='Login2'>
                <center>
                    <form className='bor' onSubmit={formik.handleSubmit}>
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
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Emailaddress" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="Emailaddress" aria-describedby="emailHelp" style={{width: 300}} 
                                name='Emailaddress' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.Emailaddress}/>
                            {formik.touched.Emailaddress && formik.errors.Emailaddress ? (
                                <div className="error">{formik.errors.Emailaddress}</div>
                            ) : null}   
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Phonenumber" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="Phonenumber" style={{width: 300}} 
                                name='Phonenumber'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.Phonenumber}/>
                            {formik.touched.Phonenumber && formik.errors.Phonenumber ? (
                                <div className="error">{formik.errors.Phonenumber}</div>
                            ) : null}
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmpassword" style={{width: 300}} 
                                name='confirmpassword'
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmpassword}/>
                            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                                <div className="error">{formik.errors.confirmpassword}</div>
                            ) : null}
                        </div>
                       
                        <div className='button'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <Link to="/login" className="link">Already have an account?</Link>
                        </div>
                    </form>
                </center>
            </div>
        </div>
    )
}

export default Signup
