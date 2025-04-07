import React from 'react';
import { m } from 'framer-motion';
import { Form, Field, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import {
  Box,
  Grid,
  Button,
  MenuItem,
  Checkbox,
  TextField,
  Container,
  Typography,
  FormControlLabel,
} from '@mui/material';

import { varFade } from 'src/components/animate';

import validationSchema from './formvalidation';

const courses = ['Web Development', 'Data Science', 'Graphic Design'];
const educationLevels = ['High School', 'Associate Degree', "Bachelor's Degree", "Master's Degree"];

const EnrollForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Enrollment successful!');
        resetForm();
      } else {
        toast.error(result.error || 'Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 3 }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Enrollment <span style={{ color: 'orange' }}>Form</span>
          </Typography>
        </m.div>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            address: '',
            course: '',
            education: '',
            referral: '',
            questions: '',
            agreement: false,
            captcha: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors, isSubmitting }) => (
            <Form>
              <Grid container spacing={2} sx={{ marginTop: '15px' }}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    variant="outlined"
                    type="tel"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Address"
                    name="address"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Select Course"
                    name="course"
                    select
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.course && Boolean(errors.course)}
                    helperText={touched.course && errors.course}
                  >
                    {courses.map((course, index) => (
                      <MenuItem key={index} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Highest Level of Education"
                    name="education"
                    select
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {educationLevels.map((level, index) => (
                      <MenuItem key={index} value={level}>
                        {level}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="How Did You Hear About Us?"
                    name="referral"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Questions or Comments"
                    name="questions"
                    variant="outlined"
                    multiline
                    rows={4}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Field
                        as={Checkbox}
                        name="agreement"
                        color="primary"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    }
                    label="I agree to the terms and conditions"
                  />
                  {touched.agreement && Boolean(errors.agreement) && (
                    <Typography color="error">{errors.agreement}</Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <ReCAPTCHA
                    sitekey="6LfLqFMqAAAAAFzYI_DITORXoU608xxTakzHVOhy"
                    onChange={(value) => handleChange({ target: { name: 'captcha', value } })}
                  />
                  {touched.captcha && !values.captcha && (
                    <Typography color="error">Please complete the CAPTCHA</Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    sx={{ width: '150px', height: '50px', marginBottom: '10px' }}
                  >
                    Enroll Now
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <ToastContainer />
      </Box>
    </Container>
  );
};

export default EnrollForm;
