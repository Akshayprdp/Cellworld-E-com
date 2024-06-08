import React from 'react';
import './Updateproduct.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: 'Sample Product',
  price: '100',
  description: 'Sample product description',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Product name is required'),
  price: yup.number().required('Price is required').positive('Price must be a positive number'),
  description: yup.string().required('Description is required'),
});

const Updateproduct = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      // Add the update product logic here
    },
  });

  return (
    <div className="update-product">
      <form onSubmit={formik.handleSubmit} className="update-product-form">
        <h2>Update Product</h2>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="button-group">
          <button type="submit">Update Product</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Updateproduct;
