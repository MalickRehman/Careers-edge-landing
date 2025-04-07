/* eslint-disable react/prop-types */
import { Body, Head, Html, Text, Heading, Section, Container } from '@react-email/components';

const main = {
  backgroundColor: '#f6f6f6',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const text = {
  fontSize: '16px',
  color: '#555',
  lineHeight: '24px',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

export default function EnrollFormEmail({
  fullName,
  email,
  phone,
  dateOfBirth,
  address,
  course,
  education,
  referral,
  questions,
  agreement,
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={heading}>New Enrollment Form Submission</Heading>
          </Section>

          <Section>
            <Text style={sectionTitle}>Personal Information</Text>
            <Text style={text}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Date of Birth:</strong> {dateOfBirth}
            </Text>
            <Text style={text}>
              <strong>Address:</strong> {address}
            </Text>
          </Section>

          <Section>
            <Text style={sectionTitle}>Enrollment Details</Text>
            <Text style={text}>
              <strong>Course Selected:</strong> {course}
            </Text>
            <Text style={text}>
              <strong>Education Level:</strong> {education}
            </Text>
            <Text style={text}>
              <strong>Referral Source:</strong> {referral}
            </Text>
          </Section>

          <Section>
            <Text style={sectionTitle}>Additional Questions or Comments</Text>
            <Text style={text}>{questions || 'None'}</Text>
          </Section>

          <Section>
            <Text style={sectionTitle}>Agreement</Text>
            <Text style={text}>
              <strong>Agreed to Terms:</strong> {agreement ? 'Yes' : 'No'}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
