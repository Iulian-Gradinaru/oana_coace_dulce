/**
 * Import styled
 */
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

/**
 * Stiled the FooterContainer
 */
export const FooterContainer = styled('footer')(({ theme }) => {
  return {
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      // width: '52vh',
    },
  };
});

/**
 * Stiled the SocialWrapper
 */
export const SocialWrapper = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#161c27',
    flexDirection: 'column',
    color: 'white',
    width: 200,
    margin: 40,
    padding: 7,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };
});

export const ContainerParagraph = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  };
});

/**
 * Stiled the SocialParagraph
 */
export const SocialParagraph = styled('p')(() => {
  return {
    textAlign: 'left',
    marginRight: 'auto',
    // marginLeft: 20,
  };
});

/**
 * Stiled the IconLink
 */
export const IconLink = styled('a')(() => {
  return {
    marginLeft: 20,
    marginRight: 20,
    color: 'white',
  };
});

/**
 * Stiled the RowWrapper
 */
export const RowWrapper = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 30,
    backgroundColor: '#e83e8c7a',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  };
});

/**
 * Stiled the ColumnWrapper
 */
export const ColumnWrapper = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column', // Acest stil aliniază elementele vertical.
    alignItems: 'flex-start',
    margin: '0 20px',
    width: 200,
    textAlign: 'left',
  };
});

/**
 * Stiled the ColumnHeading
 */
export const ColumnHeading = styled('p')(() => {
  return {
    fontWeight: 'bold',
    marginBottom: 10,
    position: 'relative',
    display: 'inline-block',
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

/**
 * Stiled the RightsWrapper
 */
export const RightsWrapper = styled('div')(() => {
  return {
    backgroundColor: '#e83e8cc4',
    color: 'white',
    fontSize: 17,
    padding: 16,
  };
});

/**
 * Stiled the Link
 */
export const StylesLink = styled('a')(() => {
  return {
    marginLeft: 5,
    color: '#ffffff',
    textDecoration: 'inherit',
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

/**
 * Stiled the ContactInfo
 */
export const ContactInfo = styled('p')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  };
});

/**
 * Stiled the IconWrapper
 */
export const IconWrapper = styled('span')(() => {
  return {
    marginLeft: 5,
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

/**
 * Stiled the Underline
 */
export const Underline = styled('span')(() => {
  return {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    height: 1,
    backgroundColor: '#fff',
  };
});

export const Paragraph = styled('p')(() => {
  return {
    '&:hover': {
      cursor: 'pointer',
      color: '#7493d0',
    },
  };
});

export const CustomLink = styled(Link)(() => {
  return {
    display: 'block', // Face ca link-urile să fie afișate ca blocuri separate.
    textDecoration: 'none', // Elimină sublinierea link-urilor.
    color: 'inherit', // Păstrează culoarea textului implicită (dacă dorești).
    margin: '25px 0', // Margin între link-uri.
  };
});

export const CustomLogo = styled('img')(({ theme }) => {
  return {
    width: 85,
    height: 70,
    borderRadius: '38%',
    // marginLeft: 30,
    marginTop: 80,
    marginBottom: 13,
    [theme.breakpoints.down('md')]: {
      marginTop: 90,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0,
    },
  };
});
