import welcomeRight from '../../assets/products/Tort_RedVelvet_3.jpg';

import {
  ContactInfo,
  ContactInfoContainer,
  Container,
  ImageGrid,
  Image,
  TextInfo,
  Title,
  TextContainer,
} from './Information.styles';

export const Information = () => {
  return (
    <Container className="container">
      <TextContainer className="text-container">
        <Title className="title">Cum comand?</Title>
        <TextInfo className="text-info">
          Comenzile pentru torturile simple se pot plasa telefonic, pentru
          torturile mai speciale este nevoie sa plasati comanda in una din
          locatiile noastre (se percepe avans).
        </TextInfo>

        <ImageGrid className="image-grid" item xs={12} md={6}>
          <Image className="image" src={welcomeRight} alt="" />
          <Image className="image" src={welcomeRight} alt="" />
        </ImageGrid>
        <ContactInfoContainer className="contact-info-container">
          <ContactInfo className="contact-info">
            <h5>Email: oanacoacedulce@gmail.com</h5>
            <h5>Phone: (+40) 733983720</h5>
          </ContactInfo>
        </ContactInfoContainer>
      </TextContainer>
    </Container>
  );
};
