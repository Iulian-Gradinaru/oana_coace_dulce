import { useRef } from 'react';

/**
 * Imports Material UI components
 */
import { Grid } from '@mui/material';

/**
 * Imports styled components
 */
import {
  PageContainer,
  ContactFormContainer,
  Title,
  Input,
  InputContainer,
  Textarea,
  SubmitButton,
  ContactInfo,
  ContactInfoContainer,
} from './Contact.styles';

/**
 * Imports service that allows you to create a predefined set of emails via the dashboard, and then just trigger the emails
 * from the code.
 */
import emailjs from '@emailjs/browser';

/**
 * Displays the component
 */
export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  /**
   * Handles the submission of an email form using the emailjs library
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the form reference is not null
    if (form.current !== null) {
      // Use emailjs to send the form data as an email
      emailjs
        .sendForm(
          'service_78ewlvg', // YOUR_SERVICE_ID
          'template_dc2js5l', // YOUR_TEMPLATE_ID
          form.current,
          'wddP52pR-sVl0NlQr' // YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    // Reset the form after submission
    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
  };

  return (
    <PageContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <ContactFormContainer ref={form} onSubmit={sendEmail}>
            <Title>Contact Me</Title>
            <InputContainer>
              <Input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
            </InputContainer>
            <Textarea placeholder="Your Message" name="message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactFormContainer>
          <ContactInfoContainer>
            <ContactInfo>
              <p>Email: bocanel.valerica92@gmail.com</p>
              <p>Phone: (+40) 741412636</p>
            </ContactInfo>
          </ContactInfoContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
