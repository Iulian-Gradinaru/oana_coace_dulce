/**
 * Import styled
 */
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import img1 from '../../assets/products/var1.jpeg';
/**
 * Stiled the FooterContainer
 */
export const GridContainer = styled(Grid)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    padding: 91,
    backgroundColor: '#fff',
    marginTop: '-40px',
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.down('md')]: {
      padding: 50,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 8,
    },
  };
});

export const CustomGrid = styled(Grid)(({ theme }) => {
  return {
    marginTop: 50,
    marginLeft: 6,
    width: '100%',
    [theme.breakpoints.down('sm')]: {},
  };
});

export const CustomPaper = styled(Paper)(({ theme }) => {
  return {
    padding: 17,
    borderRadius: 20,
    backgroundColor: 'transparent',
    boxShadow:
      '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
    [theme.breakpoints.down('sm')]: {
      marginRight: 15,
      marginTop: 20,
    },
  };
});

export const HeaderTypography = styled(Typography)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'xx-large',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {},
  };
});

export const Image = styled('img')(({ theme }) => {
  return {
    padding: 20,
    borderRadius: 41,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      marginBottom: 20,
    },
  };
});
export const ImageGrid = styled(Grid)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 17,
      marginBottom: 30,
    },
  };
});
