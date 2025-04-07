import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { useRouter } from 'src/routes/hooks';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { cardData } from 'src/_mock/_courseDetails';
import { m } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { varFade } from 'src/components/animate';
import Stack from '@mui/material/Stack';

const Blog = () => {
  const router = useRouter();
  const handleNav = (id) => {
    router.push(`/blog/${id}`);
  };

  const handleNavigate = () => {
    router.push('/blog');
  };
  return (
    <>
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
              Blogs
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              Explore Our Latest <span style={{ color: 'orange' }}>Blogs</span>
            </Typography>
          </m.div>
        </Stack>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '1100px' }}>
          {cardData.slice(0, 3).map((card) => (
            <Grid
              key={card.id}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '345px',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '400px',
                  justifyContent: 'space-between',
                }}
              >
                <CardMedia
                  component="img"
                  height="170"
                  image={card.imageSrc}
                  alt={card.title}
                  sx={{ borderRadius: '12px 12px 0 0' }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <ArrowForwardIcon
                      sx={{ color: '#1976d2', ml: 1, cursor: 'pointer' }}
                      onClick={() => handleNav(card.id)}
                    />
                  </Box>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
                      {card.description}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="caption" color="text.secondary">
                        Date: {card.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Category: {card.category}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack
        spacing={2}
        sx={{
          textAlign: 'center',
          mb: 5,

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="outlined"
          onClick={handleNavigate}
          sx={{
            mt: 3,
            fontSize: '1.25rem',
            padding: '10px 20px',
          }}
        >
          <HiArrowRight size={20} style={{ marginRight: '4px' }} />
          See all
        </Button>
      </Stack>
    </>
  );
};

export default Blog;
