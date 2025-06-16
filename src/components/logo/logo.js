import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Montserrat } from 'next/font/google';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <Box component="span" sx={{display: 'flex', alignItems: 'center', gap: 2, ...sx}} {...other}>
      <Box
        component="img"
        src="/assets/images/home/hero/careeredge-logo.svg"
        sx={{ width: 55, height: 55, cursor: 'pointer' }}
      />
      <Box component="span" className={montserrat.className} sx={{ fontSize: 18, fontWeight: 700, fontStyle: "italic", letterSpacing: "0.05em", color: "#0052a5" }}>CAREER EDGE</Box>
    </Box>
  );

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
