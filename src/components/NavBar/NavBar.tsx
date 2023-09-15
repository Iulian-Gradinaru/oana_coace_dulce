import { useState } from 'react';

/**
 * Imports Material UI components
 */
import { useMediaQuery } from '@mui/material';

/**
 * Imports styles components
 */
import {
  Container,
  ContainerParagraph,
  Paragraph,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
} from './NavBar.styles';

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
      </MobileMenu>
    </>
  );

  return (
    <Container>
      <ContainerWrapper>
        <ContainerParagraph>
          <Paragraph>
            Iulian Gradinaru <br />
            Front End Developer
          </Paragraph>
        </ContainerParagraph>
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
