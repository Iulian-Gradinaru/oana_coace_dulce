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
  // minHeight: '74vh',
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
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

/**
 * Styles the Text
 */
export const TextInfo = styled('h5')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginTop: 15,

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: 20,
    marginBottom: 0,
  },
}));

/**
 * Styles the ContactFormContainer
 */
export const ContactFormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f396c1',
  padding: '20px',
  borderRadius: '30px',
  // border: '1px solid #f1f1f1',
  marginTop: 20,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '40px',
    // marginLeft: -32,
  },
  [theme.breakpoints.down('sm')]: {
    // marginRight: 7,
    marginLeft: 47,
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
  marginBottom: '0px',
  // color: 'dark',
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
export const Input = styled('input')(({ theme }) => ({
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '10px',
  fontSize: '16px',
  backgroundColor: '#FFFFFF',
  border: 'none',
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

/**
 * Styles the Textarea
 */
export const Textarea = styled('textarea')(({ theme }) => ({
  width: '100%',
  padding: '10px',
  borderRadius: 10,
  fontSize: '16px',
  minHeight: '100px',
  resize: 'vertical',
  backgroundColor: '#FFFFFF',
  border: 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: 170,
    borderRadius: 10,
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: 10,
  },
}));

/**
 * Styles the SubmitButton
 */
export const SubmitButton = styled('button')(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    marginTop: 20,
  },
  [theme.breakpoints.down('sm')]: {},
}));

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
