import { Grid, Typography, Paper } from '@mui/material';
import { Carousel } from '../Carousel';
import welcomeRight from '../../assets/products/welcome-right.jpg';

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Carousel />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5">
            Bine ati venit Fiecare zi are nevoie de o clipa dulce, iar cofetaria
            Egreta le ofera acest lucru clientilor nostri. Fericirea poate sta
            si intr-un desert. Cofetaria Egreta reprezinta un taram de poveste,
            intr-o lume care poarta cu sine cele mai bune arome ale torturilor,
            cele mai gustoase prajituri, cel mai savuros miros al produselor de
            patisserie. Suntem pregatiti in permanenta sa facem fata cu brio
            celor mai aprige provocari. Ne dorim ca produsele noastre sa spuna o
            poveste delicioasa, de aceea preocuparea noastra este de a rafina
            retetele in mod constant pentru a ajunge la gusturile fiecarui
            client, sa fie multumit de produsele noastre.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={welcomeRight} alt="" style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
};
