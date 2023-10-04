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
  TextContainer,
  TextInfo,
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
    <PageContainer className="page-container">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextContainer className="text-container">
            <Title className="title">Trimite-ne un mesaj</Title>
            <TextInfo className="text-info">
              Daca doresti sa ne trimiti sugestiile tale pentru a ne imbunatati
              serviciile, sau ai orice fel de nemultumiri, ori pur si simplu
              doresti sa iei legatura cu noi, te rugam sa completezi formularul
              de mai jos.
            </TextInfo>
          </TextContainer>
          <ContactFormContainer ref={form} onSubmit={sendEmail}>
            {/* <Title>Contact Me</Title> */}
            <InputContainer className="input-container">
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
            <SubmitButton className="submit-button" type="submit">
              Send Message
            </SubmitButton>
          </ContactFormContainer>
          <ContactInfoContainer className="contact-info-container">
            <ContactInfo className="contact-info">
              <h5>Email: oanacoacedulce@gmail.com</h5>
              <h5>Phone: (+40) 733983720</h5>
            </ContactInfo>
          </ContactInfoContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
