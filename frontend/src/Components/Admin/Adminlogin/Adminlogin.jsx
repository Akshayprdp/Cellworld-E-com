import React from 'react';
import './Adminlogin.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { adminLogin } from '../../../Services/AdminApi'; // Implement this service
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
    const navigate = useNavigate();

    const initialValues = {
        adminUsername: "",
        adminPassword: "",
    };

    const validationSchema = yup.object().shape({
        adminUsername: yup.string()
            .required('Admin username required'),
        adminPassword: yup.string()
            .required("Admin password required"),
    });

    async function onSubmit(values) {
        try {
            const response = await adminLogin(values);
            if (response.data.success) {
                const { token, username, Emailaddress, Phonenumber } = response.data;
                toast.success(response.data.message);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('Emailaddress', Emailaddress);
                localStorage.setItem('Phonenumber', Phonenumber);
                navigate('/admin');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            toast.error("An unexpected error occurred. Please try again later.");
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <div className='Login1'>
            <div className='div2'>
                <center>
                    <form onSubmit={formik.handleSubmit} className='Login2'>
                        <br />
                        <div className="mb-3">
                            <label htmlFor="adminUsername" className="form-label">Admin Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="adminUsername"
                                style={{ width: 300 }}
                                name='adminUsername'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.adminUsername}
                            />
                            {formik.touched.adminUsername && formik.errors.adminUsername ? (
                                <div className="error">{formik.errors.adminUsername}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className="mb-3">
                            <label htmlFor="adminPassword" className="form-label">Admin Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="adminPassword"
                                style={{ width: 300 }}
                                name='adminPassword'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.adminPassword}
                            />
                            {formik.touched.adminPassword && formik.errors.adminPassword ? (
                                <div className="error">{formik.errors.adminPassword}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className='button'>
                            <button type="submit" className="btn btn-primary">Admin Login</button>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                        </div>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default Adminlogin;
