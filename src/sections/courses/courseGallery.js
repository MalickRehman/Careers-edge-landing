/* eslint-disable react/prop-types */
import Link from 'next/link';
import { m } from 'framer-motion';
import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Box, Card, Button, Container, Typography } from '@mui/material';

import { coursesDetails } from 'src/_mock/_courseDetails';

import { varFade } from 'src/components/animate';

export default function CoursesGallery() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        width: '85%',
        position: 'relative',
        padding: { xs: '0 16px', md: '0 24px' },
        marginTop: '50px',
      }}
    >
      <div className="text-section">
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
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
              Explore Our <span style={{ color: 'orange' }}>Courses</span>
            </Typography>
          </m.div>

          <Typography
            variant="body1"
            sx={{
              mx: 'auto',
              maxWidth: '600px',
            }}
          >
            Discover a wide range of courses to enhance your knowledge and skills. Click on a course
            to explore more details.
          </Typography>
        </Stack>
      </div>

      <Grid container spacing={4} justifyContent="center">
        {coursesDetails.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(course)}
            >
              <Box sx={{ p: 2 }}>
                <Card
                  sx={{
                    textAlign: 'center',

                    cursor: 'pointer',
                    boxShadow: selectedCourse === course ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
                    transition: 'box-shadow 0.3s ease-in-out',
                  }}
                >
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
                  <Link href={`/courses/${course?.id}`} passHref>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        mt: 2,
                        color: 'primary.main',
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
