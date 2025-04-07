'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import FaqsHero from '../faqs-hero';
import FaqsList from '../faqs-list';

// ----------------------------------------------------------------------

export default function FaqsView() {
  return (
    <>
      <FaqsHero />

      <Container
        sx={{
          pb: 10,
          pt: { xs: 10, md: 15 },
          position: 'relative',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            my: { xs: 5, md: 10 },
            textAlign: 'center',
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box gap={5} display="flex" flexDirection="column" alignItems="center">
          <FaqsList />
        </Box>
      </Container>
    </>
  );
}
