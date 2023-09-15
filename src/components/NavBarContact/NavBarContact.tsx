// import { useState } from 'react';

// /**
//  * Imports Material UI components
//  */
// import { useMediaQuery } from '@mui/material';

// /**
//  * Imports library
//  */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import logo from '../../assets/products/logo.png';

// /**
//  * Imports styles components
//  */
// import { IconLink } from './NavBarContact.styles';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// /**
//  * Displays the component
//  */
// export const NavBarContact: React.FC = () => {
//   /**
//    * Initializes mobile menu
//    */
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   /**
//    * Handles the mobile view
//    */
//   const isMobileView = useMediaQuery('(max-width: 600px)');

//   /**
//    * Handles the mobile menu state
//    */
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   /**
//    * Handles the Nav content
//    */
//   const navbarContent = (
//     <>
//       <ContainerLinks
//         className="Iulian
//       "
//       >
//         <h1>0722358516</h1>

//         <h1>0722358516</h1>

//         <a
//           href="mailto:iulian_gradinaru@yahoo.com"
//           style={{ textDecoration: 'none' }}
//         >
//           iulian_gradinaru@yahoo.com
//         </a>

//         <IconLink href="https://www.facebook.com" target="_blank">
//           <FontAwesomeIcon icon={faFacebook} />
//         </IconLink>

//         <IconLink href="https://www.instagram.com" target="_blank">
//           <FontAwesomeIcon icon={faInstagram} />
//         </IconLink>
//         {/*
//         <CustomNavLink exact to="/events" activeStyle={{ color: '#ffff' }}>
//           Evenimente
//         </CustomNavLink>
//         <CustomNavLink exact to="/information" activeStyle={{ color: '#ffff' }}>
//           Information
//         </CustomNavLink>
//         <CustomNavLink exact to="/contact" activeStyle={{ color: '#ffff' }}>
//           Contact
//         </CustomNavLink> */}
//       </ContainerLinks>
//       <MobileMenu isOpen={isMobileMenuOpen} to={''}>
//         <MobileNavLink
//           exact={true}
//           to="/"
//           activeStyle={{ color: '#ffff' }}
//           onClick={toggleMobileMenu}
//         >
//           Acasa
//         </MobileNavLink>
//         <MobileNavLink
//           exact
//           to="/about"
//           activeStyle={{ color: '#ffff' }}
//           onClick={toggleMobileMenu}
//         >
//           Despre Noi
//         </MobileNavLink>
//         <MobileNavLink
//           exact
//           to="/bakery-products"
//           activeStyle={{ color: '#ffff' }}
//           onClick={toggleMobileMenu}
//         >
//           Despre Produse
//         </MobileNavLink>
//         <MobileNavLink
//           exact
//           to="/events"
//           activeStyle={{ color: '#ffff' }}
//           onClick={toggleMobileMenu}
//         >
//           Information
//         </MobileNavLink>
//         <MobileNavLink
//           exact
//           to="/information"
//           activeStyle={{ color: '#ffff' }}
//           onClick={toggleMobileMenu}
//         >
//           Information
//         </MobileNavLink>
//         <MobileNavLink
//           exact
//           to="/contact"
//           activeStyle={{ color: '#ffff' }}
//           onClick={toggleMobileMenu}
//         >
//           Information
//         </MobileNavLink>
//       </MobileMenu>
//     </>
//   );

//   return (
//     <Container>
//       <ContainerWrapper>
//         <ContainerParagraph>
//           <Link style={{ textDecoration: 'none' }} to="/">
//             <CustomLogo className="logo" src={logo} alt="" />
//           </Link>
//         </ContainerParagraph>
//         {!isMobileView && navbarContent}
//       </ContainerWrapper>
//       {isMobileView && navbarContent}
//     </Container>
//   );
// };

// export const NavBarContact = () => {
//   return (
//     <nav className="nav_bar_contact">
//       <ul>
//         <li>
//           <h1>0722358516</h1>
//         </li>
//         <li>
//           <h1>0722358516</h1>
//         </li>
//         <li>
//           <a
//             href="mailto:iulian_gradinaru@yahoo.com"
//             style={{ textDecoration: 'none' }}
//           >
//             iulian_gradinaru@yahoo.com
//           </a>
//         </li>
//         <li>
//           <IconLink href="https://www.facebook.com" target="_blank">
//             <FontAwesomeIcon icon={faFacebook} />
//           </IconLink>
//           <IconLink href="https://www.instagram.com" target="_blank">
//             <FontAwesomeIcon icon={faInstagram} />
//           </IconLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import { styled } from '@mui/system';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavContainer = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333', // Schimbați culoarea de fundal după preferința dvs.
  color: 'white', // Schimbați culoarea textului după preferința dvs.
  padding: '10px 20px', // Modificați padding-ul după preferința dvs.
});

const ContactInfo = styled('ul')({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
});

const ContactItem = styled('li')({
  marginRight: '20px', // Spațiul între elementele din listă
});

const SocialLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const IconLink = styled('a')({
  color: 'white', // Schimbați culoarea icon-urilor după preferința dvs.
  marginLeft: '10px', // Spațiul între icon-uri
  textDecoration: 'none',
  fontSize: '18px', // Modificați dimensiunea icon-urilor după preferința dvs.
});

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
