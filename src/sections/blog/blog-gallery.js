import React from 'react';
import { m } from 'framer-motion';

import {
  Box,
  Grid,
  Card,
  Stack,
  Avatar,
  Divider,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { cardData } from 'src/_mock/_courseDetails';

import { varFade } from 'src/components/animate';

const BlogGallery = () => {
  const router = useRouter();
  const featuredArticle = cardData[0];
  const popularArticles = cardData.slice(1, 4);
  const latestArticles = cardData.slice(4, 10);

  const handleCardClick = (blogId) => {
    router.push(`/blog/${blogId}`);
  };

  return (
    <div style={{ padding: '0px', maxWidth: '85%', margin: '0 auto' }}>
      <div className="text-section">
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 2, md: 2 },
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
              Explore Our <span style={{ color: 'orange' }}>Blogs</span>
            </Typography>
          </m.div>
        </Stack>
      </div>
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: { xs: '100%', md: '100%', lg: '100%' }, margin: '0 auto', px: 2 }}
      >
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            FEATURED ARTICLES
          </Typography>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              borderRadius: '12px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleCardClick(featuredArticle.id)}
          >
            <CardMedia
              component="img"
              height="350"
              image={featuredArticle.imageSrc}
              alt={featuredArticle.title}
              sx={{ borderRadius: '12px 12px 0 0' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {featuredArticle.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {featuredArticle.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                  Date: {featuredArticle.date}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Category: {featuredArticle.category}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 2, marginTop: { xs: '50px', lg: '0px' } }}
          >
            MOST POPULAR
          </Typography>
          <Stack spacing={2}>
            {popularArticles.map((blog) => (
              <Card
                key={blog.id}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row-reverse' },
                  height: { xs: 'auto', sm: '150px' },
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  cursor: 'pointer',
                }}
                onClick={() => handleCardClick(blog.id)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', sm: '35%', lg: 200 },
                    height: { xs: 'auto', sm: '100%' },
                    borderRadius: { xs: '12px 12px 0 0', sm: '0 12px 12px 0' },
                  }}
                  image={blog.imageSrc}
                  alt={blog.title}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="caption" color="text.secondary">
                      Date: {blog.date}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
      <div style={{ marginTop: '50px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', ml: 16, mt: 8 }}>
          LATEST ARTICLES
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ maxWidth: { xs: '100%', md: '100%', lg: '100%' }, margin: '0 auto', px: 2 }}
        >
          {latestArticles.map((blog) => (
            <Grid item xs={12} key={blog.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row-reverse' },
                  borderRadius: '12px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  height: { xs: 'auto', sm: '250px' },
                  cursor: 'pointer',
                }}
                onClick={() => handleCardClick(blog.id)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', sm: '35%' },
                    height: { xs: '200px', sm: '100%' },
                    borderRadius: { xs: '12px 12px 0 0', sm: '12px 0 0 12px' },
                  }}
                  image={blog.imageSrc}
                  alt={blog.title}
                />
                <CardContent sx={{ flex: 1, padding: '16px' }}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="caption" color="text.secondary">
                      {blog.category}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {blog.date}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.description}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={3}>
                    <Avatar
                      src={blog.authorImage}
                      alt={blog.author}
                      sx={{ width: 40, height: 40, marginRight: '8px' }}
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {blog.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.authorRole}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BlogGallery;
