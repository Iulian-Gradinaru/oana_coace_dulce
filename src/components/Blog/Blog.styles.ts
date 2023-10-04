import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const BlogContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

export const BlogCard = styled('div')(({ theme }) => ({
  width: 'calc(50% - 10px)',
  marginBottom: '20px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const BlogImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
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
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '5px 10px',
  textDecoration: 'none',
  marginTop: '10px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

export const DateText = styled('p')({
  fontSize: '0.9rem',
  marginTop: '10px',
  color: '#777',
});
