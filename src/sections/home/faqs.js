import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Iconify from 'src/components/iconify';
import { _faqs } from 'src/_mock/_courseDetails';
import { useRouter } from 'src/routes/hooks';

const Faqs = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleNavigate = () => {
    router.push('/faqs');
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        width: '100%',
        height: 'auto',
        mt: { xs: 6, md: 6 },
        position: 'relative',
        paddingX: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 2, md: 4 },
          p: { xs: 2, md: 3 },
        }}
      >
        <Box sx={{ textAlign: 'left', mt: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '40px', md: '60px', lg: '50px' },
              lineHeight: { xs: '1.2', md: '1.1' },
            }}
          >
            Explore Our FAQs: Your Questions,{' '}
            <span style={{ color: '#0052A5' }}>Our Expertise</span>.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontSize: { xs: '18px', md: '22px' },
            }}
          >
            Have some questions before you get started? Check out our FAQs or let’s talk :)
          </Typography>
          <Button
            variant="outlined"
            onClick={handleNavigate}
            color="primary"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              fontSize: { xs: '1rem', md: '1.1rem' },
              padding: { xs: '0.5rem 1rem', md: '0.75rem 1.5rem' },
              '&:hover': {
                backgroundColor: '#002D62',
                color: '#fff',
              },
            }}
            endIcon={<Iconify icon="eva:arrow-forward-fill" />}
          >
            View all FAQs
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 0,
          }}
        >
          {_faqs.slice(0, 4).map((accordion, index) => (
            <Accordion
              key={accordion.id}
              expanded={expanded === accordion.id}
              onChange={handleChange(accordion.id)}
              sx={{
                border: 'none',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IconButton>
                    {expanded === accordion.id ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                }
                sx={{
                  minHeight: { xs: 60, md: 80 },
                  alignItems: 'center',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                  {accordion.heading}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                  {accordion.detail}
                </Typography>
              </AccordionDetails>
              {index < 3 && <Divider sx={{ my: { xs: 0.5, md: 1 } }} />}
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Faqs;
