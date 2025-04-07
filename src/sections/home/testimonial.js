import React from 'react';
import Slider from 'react-slick';
import IconButton from '@mui/material/IconButton';
import { m } from 'framer-motion';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { varFade } from 'src/components/animate';
import { testimonials } from 'src/_mock/_courseDetails';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        bottom: -40,
        right: 'calc(50% - 50px)',
        zIndex: 1,
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        bottom: -40,
        left: 'calc(50% - 70px)',
        zIndex: 1,
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      <ArrowBackIosIcon sx={{ fontSize: 20 }} />
    </IconButton>
  );
};

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography variant="h2" sx={{ marginBottom: '24px' }}>
          Testimonial <span style={{ color: 'orange' }}></span>
        </Typography>
      </m.div>

      <Box sx={{ mt: 1, position: 'relative' }}>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={10} lg={12}>
                  <Card elevation={0} sx={{ textAlign: 'center', padding: 3, boxShadow: 'none' }}>
                    <CardContent>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        sx={{
                          flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                        }}
                      >
                        <Grid item xs={12} sm={3} lg={3}>
                          <Avatar
                            alt={testimonial.name}
                            src={testimonial.avatar}
                            sx={{ width: 80, height: 80, mx: 'auto', mb: { xs: 2, md: 2, lg: 0 } }}
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={9}
                          lg={9}
                          sx={{ textAlign: { xs: 'center', md: 'center', lg: 'left' } }}
                        >
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {testimonial.heading}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontStyle: 'italic',
                              mb: 2,
                              fontSize: {
                                xs: '0.875rem',
                                sm: '0.875rem',
                                md: '1rem',
                              },
                              lineHeight: { xs: '1.4', sm: '1.6', md: '1.8', lg: '1.5' },
                              maxWidth: { xs: '100%', sm: '95%', md: '85%', lg: '100%' },
                              mx: 'auto',
                            }}
                          >
                            "{testimonial.para}"
                          </Typography>

                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#6a5acd' }}>
                            {testimonial.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Testimonial;
