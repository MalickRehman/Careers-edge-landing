import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#E0E0E0',
}));

export default function ContactMap({ location = 'Faisalabad, Pakistan' }) {
  return (
    <StyledRoot>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        style={{ border: 0, pointerEvents: 'none' }}
        src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(
          location
        )}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
      />
    </StyledRoot>
  );
}

ContactMap.propTypes = {
  location: PropTypes.string,
};
