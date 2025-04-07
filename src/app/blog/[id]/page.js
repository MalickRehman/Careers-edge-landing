'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Link,
  Card,
  CardContent,
  useMediaQuery,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import { cardData } from 'src/_mock/_courseDetails';

const BlogDetails = ({ params }) => {
  const [headings, setHeadings] = useState([]);
  const blog = cardData.find((b) => b.id === params.id);
  const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  if (!blog) {
    return (
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>
        Blog not found
      </Typography>
    );
  }

  useEffect(() => {
    const contentElement = document.getElementById('blog-content');
    const headingElements = contentElement.querySelectorAll('h2, h3');
    const headingList = Array.from(headingElements).map((heading) => ({
      id: heading.innerText.toLowerCase().replace(/\s+/g, '-'),
      text: heading.innerText,
      level: heading.tagName.toLowerCase(),
    }));
    setHeadings(headingList);

    headingElements.forEach((heading) => {
      heading.id = heading.innerText.toLowerCase().replace(/\s+/g, '-');
    });
  }, [blog.content]);

  return (
    <Box sx={{ padding: { xs: '20px', md: '40px' }, backgroundColor: '#f9f9f9' }}>
      <Chip
        label={blog.category}
        icon={<CategoryIcon />}
        sx={{
          mb: 2,
          fontSize: '14px',
          fontWeight: 'bold',
          backgroundColor: '#e0e0e0',
          color: '#333',
        }}
      />
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        {blog.title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          alignItems: 'center',
          mb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            mb: { xs: 2, sm: 0 },
            justifyContent: { xs: 'flex-start', sm: 'flex-start' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3, mb: { xs: 1, sm: 0 } }}>
            <CalendarTodayIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />
            <Typography variant="body2" sx={{ color: '#999' }}>
              Published: {blog.date}
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              mr: 3,
              mb: { xs: 1, sm: 0 },
              whiteSpace: 'nowrap',
            }}
          >
            <CategoryIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />
            <Typography variant="body2" sx={{ color: '#999' }}>
              {blog.category}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, sm: 0 } }}>
            <PersonIcon sx={{ fontSize: '20px', mr: 1, color: '#999' }} />
            <Typography variant="body2" sx={{ color: '#999' }}>
              {blog.author}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: { xs: 2, sm: 0 },
            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
          }}
        >
          <Typography variant="body2" sx={{ mr: 2, color: '#333', fontWeight: 'bold' }}>
            Share
          </Typography>
          <IconButton aria-label="share on facebook" sx={{ color: '#4267B2' }}>
            <Facebook />
          </IconButton>
          <IconButton aria-label="share on twitter" sx={{ color: '#1DA1F2' }}>
            <Twitter />
          </IconButton>
          <IconButton aria-label="share on linkedin" sx={{ color: '#2867B2' }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <img
          src={blog.imageSrc}
          alt={blog.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: '40px' }}>
        <Box id="blog-content" sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {blog.content}
          </Typography>
        </Box>

        {isExtraLarge && (
          <Card variant="outlined" sx={{ width: '300px', position: 'sticky', top: '100px' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Table of Contents
              </Typography>
              <Box component="hr" sx={{ borderColor: '#ccc', mb: 2 }} />
              <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {headings.map((heading) => (
                  <Link
                    key={heading.id}
                    href={`#${heading.id}`}
                    sx={{
                      pl: heading.level === 'h3' ? 2 : 0,
                      fontWeight: heading.level === 'h2' ? 'bold' : 'normal',
                      textDecoration: 'none',
                      color: '#333',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {heading.text}
                  </Link>
                ))}
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

BlogDetails.propTypes = {
  params: PropTypes.object.isRequired,
};

export default BlogDetails;
