/**
 * Import styled
 */
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

/**
 * Stiled the FooterContainer
 */
export const GridContainer = styled(Grid)(({ theme }) => {
  return {
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
    marginTop: 30,
    width: '100%',
    [theme.breakpoints.down('sm')]: {},
  };
});

export const CustomPaper = styled(Paper)(({ theme }) => {
  return {
    padding: 17,
    borderRadius: 20,
    backgroundColor: 'transparent',
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
    width: '94%',
    padding: 20,
    borderRadius: 41,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
      padding: 0,
      marginTop: 10,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  };
});

export const ImageGrid = styled(Grid)(({ theme }) => {
  return {
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 17,
      marginBottom: 30,
    },
  };
});
