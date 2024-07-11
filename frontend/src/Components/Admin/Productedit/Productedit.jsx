import React, { useEffect } from 'react';
import './Productedit.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Productedit() {
  const { productId } = useParams();
  const [initialValues, setInitialValues] = React.useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    imageFile: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/admin/product/${productId}`);
        const product = response.data.product;
        setInitialValues({
          productName: product.productName,
          description: product.description,
          price: `₹${product.price}`,
          category: product.category,
          imageFile: null,
        });
      } catch (error) {
        console.error('Error fetching product data', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const validationSchema = yup.object().shape({
    productName: yup.string().required('Product name is required'),
    description: yup.string()
      .required('Description is required')
      .min(10, 'Minimum 10 letters needed'),
    price: yup.string()
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
    enableReinitialize: true,
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

          <button type="submit" className="edit-product-form-btn">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default Productedit;
