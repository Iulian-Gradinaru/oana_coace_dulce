/**
 * Import styled
 */
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import img1 from '../../assets/products/background-img.jpeg';
/**
 * Stiled the FooterContainer
 */
export const GridContainer = styled(Grid)(({ theme }) => {
  return {
    // padding: 91,
    // backgroundImage: `url(${img1})`,
    // backgroundSize: 'unset',
    backgroundColor: '#fff',
    marginTop: '-40px',
    width: '100%',
    marginLeft: 0,
    [theme.breakpoints.down('sm')]: {
      padding: 8,
      marginTop: 0,
    },
  };
});
export const GridProduct = styled(Grid)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    // backgroundImage: `url(${img1})`,
    // backgroundSize: 'unset',
    gap: 30,
    paddingTop: 30,
    // marginTop: '-40px',
    // width: '100%',
    // marginLeft: 0,
    [theme.breakpoints.down('sm')]: {
      padding: 8,
    },
  };
});

export const CustomGrid = styled(Grid)(({ theme }) => {
  return {
    marginTop: 40,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 7,
    },
  };
});

export const CustomPaper = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginBottom: 30,

    [theme.breakpoints.down('md')]: {
      padding: 10,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 15,
      marginTop: 20,
      boxShadow: 'none',
    },
  };
});

export const HeaderTypography = styled(Typography)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 'xx-large',
    fontWeight: 600,
    marginTop: 30,
    paddingLeft: 30,
    paddingTop: 40,
    // position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  };
});

export const Image = styled('img')(({ theme }) => {
  return {
    width: '94%',
    padding: 20,
    borderRadius: 41,
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
    },
  };
});
export const ImageGrid = styled(Grid)(({ theme }) => {
  return {
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  };
});
