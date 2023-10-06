import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const ContainerPost = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {},
  };
});

export const Image = styled('img')(({ theme }) => {
  return {
    maxWidth: '60%',
    borderRadius: 20,

    [theme.breakpoints.down('md')]: {
      maxWidth: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80%',
    },
  };
});

export const Paragraph = styled('p')(({ theme }) => {
  return {
    padding: 30,

    [theme.breakpoints.down('md')]: {},
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
  textTransform: 'initial',
  transition: 'background-color 0.3s ease',
  marginRight: 20,
  marginBottom: 10,

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
