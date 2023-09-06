// validationSchema.js

const yup = require('yup');

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  consent: yup.boolean().oneOf([true], 'Consent is required'),
});

module.exports = validationSchema; 
