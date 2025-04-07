import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeAdvertisement() {
  const theme = useTheme();

  const renderDescription = (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 5, typography: 'h2' }}
      >
        Subscribe to us!
      </Box>

      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 5, typography: 'body1' }}
      >
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >
        <m.div variants={varFade().inRight}>
          <Box
            component="input"
            type="text"
            placeholder="Enter your email"
            sx={{
              width: { xs: '100%', md: 300 },
              padding: '15px 20px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'grey.300',
              bgcolor: 'white',
              color: 'grey.800',
              '&:focus': {
                borderColor: theme.palette.primary.main,
              },
            }}
          />
        </m.div>

        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            sx={{
              color: 'grey.800',
              bgcolor: 'common.white',
            }}
          >
            Send
          </Button>
        </m.div>
      </Stack>
    </Box>
  );

  const renderImg = (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
      <Box
        component={m.img}
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        alt="rocket"
        src="/assets/images/home/rocket.webp"
        sx={{ maxWidth: 460 }}
      />
    </Stack>
  );

  return (
    <>
      <Container
        maxWidth="lg"
        component={MotionViewport}
        sx={{
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          padding: { xs: '0 16px', md: '0 24px' },
          marginTop: '50px',
        }}
      >
        <Stack
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            ...bgGradient({
              direction: '135deg',
              startColor: theme.palette.primary.main,
              endColor: theme.palette.primary.dark,
            }),
            borderRadius: 2,
            pb: { xs: 5, md: 0 },
          }}
        >
          {renderImg}

          {renderDescription}
        </Stack>
      </Container>
    </>
  );
}
