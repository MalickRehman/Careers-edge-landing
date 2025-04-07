/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

import Stack from '@mui/material/Stack';
import { Box, Card, Button, Container, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { coursesDetails } from 'src/_mock/_courseDetails';

import { varFade } from 'src/components/animate';

import './courses.css';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CoursesCarousel() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/courses');
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
      <div className="text-section">
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
            ml: { xs: 5 },
            pt: 12,
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Elevate Your Skills
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Most Popular <span style={{ color: 'orange' }}>Courses</span>
            </Typography>
          </m.div>

          <Typography
            variant="body1"
            sx={{
              mx: 'auto',
              fontSize: {
                xs: '0.875rem',
                sm: '0.875rem',
                md: '1rem',
                lg: '1.2rem',
              },

              maxWidth: '600px',
            }}
          >
            Whether you prefer the convenience of learning from home or the advantages of direct
            sessions on campus with our expert instructors, we have got you covered!
          </Typography>
        </Stack>
      </div>
      <Slider {...sliderSettings}>
        {coursesDetails.map((course, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ p: 2 }}>
              <Card sx={{ textAlign: 'center', height: '400px' }}>
                <Box
                  component="img"
                  src={course.image}
                  alt={course.title}
                  sx={{ width: '420px', height: '200px', borderRadius: '12px 12px 0 0' }}
                />
                <Typography variant="h5" sx={{ mt: 2 }}>
                  {course.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mt: 1 }}>{course.category}</Typography>
                <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                  {course.duration} | {course.format}
                </Typography>
                <Link href={`/courses/${course.id}`} passHref>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      color: 'primary.main',
                      mt: 2,
                      borderColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: '#ffa500',
                        color: '#fff',
                      },
                    }}
                  >
                    More Details
                  </Button>
                </Link>
              </Card>
            </Box>
          </m.div>
        ))}
      </Slider>
      <Stack
        spacing={2}
        sx={{
          textAlign: 'center',
          mt: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleNavigate}
          sx={{
            mt: 3,
            fontSize: '1.25rem',
            padding: '10px 20px',
          }}
        >
          <HiArrowRight size={20} style={{ marginRight: '4px' }} />
          Browse All Courses
        </Button>
      </Stack>
    </Container>
  );
}
