import { Grid } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

/**
 * Styles the ContactInfoContainer
 */
export const ContactInfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: theme.spacing(2),
  // color: '#FFFFFF',
  marginBottom: 20,
  [theme.breakpoints.down('md')]: {
    // marginLeft: 20,
    marginBottom: 15,
    marginTop: 0,
  },
  [theme.breakpoints.down('sm')]: {
    // marginBottom: 35,
    alignItems: 'center',
  },
}));

/**
 * Styles the ContactInfo
 */
export const ContactInfo = styled('div')({
  color: 'black',
  '& h5': {
    margin: '10px 0',
    fontSize: 20,
  },
});

/**
 * Styles the Title
 */
export const Title = styled('h2')({
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '0px',
  // color: 'dark',
});

/**
 * Styles the TextInfo
 */
export const TextInfo = styled('h5')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: 15,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginBottom: 10,
    fontSize: 20,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0px 20px',
    marginBottom: 0,
    fontSize: 20,
  },
}));

export const ImageGrid = styled(Grid)(({ theme }) => {
  return {
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 17,
      // marginBottom: 30,
    },
  };
});

export const Image = styled('img')(({ theme }) => {
  return {
    maxWidth: '100%',

    padding: 20,
    borderRadius: 41,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
      padding: 0,
      marginBottom: 20,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginBottom: 20,
    },
  };
});

/**
 * Styles the Text Container
 */
export const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0px 40px',
    fontSize: 20,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
}));
