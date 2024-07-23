// import React from 'react';
// import './Productadd.css';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import PropTypes from 'prop-types'; // Import PropTypes for type checking
// import { productadd } from '../../../Services/AdminApi';
// import { toast } from 'react-toastify';

// function Productadd({ categories = [] }) { // Default categories to an empty array
//   const initialValues = {
//     productName: '',
//     description: '',
//     price: '',
//     category: '',
//     imageFile: null,
//   };

//   const validationSchema = yup.object().shape({
//     productName: yup.string().required('Product name is required'),
//     description: yup.string().required('Description is required').min(10, 'Minimum 10 letters needed'),
//     price: yup.string()
//       .required('Price is required')
//       .test('is-rupees', 'Price must start with ₹', value => value && value.startsWith('₹'))
//       .test('is-valid-amount', 'Price must be a valid positive number after ₹', value => {
//         if (value) {
//           const amount = value.slice(1);
//           return !isNaN(amount) && Number(amount) > 0;
//         }
//         return false;
//       }),
//     category: yup.string().required('Category is required'),
//     imageFile: yup.mixed().required('Image is required'),
//   });

//   const onSubmit = async (values) => {
//     try {
//       const formData = new FormData();
//       formData.append('productName', values.productName);
//       formData.append('description', values.description);
//       formData.append('price', values.price);
//       formData.append('category', values.category);
//       formData.append('imageFile', values.imageFile);

//       const response = await productadd(formData);
//       if (response.data.success) {
//         toast.success(response.data.message);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error('An error occurred while adding the product');
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit,
//   });

//   return (
//     <div className="product-add-container">
//       <div className="form-heading">
//         <h2>Add New Product</h2>
//       </div>
//       <div className="form-container-add">
//         <form onSubmit={formik.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="productName" className="form-label">Product Name</label>
//             <input
//               type="text"
//               id="productName"
//               name="productName"
//               className="form-control"
//               value={formik.values.productName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.productName && formik.errors.productName ? (
//               <div className="form-error">{formik.errors.productName}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="description" className="form-label">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               className="form-control"
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.description && formik.errors.description ? (
//               <div className="form-error">{formik.errors.description}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="price" className="form-label">Price</label>
//             <input
//               type="text"
//               id="price"
//               name="price"
//               className="form-control"
//               value={formik.values.price}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.price && formik.errors.price ? (
//               <div className="form-error">{formik.errors.price}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="category" className="form-label">Category</label>
//             <select
//               id="category"
//               name="category"
//               className="form-control"
//               value={formik.values.category}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             >
//               <option value="" label="Select category" />
//               {categories.length > 0 ? (
//                 categories.map((category) => (
//                   <option key={category} value={category}>{category}</option>
//                 ))
//               ) : (
//                 <option value="" label="No categories available" />
//               )}
//             </select>
//             {formik.touched.category && formik.errors.category ? (
//               <div className="form-error">{formik.errors.category}</div>
//             ) : null}
//           </div>

//           <div className="form-group">
//             <label htmlFor="imageFile" className="form-label">Image</label>
//             <input
//               type="file"
//               id="imageFile"
//               name="imageFile"
//               className="form-control"
//               onChange={(event) => {
//                 formik.setFieldValue("imageFile", event.currentTarget.files[0]);
//               }}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.imageFile && formik.errors.imageFile ? (
//               <div className="form-error">{formik.errors.imageFile}</div>
//             ) : null}
//           </div>

//           <button type="submit" className="form-btn">Add Product</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// Productadd.propTypes = {
//   categories: PropTypes.array,
// };

// export default Productadd;


import React from 'react';
import './Productadd.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { productadd } from '../../../Services/AdminApi'; // Add this import
import { toast } from 'react-toastify';

function Productadd() {
  const initialValues = {
    productName: '',
    description: '',
    price: '',
    category: '',
    imageFile: null,
  };

  const validationSchema = yup.object().shape({
    productName: yup.string().required('Product name is required'),
    description: yup.string().required('Description is required').min(10, "Minimum 10 letters needed"),
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

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append('productName', values.productName);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('category', values.category);
      formData.append('imageFile', values.imageFile);

      const response = await productadd(formData);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while adding the product');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="product-add-container">
      <div className="form-heading">
        <h2>Add New Product</h2>
      </div>
      <div className="form-container-add">
        <form onSubmit={formik.handleSubmit}>
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
              <div className="form-error">{formik.errors.productName}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="form-error">{formik.errors.description}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              className="form-control"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="form-error">{formik.errors.price}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              name="category"
              className="form-control"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Select category" />
              <option value="apple" label="Apple" />
              <option value="android" label="Android" />
            </select>
            {formik.touched.category && formik.errors.category ? (
              <div className="form-error">{formik.errors.category}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="imageFile" className="form-label">Image</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              className="form-control"
              onChange={(event) => {
                formik.setFieldValue("imageFile", event.currentTarget.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imageFile && formik.errors.imageFile ? (
              <div className="form-error">{formik.errors.imageFile}</div>
            ) : null}
          </div>

          <button type="submit" className="form-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default Productadd;
