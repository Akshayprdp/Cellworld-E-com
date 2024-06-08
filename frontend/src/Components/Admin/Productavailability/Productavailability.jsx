import React from 'react';
import './Productavailability.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Productavailability() {
  const initialValues = {
    productId: '',
    productName: '',
  };

  const validationSchema = yup.object().shape({
    productId: yup.string().required('Product ID is required'),
    productName: yup.string().required('Product Name is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
    // Logic to handle product availability check can be added here
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="product-availability">
      <div className="form-container">
        <h2 className="heading">Check Product Availability</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="productId" className="form-label">Product ID</label>
            <input
              type="text"
              id="productId"
              name="productId"
              className="form-control"
              value={formik.values.productId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productId && formik.errors.productId ? (
              <div className="error">{formik.errors.productId}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="form-control"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productName && formik.errors.productName ? (
              <div className="error">{formik.errors.productName}</div>
            ) : null}
          </div>
        <div className='Button'>
          <button type="submit" className="btn btn-primary">Check Availability</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Productavailability;
