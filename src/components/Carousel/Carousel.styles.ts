/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Carousel Container
 */
export const CarouselContainer = styled('div')({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  // background: '#0a3d62',
  color: 'azure',
  height: '100%',
  width: '100%',
  marginBottom: '35px',
  '.box': {
    position: 'relative',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    h2: {
      textAlign: 'center',
      margin: 0, // Eliminăm marginea pentru a centra textul în interiorul boxului
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Centrăm textul pe orizontală și verticală
      backgroundColor: 'transparent',
      padding: '10px',
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'contain',
    },
  },
  '.slick-prev, .slick-next': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    color: 'red',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  },
  '.slick-prev': {
    left: '50px',
  },
  '.slick-next': {
    right: '50px',
  },
  '.slick-dots li.slick-active button:before': {
    color: '#f396c1 !important',
  },
  '.slick-dots li button:before': {
    color: 'black',
    fontSize: '1rem !important',
    top: '2rem !important',
  },
  '.link-container': {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#0a3d62',
    div: {
      display: 'flex',
      alignItems: 'center',
    },
    a: {
      color: 'rgb(0, 44, 44)',
      textDecoration: 'none',
      marginLeft: '10px',
    },
  },
});
