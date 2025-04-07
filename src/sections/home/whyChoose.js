import React from 'react';
import { m } from 'framer-motion';

import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Container, Typography, CardContent } from '@mui/material';

import { cardsData } from 'src/_mock/_courseDetails';

import { varFade } from 'src/components/animate';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '85%',
  height: '300px',
  padding: '5px',
  textAlign: 'center',
  marginLeft: '50px',
  marginTop: '50px',
  borderRadius: '10px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const IconWrapper = styled('div')({
  backgroundColor: 'orange',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '15px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  overflow: 'visible',
});

const WhyChooseUs = () => (
  <Container
    maxWidth="lg"
    sx={{
      textAlign: 'center',
      width: '100%',
      position: 'relative',
      padding: { xs: '0 16px', md: '0 24px' },
      marginTop: '50px',
    }}
  >
    <Box sx={{ width: '100%', marginTop: '50px', margin: '0 auto' }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="h2" sx={{ marginBottom: '0' }}>
          Why Choose <span style={{ color: 'orange' }}>CareerEdge?</span>
        </Typography>
      </m.div>
      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <StyledCard>
              <IconWrapper>
                <img src={card.icon} alt={card.title} style={{ width: '50px', height: '50px' }} />
              </IconWrapper>
              <CardContent
                sx={{
                  flexGrow: 1,
                  marginTop: { xs: '85px', lg: '120px', md: '100px' },
                }}
              >
                <Typography variant="h6" component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default WhyChooseUs;
