import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card, Button, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { coursesDetails } from 'src/_mock/_courseDetails';

const CourseDetails = ({ params }) => {
  const course = coursesDetails.find((c) => c.id === params.id);

  if (!course) {
    return <Typography variant="h4">Course not found</Typography>;
  }

  return (
    <div style={{ padding: '40px' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            display: 'flex',
            width: '100%',
            // height: 'auto',
            maxWidth: '1200px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'box-shadow 0.3s ease-in-out',
            overflow: 'hidden',
            borderRadius: '16px',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              flex: 1,
              // minHeight: '400px',
              height: '100%',
              position: 'relative',
              // maxWidth: '400px',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={course.image}
              alt={course.title}
              sx={{
                width: '100%',
                height: '100%',
                // maxWidth: '1200px',
                // objectFit: 'cover',
                borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              {course.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ mb: 2 }}>
              {course.category}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {course.description}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href={paths.enroll}
              sx={{ mt: 2, alignSelf: 'flex-start' }}
            >
              Enroll Now
            </Button>
          </Box>
        </Card>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '80px',
              height: '4px',
              backgroundColor: 'primary.main',
            },
          }}
        >
          <span style={{ color: 'lightgrey' }}>Course </span>
          <span style={{ color: 'dark' }}>Brief</span>
        </Typography>
        <Typography variant="body1" sx={{ mt: 4 }}>
          {course.brief}
        </Typography>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '80px',
              height: '4px',
              backgroundColor: 'primary.main',
            },
          }}
        >
          <span style={{ color: 'lightgrey' }}>You ll </span>
          <span style={{ color: 'dark' }}>Learn These Core Skills</span>
        </Typography>

        <Box sx={{ mt: 4 }}>
          {Array.isArray(course.schedule) &&
            course.schedule.map((module, index) => (
              <div key={index}>
                {typeof module === 'object' ? (
                  <Box sx={{ mb: 1 }}>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {module.topics?.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          style={{ listStyleType: 'disc', marginBottom: '10px' }}
                        >
                          <Typography variant="body2">
                            <span>{topic.title}</span>
                            <br />
                            <span>{topic.description}</span>
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                ) : (
                  <li key={index} style={{ listStyleType: 'disc', marginBottom: '10px' }}>
                    <Typography variant="body2">{module}</Typography>
                  </li>
                )}
              </div>
            ))}
        </Box>
      </Box>
    </div>
  );
};

CourseDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseDetails;
