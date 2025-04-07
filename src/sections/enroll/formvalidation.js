import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  dateOfBirth: Yup.date(),
  address: Yup.string(),
  course: Yup.string().required('Please select a course'),
  education: Yup.string(),
  referral: Yup.string(),
  agreement: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

export default validationSchema;
