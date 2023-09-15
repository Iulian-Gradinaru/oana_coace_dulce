import { useState } from 'react';

/**
 * Imports Material UI components
 */
import { useMediaQuery } from '@mui/material';

import logo from '../../assets/products/logo.png';

/**
 * Imports styles components
 */
import {
  Container,
  ContainerParagraph,
  CustomLogo,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
} from './NavBar.styles';
import { Link } from 'react-router-dom';

/**
 * Displays the component
 */
export const NavBar: React.FC = () => {
  /**
   * Initializes mobile menu
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Handles the mobile view
   */
  const isMobileView = useMediaQuery('(max-width: 600px)');

  /**
   * Handles the mobile menu state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Handles the Nav content
   */
  const navbarContent = (
    <>
      <ContainerLinks>
        <CustomNavLink exact={true} to="/" activeStyle={{ color: '#ffff' }}>
          Acasa
        </CustomNavLink>
        <CustomNavLink exact to="/about" activeStyle={{ color: '#ffff' }}>
          Despre Noi
        </CustomNavLink>
        <CustomNavLink
          exact
          to="/bakery-products"
          activeStyle={{ color: '#ffff' }}
        >
          Produse
        </CustomNavLink>
        <CustomNavLink exact to="/events" activeStyle={{ color: '#ffff' }}>
          Evenimente
        </CustomNavLink>
        <CustomNavLink exact to="/information" activeStyle={{ color: '#ffff' }}>
          Information
        </CustomNavLink>
        <CustomNavLink exact to="/contact" activeStyle={{ color: '#ffff' }}>
          Contact
        </CustomNavLink>
      </ContainerLinks>
      <MobileMenu isOpen={isMobileMenuOpen} to={''}>
        <MobileNavLink
          exact={true}
          to="/"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Acasa
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/about"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Despre Noi
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/bakery-products"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Despre Produse
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/events"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Information
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/information"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Information
        </MobileNavLink>
        <MobileNavLink
          exact
          to="/contact"
          activeStyle={{ color: '#ffff' }}
          onClick={toggleMobileMenu}
        >
          Information
        </MobileNavLink>
      </MobileMenu>
    </>
  );

  return (
    <Container>
      <ContainerWrapper>
        <ContainerParagraph>
          <Link style={{ textDecoration: 'none' }} to="/">
            <CustomLogo className="logo" src={logo} alt="" />
          </Link>
        </ContainerParagraph>
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
