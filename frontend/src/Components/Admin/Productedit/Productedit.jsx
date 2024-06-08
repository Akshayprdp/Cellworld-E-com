import React from 'react';
import './Productedit.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Productedit() {
  const initialValues = {
    productName: '',
    description: '',
    price: '',
    category: '',
    imageFile: null,
  };

  const validationSchema = yup.object().shape({
    productName: yup.string().required('Product name is required'),
    description: yup.string()
      .required('Description is required')
      .min(10, 'Minimum 10 letters needed'),
    price: yup.string()  // Change from number to string
      .required('Price is required')
      .test('is-rupees', 'Price must start with ₹', value => value && value.startsWith('₹'))
      .test('is-valid-amount', 'Price must be a valid positive number after ₹', value => {
        if (value) {
          const amount = value.slice(1);
          return !isNaN(amount) && Number(amount) > 0;
        }
        return false;
      }),
    category: yup.string().required('Category is required'),
    imageFile: yup.mixed().required('Image is required'),
  });
  

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="edit-product-container">
      <div className="edit-product-form-heading">
        <h2>Edit Product</h2>
      </div>
      <div className="edit-product-form-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="edit-product-form-group">
            <label htmlFor="productName" className="edit-product-form-label">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="edit-product-form-control"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productName && formik.errors.productName ? (
              <div className="edit-product-form-error">{formik.errors.productName}</div>
            ) : null}
          </div>

          <div className="edit-product-form-group">
            <label htmlFor="description" className="edit-product-form-label">Description</label>
            <textarea
              id="description"
              name="description"
              className="edit-product-form-control"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="edit-product-form-error">{formik.errors.description}</div>
            ) : null}
          </div>

          <div className="edit-product-form-group">
            <label htmlFor="price" className="edit-product-form-label">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              className="edit-product-form-control"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="edit-product-form-error">{formik.errors.price}</div>
            ) : null}
          </div>

          <div className="edit-product-form-group">
            <label htmlFor="category" className="edit-product-form-label">Category</label>
            <select
              id="category"
              name="category"
              className="edit-product-form-control"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select category" />
              <option value="apple" label="Apple" />
              <option value="android" label="Android" />
            </select>
            {formik.touched.category && formik.errors.category ? (
              <div className="edit-product-form-error">{formik.errors.category}</div>
            ) : null}
          </div>

          <div className="edit-product-form-group">
            <label htmlFor="imageFile" className="edit-product-form-label">Image</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              className="edit-product-form-control"
              onChange={(event) => {
                formik.setFieldValue("imageFile", event.currentTarget.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imageFile && formik.errors.imageFile ? (
              <div className="edit-product-form-error">{formik.errors.imageFile}</div>
            ) : null}
          </div>

          <button type="submit" className="edit-product-form-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default Productedit;
