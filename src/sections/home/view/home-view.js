'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import Blog from '../blog';
import Faqs from '../faqs';
import HomeHero from '../home-hero';
import WhyChooseUs from '../whyChoose';
import HomeMinimal from '../homeCourses';
import Testimonial from '../testimonial';
import HomeAdvertisement from '../home-advertisement';

// eslint-disable-next-line no-unused-vars
const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            width: '100%',
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: { xs: '0 16px', md: '0 24px' },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <WhyChooseUs />
          <HomeMinimal />
          {/* <Testimonial /> */}
          {/* <Blog /> */}
          <Faqs />
          <HomeAdvertisement />
        </Container>
      </Box>
    </MainLayout>
  );
}
