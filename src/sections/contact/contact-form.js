import { m } from 'framer-motion';
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { varFade, MotionViewport } from 'src/components/animate';

import contactFormValidationSchema from './contactFormValidationSchema';

export default function ContactForm() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: contactFormValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            userFirstname: values.name,
            subject: values.subject,
            message: values.message,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          alert(result.message || 'Message sent successfully');
          formik.resetForm();
        } else {
          const result = await response.json();
          alert(result.error || 'Failed to send message');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    },
  });

  return (
    <Grid container spacing={5} component={MotionViewport}>
      <Grid item xs={12} md={7}>
        <Paper elevation={3} sx={{ padding: 3, borderRadius: '20px' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            LETS GET IN TOUCH
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <m.div variants={varFade().inUp}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      placeholder="YOUR NAME..."
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      placeholder="YOUR EMAIL..."
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Subject"
                      placeholder="SUBJECT..."
                      name="subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.subject && Boolean(formik.errors.subject)}
                      helperText={formik.touched.subject && formik.errors.subject}
                      required
                    />
                  </Grid>
                </Grid>
              </m.div>

              <m.div variants={varFade().inUp}>
                <TextField
                  fullWidth
                  label="Message"
                  placeholder="YOUR MESSAGE..."
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  multiline
                  rows={4}
                  required
                />
              </m.div>

              <m.div variants={varFade().inUp}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  type="submit"
                  sx={{
                    borderRadius: '50px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Send Message Now
                </Button>
              </m.div>
            </Stack>
          </form>
        </Paper>
      </Grid>

      <Grid item xs={12} md={5}>
        <Paper
          elevation={3}
          sx={{
            ...bgGradient({
              color: alpha(theme.palette.primary.main, 0.8),
              imgUrl: '/assets/images/contact/gradient-bg.jpg',
            }),
            backgroundColor: '#212b36',
            padding: 3,
            color: 'white',
            borderRadius: '20px',
          }}
        >
          <Stack spacing={4}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Phone Number
              </Typography>
              <Typography variant="body2">010-020-0340</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Email Address
              </Typography>
              <Typography variant="body2">info@meeting.edu</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography variant="body2">Chen one road Faisalabad</Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Website URL
              </Typography>
              <Typography variant="body2">www.meeting.edu</Typography>
            </Box>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
