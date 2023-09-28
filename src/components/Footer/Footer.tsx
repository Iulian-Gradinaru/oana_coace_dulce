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

import { Link } from 'react-router-dom';

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
  // Link,
  ContactInfo,
  IconWrapper,
  Underline,
  ContainerParagraph,
  Paragraph,
  StylesLink,
  CustomLink,
  CustomLogo,
} from './Footer.styles';

/**
 * Display the component
 */
export const Footer: React.FC = () => {
  return (
    <FooterContainer className="footer-container">
      {/* <SocialWrapper className="social-wrapper">
        <ContainerParagraph className="container-paragraph">
          <CustomLogo className="logo" src={logo} alt="" />

          <SocialParagraph>
            Fiecare zi are nevoie de o clipa dulce, iar cofetarie Egreta le
            ofera acest lucru clientilor nostri.
          </SocialParagraph>
        </ContainerParagraph>
        <div className="container-icon">
          <IconLink
            href="https://www.facebook.com/search/top?q=oana%20coace%20dulce"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
        </div>
      </SocialWrapper> */}
      <RowWrapper className="row-wrapper">
        <CustomLogo className="logo" src={logo} alt="" />
        <SocialWrapper className="social-wrapper">
          <ContainerParagraph className="container-paragraph">
            <SocialParagraph className="social-paragraph">
              Fiecare zi are nevoie de o clipa dulce, iar cofetarie Egreta le
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
          <div className="iulian">
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
            <IconWrapper>Bucharest, RO</IconWrapper>
          </ContactInfo>
          <ContactInfo>
            <FontAwesomeIcon icon={faEnvelope} />
            <StylesLink href="mailto:info@example.com">
              iulian_gradinaru@yahoo.com
            </StylesLink>
          </ContactInfo>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <StylesLink href="tel:0123456788">+40 722 358 516</StylesLink>
          </p>
          <p>
            <FontAwesomeIcon icon={faFax} />{' '}
            <StylesLink href="fax:0123456789">+40 722 358 516</StylesLink>
          </p>
        </ColumnWrapper>
      </RowWrapper>
      <RightsWrapper>©2023 Copyright: Iulian Gradinaru</RightsWrapper>
    </FooterContainer>
  );
};
