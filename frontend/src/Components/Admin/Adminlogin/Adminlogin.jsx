import React from 'react';
import './Adminlogin.css';
import * as yup from 'yup';
import { useFormik } from 'formik';

function Adminlogin() {
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
        console.log(values);
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
                        <br />
                        <div className="mb-3">
                            <label htmlFor="adminUsername" className="form-label">Admin Username</label>
                            <input type="text" className="form-control" id="adminUsername" style={{ width: 300 }}
                                name='adminUsername'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.adminUsername} />
                            {formik.touched.adminUsername && formik.errors.adminUsername ? (
                                <div className="error">{formik.errors.adminUsername}</div>
                            ) : null}
                        </div><br />
                        <div className="mb-3">
                            <label htmlFor="adminPassword" className="form-label">Admin Password</label>
                            <input type="password" className="form-control" id="adminPassword" style={{ width: 300 }}
                                name='adminPassword'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.adminPassword} />
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
    )
}

export default Adminlogin;
