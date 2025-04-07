import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { _faqs } from 'src/_mock/_courseDetails';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // 1 column on small screens
          md: 'repeat(2, 1fr)', // 2 columns on medium and larger screens
        },
        gap: 3, // Space between cards
        justifyItems: 'center', // Center the items
      }}
    >
      {_faqs.map((accordion) => (
        <Card
          key={accordion.id}
          sx={{
            width: '100%',
            maxWidth: 400, // Adjust max width as needed
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <CardContent>
            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="subtitle1">{accordion.heading}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                  {accordion.detail}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
