import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  NavContainer,
  ContactInfo,
  ContactItem,
  SocialLinks,
  IconLink,
} from './NavBarContact.styles';

export const NavBarContact = () => {
  return (
    <NavContainer>
      <ContactInfo>
        <ContactItem>
          <h1>0722358516</h1>
        </ContactItem>
        <ContactItem>
          <h1>0722358516</h1>
        </ContactItem>
        <ContactItem>
          <a
            href="mailto:iulian_gradinaru@yahoo.com"
            style={{ textDecoration: 'none' }}
          >
            iulian_gradinaru@yahoo.com
          </a>
        </ContactItem>
      </ContactInfo>
      <SocialLinks>
        <IconLink href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </IconLink>
        <IconLink href="https://www.instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </IconLink>
      </SocialLinks>
    </NavContainer>
  );
};
