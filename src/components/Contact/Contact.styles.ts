/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the PageContainer
 */
export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '74vh',
});

/**
 * Styles the ContactFormContainer
 */
export const ContactFormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#F5EFE7;',
  padding: '20px',
  borderRadius: '30px',
  border: '1px solid #f1f1f1',
  marginTop: 40,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '40px',
    marginLeft: -32,
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: 7,
    marginLeft: 16,
    width: '73%',
    padding: 26,
  },
}));

/**
 * Styles the Title
 */
export const Title = styled('h2')({
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: 'dark',
});

/**
 * Styles the InputContainer
 */
export const InputContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  marginBottom: '10px',
  gap: 20,
  width: '100%',
  fontSize: 20,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
    width: 395,
    fontSize: 20,
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
    width: '100%',
  },
}));

/**
 * Styles the Input
 */
export const Input = styled('input')({
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  fontSize: '16px',
  backgroundColor: '#FFFFFF',
  border: 'none',
});

/**
 * Styles the Textarea
 */
export const Textarea = styled('textarea')(({ theme }) => ({
  width: '97%',
  padding: '10px',
  borderRadius: '4px',
  fontSize: '16px',
  minHeight: '100px',
  resize: 'vertical',
  backgroundColor: '#FFFFFF',
  border: 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: '170px',
  },
}));

/**
 * Styles the SubmitButton
 */
export const SubmitButton = styled('button')({
  padding: '10px 20px',
  backgroundColor: '#4F709C',
  color: 'azure',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: 10,
  '&:hover': {
    backgroundColor: '#213555',
    color: '#FFFFFF',
  },
});

/**
 * Styles the ContactInfoContainer
 */
export const ContactInfoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: theme.spacing(2),
  color: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    marginLeft: 20,
    marginBottom: 10,
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 35,
  },
}));

/**
 * Styles the ContactInfo
 */
export const ContactInfo = styled('div')({
  color: '#FFFFFF',
  '& p': {
    margin: '10px 0',
    fontSize: 20,
  },
});
