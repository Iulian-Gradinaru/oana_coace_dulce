import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material'; // Importăm iconița de burger

import logo from '../../assets/products/logo.png';
import {
  Container,
  ContainerParagraph,
  CustomLogo,
  ContainerLinks,
  MobileMenu,
  CustomNavLink,
  MobileNavLink,
  ContainerWrapper,
  MobileMenuButton,
  // ProductsMenu,
  // ProductMenuItem, // Adăugăm noua componentă de buton pentru meniul mobil
} from './NavBar.styles';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Definește un starea pentru meniul "Produse"
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const isMobileView = useMediaQuery('(max-width: 600px)');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Funcție pentru a deschide sau închide meniul "Produse"
  const toggleProductsMenu = () => {
    setShowProductsMenu(!showProductsMenu);
  };

  const navbarContent = (
    <>
      {!isMobileView && (
        <ContainerLinks className="container-links">
          <CustomNavLink
            className={'custom-nav-link-acasa'}
            exact={true}
            to="/"
            activeStyle={{ color: '#ffff' }}
          >
            Acasa
          </CustomNavLink>
          <CustomNavLink
            className={'custom-nav-link-despre-noi'}
            exact
            to="/about"
            activeStyle={{ color: '#ffff' }}
          >
            Despre Noi
          </CustomNavLink>

          <CustomNavLink
            className={'custom-nav-link-produse'}
            onClick={() => toggleProductsMenu()} // Setează showProductsMenu la true la clic
            to="/products"
          >
            Produse
          </CustomNavLink>
          {/* {showProductsMenu && (
              <ProductsMenu to={''}>
                <ProductMenuItem to="/cake">Torturi</ProductMenuItem>
                <ProductMenuItem to="/bakery-product">
                  Produse Patiserie
                </ProductMenuItem>
              </ProductsMenu>
            )} */}

          <ContainerParagraph className="container-paragraph">
            <Link className="link" style={{ textDecoration: 'none' }} to="/">
              <CustomLogo className="logo" src={logo} alt="" />
            </Link>
          </ContainerParagraph>
          <CustomNavLink
            className={'custom-nav-link-blog'}
            exact
            to="/blog"
            activeStyle={{ color: '#ffff' }}
          >
            Blog
          </CustomNavLink>
          <CustomNavLink
            className={'custom-nav-link-informatii'}
            exact
            to="/information"
            activeStyle={{ color: '#ffff' }}
          >
            Information
          </CustomNavLink>
          <CustomNavLink
            className={'custom-nav-link-contact'}
            exact
            to="/contact"
            activeStyle={{ color: '#ffff' }}
          >
            Contact
          </CustomNavLink>
        </ContainerLinks>
      )}
      {isMobileView && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <MobileMenuButton onClick={toggleMobileMenu}>
            <Menu /> {/* Icoană de hamburger */}
          </MobileMenuButton>
          <ContainerParagraph className="container-paragraph">
            <Link className="link" style={{ textDecoration: 'none' }} to="/">
              <CustomLogo className="logo" src={logo} alt="" />
            </Link>
          </ContainerParagraph>
        </div>
      )}
      {isMobileMenuOpen && (
        <MobileMenu className={'mobile-menu'} isOpen={isMobileMenuOpen} to={''}>
          <MobileNavLink
            className={'mobile-menu-acasa'}
            exact={true}
            to="/"
            activeStyle={{ color: '#ffff' }}
            onClick={toggleMobileMenu}
          >
            Acasa
          </MobileNavLink>
          <MobileNavLink
            className={'mobile-menu-despre-noi'}
            exact
            to="/about"
            activeStyle={{ color: '#ffff' }}
            onClick={toggleMobileMenu}
          >
            Despre Noi
          </MobileNavLink>
          <MobileNavLink
            className={'mobile-menu-produse'}
            exact
            to="/products"
            activeStyle={{ color: '#ffff' }}
            onClick={toggleMobileMenu}
          >
            Produse
          </MobileNavLink>
          <MobileNavLink
            className={'mobile-menu-events'}
            exact
            to="/blog"
            activeStyle={{ color: '#ffff' }}
            onClick={toggleMobileMenu}
          >
            Blog
          </MobileNavLink>
          <MobileNavLink
            className={'mobile-menu-information'}
            exact
            to="/information"
            activeStyle={{ color: '#ffff' }}
            onClick={toggleMobileMenu}
          >
            Information
          </MobileNavLink>
          <MobileNavLink
            className={'mobile-menu-contact'}
            exact
            to="/contact"
            activeStyle={{ color: '#ffff' }}
            onClick={toggleMobileMenu}
          >
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </>
  );

  return (
    <Container className="container">
      <ContainerWrapper className="container wrapper">
        {!isMobileView && navbarContent}
      </ContainerWrapper>
      {isMobileView && navbarContent}
    </Container>
  );
};
