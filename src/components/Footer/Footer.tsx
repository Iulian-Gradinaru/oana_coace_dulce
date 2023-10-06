/**
 * Imports library
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Imports Icons from library fortawesome/free-brands-svg-icons
 */
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import logo from '../../assets/products/logo.jpg';

/**
 * Imports Icons from library fortawesome/free-solid-svg-icons
 */
import {
  faEnvelope,
  faFax,
  faHouse,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Import styled
 */
import {
  FooterContainer,
  SocialWrapper,
  SocialParagraph,
  IconLink,
  RowWrapper,
  ColumnWrapper,
  ColumnHeading,
  RightsWrapper,
  ContactInfo,
  IconWrapper,
  Underline,
  ContainerParagraph,
  StylesLink,
  CustomLink,
  CustomLogo,
} from './Footer.styles';

const urlChurch =
  'https://www.google.com/maps/place/Bucure%C5%9Fti+Sectorul+4,+Bucure%C8%99ti/@44.3819636,26.0427442,12z/data=!3m1!4b1!4m6!3m5!1s0x40b1fe0d5b715d0b:0xfa8fc62cda461d44!8m2!3d44.3939483!4d26.1203408!16zL20vMGN3MzJi?entry=ttu';

/**
 * Display the component
 */
export const Footer: React.FC = () => {
  return (
    <FooterContainer className="footer-container">
      <RowWrapper className="row-wrapper">
        <CustomLogo className="logo" src={logo} alt="" />
        <SocialWrapper className="social-wrapper">
          <ContainerParagraph className="container-paragraph">
            <SocialParagraph className="social-paragraph">
              Fiecare zi are nevoie de o clipa dulce, iar noi incercam sa le
              ofera acest lucru clientilor nostri.
            </SocialParagraph>
          </ContainerParagraph>
          <div className="container-icon">
            <IconLink
              href="https://www.facebook.com/search/top?q=oana%20coace%20dulce"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </IconLink>
          </div>
        </SocialWrapper>
        <ColumnWrapper>
          <ColumnHeading>
            Link-uri utile
            <Underline />
          </ColumnHeading>
          <div>
            <CustomLink to="/">Acasa</CustomLink>
            <CustomLink to="/about">Despre noi</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </div>
        </ColumnWrapper>

        <ColumnWrapper>
          <ColumnHeading>
            CONTACT
            <Underline />
          </ColumnHeading>
          <ContactInfo>
            <FontAwesomeIcon icon={faHouse} />
            <IconWrapper
              href={urlChurch}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bucharest, RO
            </IconWrapper>
          </ContactInfo>
          <ContactInfo>
            <FontAwesomeIcon icon={faEnvelope} />
            <StylesLink href="mailto:info@example.com">
              oanacoacedulce@gmail.com
            </StylesLink>
          </ContactInfo>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <StylesLink href="tel:0123456788">(+40) 733983720</StylesLink>
          </p>
          <p>
            <FontAwesomeIcon icon={faFax} />{' '}
            <StylesLink href="fax:0123456789">(+40) 733983720</StylesLink>
          </p>
        </ColumnWrapper>
      </RowWrapper>
      <RightsWrapper>©2023 Copyright: Iulian Gradinaru</RightsWrapper>
    </FooterContainer>
  );
};
