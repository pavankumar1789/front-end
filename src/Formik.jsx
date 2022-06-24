// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// class App extends React.Component {
    
//     validationSchema() {
//       return Yup.object().shape({
//         name: Yup.string().required('Fullname is required'),
//         email: Yup.string()
//           .required('Email is required')
//           .email('Email is invalid'),
//           address: Yup.string()
//           .required('Address is required')
//           .min(6, 'Address must be at least 6 characters')
//           .max(20, 'Address must not exceed 20 characters'),
//         contact:
//         password: Yup.string()
//           .required('Password is required')
//           .min(6, 'Password must be at least 6 characters')
//           .max(40, 'Password must not exceed 40 characters'),
//         confirmPassword: Yup.string()
//           .required('Confirm Password is required')
//           .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
//       });
//     }

//   }