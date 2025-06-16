'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactMap from '../contact-map';
import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';

export default function ContactView() {
  return (
    <>
      <ContactHero />

      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          gap={10}
          display="grid"
          sx={{
            mt: { xs: 5, md: 10 },
            mb: { xs: 10, md: 15 },
            px: { xs: 2, md: 0 },
          }}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
          }}
          gridTemplateRows={{
            md: 'auto auto',
          }}
        >
          <ContactMap location="Faisalabad, Pakistan" />

          <ContactForm />
        </Box>
      </Container>
    </>
  );
}
