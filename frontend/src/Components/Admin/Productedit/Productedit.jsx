import React, { useEffect, useState } from 'react';
import './Productedit.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../../../Services/AdminApi';

function Productedit() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    imageFile: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
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
      // .test('is-rupees', 'Price must start with ₹', value => value && value.startsWith('₹'))
      // .test('is-valid-amount', 'Price must be a valid positive number after ₹', value => {
      //   if (value) {
      //     const amount = value.slice(1);
      //     return !isNaN(amount) && Number(amount) > 0;
      //   }
      //   return false;
      // }),,
    ,category: yup.string().required('Category is required'),
    imageFile: yup.mixed().required('Image is required'),
  });

  const onSubmit = async (values) => {
    console.log(values);

    try {
      // const formData = new FormData();
      // formData.append('productName', values.productName);
      // formData.append('description', values.description);
      // formData.append('price', values.price.slice(1)); 
      // formData.append('category', values.category);
      // formData.append('imageFile', values.imageFile);

      const response = await updateProduct(productId, values);
      console.log('Product updated successfully:', response.data); 
      navigate('/admin/productlist');

      

    } catch (error) {
      console.error('Error updating product:', error.response ? error.response.data : error.message);
    }
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
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.productName && formik.errors.productName ? (
              <div className="error">{formik.errors.productName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
            {/* {formik.touched.description && formik.errors.description ? (
              <div className="error">{formik.errors.description}</div>
            ) : null} */}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="error">{formik.errors.price}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.category && formik.errors.category ? (
              <div className="error">{formik.errors.category}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="imageFile">Image</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              onChange={(event) => formik.setFieldValue("imageFile", event.currentTarget.files[0])}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imageFile && formik.errors.imageFile ? (
              <div className="error">{formik.errors.imageFile}</div>
            ) : null}
          </div>

          <button type="submit" className="edit-product-form-btn">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default Productedit;
