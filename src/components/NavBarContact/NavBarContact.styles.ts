import { styled } from '@mui/system';

export const NavContainer = styled('nav')({
  // position: 'fixed', // Face bara de navigație lipită în partea de sus
  // top: 0, // Așează bara de navigație în partea de sus a paginii
  // left: 0, // Așează bara de navigație în stânga
  // right: 0, // Așează bara de navigație în dreapta
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333', // Schimbați culoarea de fundal după preferința dvs.
  color: 'white', // Schimbați culoarea textului după preferința dvs.
  padding: '10px 20px', // Modificați padding-ul după preferința dvs.
});

export const ContactInfo = styled('ul')({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
});

export const ContactItem = styled('li')({
  marginRight: '20px', // Spațiul între elementele din listă
});

export const SocialLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const IconLink = styled('a')({
  color: 'white', // Schimbați culoarea icon-urilor după preferința dvs.
  marginLeft: '10px', // Spațiul între icon-uri
  textDecoration: 'none',
  fontSize: '18px', // Modificați dimensiunea icon-urilor după preferința dvs.
});
