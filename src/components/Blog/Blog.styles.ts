import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const BlogContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: 20,
});

export const BlogCard = styled('div')(({ theme }) => ({
  width: 'calc(50% - 10px)',
  marginBottom: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  borderRadius: 20,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const BlogImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 20,
  transition: 'transform 0.3s ease-in',
  padding: 10,
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
    // borderRadius: 27,
  },
});

export const BlogTitle = styled('h2')({
  fontSize: '1.5rem',
  marginTop: '10px',
});

export const BlogParagraph = styled('p')({
  fontSize: '1rem',
  marginTop: '10px',
});

export const BlogLink = styled(Link)({
  display: 'inline-block',
  backgroundColor: '#0056b3',
  color: '#fff',
  padding: '10px 10px',
  textDecoration: 'none',
  // marginTop: '10px',
  fontWeight: 'bold',
  borderRadius: 10,
  '&:hover': {
    backgroundColor: '#007bff',
  },
});

export const DateText = styled('p')({
  fontSize: '0.9rem',
  marginTop: '10px',
  color: '#777',
});
