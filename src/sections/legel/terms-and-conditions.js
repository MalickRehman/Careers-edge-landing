// pages/terms.js

import { Box, Container, Typography } from '@mui/material';

export const TermsAndConditions = () => (
  <Container maxWidth="md" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Terms and Conditions
    </Typography>
    <Typography variant="body1" paragraph>
      Welcome to Career Edge! By using this website, you agree to comply with and be bound by the
      following terms and conditions...
    </Typography>

    <Box>
      <Typography variant="h6" gutterBottom>
        Use of the Website
      </Typography>
      <Typography variant="body1" paragraph>
        The content of the pages of this website is for your general information and use only...
      </Typography>
    </Box>

    <Box>
      <Typography variant="h6" gutterBottom>
        Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All materials, content, and intellectual property on this website are owned by or licensed
        to Career Edge...
      </Typography>
    </Box>

    <Box>
      <Typography variant="h6" gutterBottom>
        Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        Career Edge does not guarantee that the website will be error-free...
      </Typography>
    </Box>
  </Container>
);
