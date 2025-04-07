// pages/privacy.js

import { Box, Container, Typography } from '@mui/material';

export const PrivacyPolicy = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Privacy Policy
    </Typography>
    <Typography variant="body1" paragraph>
      Career Edge is committed to protecting your privacy. This privacy policy explains how we
      collect, use, and protect your personal information...
    </Typography>

    <Box>
      <Typography variant="h6" gutterBottom>
        Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We may collect personal information such as your name, email address, and contact details
        when you register on our site...
      </Typography>
    </Box>

    <Box>
      <Typography variant="h6" gutterBottom>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        To personalize your experience and respond to your individual needs...
      </Typography>
    </Box>

    <Box>
      <Typography variant="h6" gutterBottom>
        Security
      </Typography>
      <Typography variant="body1" paragraph>
        We implement various security measures to protect your personal information...
      </Typography>
    </Box>

    <Box>
      <Typography variant="h6" gutterBottom>
        Third-Party Disclosure
      </Typography>
      <Typography variant="body1" paragraph>
        We do not sell, trade, or otherwise transfer your personally identifiable information to
        outside parties...
      </Typography>
    </Box>
  </Container>
);
