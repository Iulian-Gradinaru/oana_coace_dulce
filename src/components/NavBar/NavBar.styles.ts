import { NavLink } from 'react-router-dom';

/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports type
 */
import { CustomNavLinkProps } from './NavBar.types';

/**
 * Styles the Container
 */
export const Container = styled('nav')(({ theme }) => {
  return {
    backgroundColor: '#fabe5a',
    height: '12vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    fontSize: 23,
    color: '#000000',
    // margin: '-8px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: 'auto',
      marginBottom: -10,
    },
  };
});

/**
 * Styles the Container Wrapper
 */
export const ContainerWrapper = styled('div')(() => {
  return {
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flexGrow: 1,
    // marginRight: '20px',
  };
});

/**
 * Styles the Container Paragraph
 */
export const ContainerParagraph = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexGrow: 1,
    cursor: 'pointer',
    margin: 0,
    // padding: 10,
  };
});

/**
 * Styles the Paragraph
 */
export const Paragraph = styled('p')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 0,
    paddingLeft: 22,
    paddingTop: 10,
    letterSpacing: '0.1rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  };
});

/**
 * Styles the Container Links
 */
export const ContainerLinks = styled('div')(() => {
  return {
    paddingRight: 36,
    display: 'flex',
    gap: 10,
  };
});

/**
 * Styles the Custom NavLink
 */
export const CustomNavLink = styled(NavLink, {
  shouldForwardProp: (propName) => propName !== 'isActive',
})<CustomNavLinkProps>(({ isActive }) => {
  return {
    textDecoration: 'none',
    border: '4px solid transparent',
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'center',
    fontSize: 26,
    position: 'relative',
    color: '#000000',
    marginTop: 30,
    '&::after': {
      width: '0%',
      height: 4,
      display: 'block',
      backgroundColor: '#ffff',
      content: '""',
      position: 'absolute',
      top: 34,
      left: '50%',
      transition:
        'left 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    '&:hover': {
      color: '#ffff',
    },
    '&:hover::after': {
      width: '100%',
      top: 34,
      left: '0',
      color: '#000000',
    },
    ...(isActive && {
      color: '#000000',
      '&::after': {
        width: '100%',
        top: 34,
        left: '0',
      },
    }),
  };
});

/**
 * Styles the Mobile Menu
 */
export const MobileMenu = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isOpen',
})<CustomNavLinkProps>(({ theme, isOpen }) => {
  return {
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  };
});

/**
 * Styles the Mobile NavLink
 */
export const MobileNavLink = styled(NavLink)(({ theme }) => {
  return {
    textDecoration: 'none',
    fontSize: 30,
    color: '#606C5D',
    '&:hover': {
      color: '#F7E6C4',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  };
});

export const CustomLogo = styled('img')(() => {
  return {
    width: 85,
    height: 70,
    borderRadius: '38%',
    marginLeft: 30,
    marginTop: 13,
  };
});

export const MobileMenuButton = styled('div')(({ theme }) => {
  return {
    display: 'none', // Va fi afișat doar în modul mobil
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  };
});
