import { Resend } from 'resend';
import { render } from '@react-email/render';
import WelcomeTemplate from '../../../../emails/index';
import EnrollFormEmail from '../../../../emails/enrollment';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {
    email,
    userFirstname,
    subject,
    message,
    fullName,
    phone,
    dateOfBirth,
    address,
    course,
    education,
    referral,
    questions,
    agreement,
  } = await request.json();

  try {
    let emailContent;
    let emailSubject = subject || 'Thank you';

    if (fullName) {
      emailContent = render(
        EnrollFormEmail({
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
        })
      );
    } else {
      emailContent = render(WelcomeTemplate({ firstName: userFirstname, message, email, subject }));
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'saimtahir.910@gmail.com',
      subject: emailSubject,
      html: emailContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    const successMessage = fullName
      ? 'Email sent successfully for enrollment form'
      : 'Email sent successfully';

    return new Response(JSON.stringify({ message: successMessage }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
