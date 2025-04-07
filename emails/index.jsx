/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  Hr,
  Img,
  Body,
  Head,
  Text,
  Html,
  Button,
  Section,
  Container,
} from '@react-email/components';

export const KoalaWelcomeEmail = ({ firstName, subject, message }) => (
  <Html>
    <Head />

    <Body style={main}>
      <Container style={container}>
        <Img
          // eslint-disable-next-line react/jsx-curly-brace-presence
          src={`https://your_company_logo_url_here`}
          width="100"
          height="auto"
          alt="Company Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Thank you for reaching out to us regarding{subject ? ` "${subject}"` : ' your inquiry'}.
          We have received your message and our team will get back to you as soon as possible.
        </Text>
        <Section style={messageContainer}>
          <Text style={paragraph}>
            <strong>Your Message:</strong>
          </Text>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Section style={btnContainer}>
          <Button style={button} href="https://yourwebsite.com">
            Visit Our Website
          </Button>
        </Section>
        <Text style={paragraph}>
          Best regards,
          <br />
          The Support Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>408 Warren Rd - San Mateo, CA 94402</Text>
      </Container>
    </Body>
  </Html>
);
export default KoalaWelcomeEmail;

const main = {
  backgroundColor: '#f4f4f4',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  color: '#333',
};

const container = {
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  maxWidth: '600px',
};

const logo = {
  display: 'block',
  margin: '0 auto 20px',
};

const greeting = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
};

const messageContainer = {
  backgroundColor: '#f9f9f9',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '20px',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '1.5',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '10px',
  backgroundColor: '#ffffff',
};

const btnContainer = {
  textAlign: 'center',
  marginBottom: '20px',
};

const button = {
  backgroundColor: '#007BFF',
  borderRadius: '5px',
  color: '#ffffff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '10px 20px',
};

const hr = {
  borderColor: '#e0e0e0',
  margin: '20px 0',
};

const footer = {
  color: '#888888',
  fontSize: '12px',
  textAlign: 'center',
};
