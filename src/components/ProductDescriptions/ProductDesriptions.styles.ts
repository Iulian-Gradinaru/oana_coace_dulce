import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const Description = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  };
});
export const CustomImage = styled('img')(({ theme }) => {
  return {
    width: 570,
    height: 500,
    marginBottom: 50,
    marginRight: 40,
    marginTop: 50,
    borderRadius: 10,
    marginLeft: 40,
    transition: 'transform 0.3s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      borderRadius: 10,
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: 40,
      marginTop: 0,
      width: 320,
      height: 300,
      marginBottom: 0,
    },
  };
});

export const Paragraph = styled('p')(({ theme }) => {
  return {
    width: 300,

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      width: 600,
    },
    [theme.breakpoints.down('sm')]: {
      width: 300,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: 0,
    },
  };
});
export const ProductName = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {},
  };
});

export const ContainerProduct = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '40%',
    marginTop: 20,

    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      marginBottom: 30,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      // paddingRight: 20,
      marginBottom: 20,
    },
  };
});

export const Title = styled('h2')(({ theme }) => {
  return {
    marginTop: -80,

    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      marginBottom: 0,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
  };
});

export const ProductDescriptionsTitle = styled('h1')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 30,

    [theme.breakpoints.down('sm')]: {},
  };
});

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0056b3',
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s ease',
  marginRight: 20,

  '&:hover': {
    backgroundColor: '#007bff',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: 20,
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 20,
  },
}));
