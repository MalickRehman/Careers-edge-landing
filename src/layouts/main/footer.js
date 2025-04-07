import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Logo from 'src/components/logo';
import { paths } from 'src/routes/paths';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f2f0f0', pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
        <Logo sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              CareerEdge
            </Typography>
            <Typography variant="body1" gutterBottom>
              Unlock your potential and shape your future by mastering the IT skills that are
              driving today's world.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton href="#" aria-label="Twitter" color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" aria-label="Facebook" color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" aria-label="Google" color="inherit">
                <GoogleIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link
              href={paths.courses.root}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Courses
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Important Links
            </Typography>
            <Link
              href={paths.contact}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Contact Us
            </Link>
            <Link href={paths.about} underline="none" color="text.secondary" display="block" mb={1}>
              About Us
            </Link>
            <Link href={paths.blog} underline="none" color="text.secondary" display="block" mb={1}>
              Blog
            </Link>
            <Link href={paths.faqs} underline="none" color="text.secondary" display="block" mb={1}>
              FAQs
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href={paths.terms} underline="none" color="text.secondary" display="block" mb={1}>
              Terms and Conditions
            </Link>
            <Link
              href={paths.privacy}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Privacy Policy
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Link
              href={paths.facebook}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Facebook
            </Link>
            <Link
              href={paths.twitter}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Twitter
            </Link>
            <Link
              href={paths.googlePlus}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              Google Plus
            </Link>
            <Link
              href={paths.github}
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              GitHub
            </Link>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © 2018 Slick Inc. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
