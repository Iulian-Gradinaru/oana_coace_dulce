import { Typography } from '@mui/material';
import { Carousel } from '../Carousel';
import welcomeRight from '../../assets/products/Tort_RedVelvet_3.jpg';
import { useEffect } from 'react';
import {
  CustomGrid,
  CustomPaper,
  GridContainer,
  HeaderTypography,
  Image,
  ImageGrid,
} from '../Home/Home.styles';

export const Home = () => {
  const windowHeight = window.innerHeight;
  const halfPageY = windowHeight / 2;

  useEffect(() => {
    window.scrollTo(0, halfPageY);
  }, []);

  return (
    <div>
      <Carousel />

      <GridContainer className="grid-container" container spacing={2}>
        <CustomGrid className="custom-grid" item xs={12} md={6}>
          <CustomPaper className="custom-paper" elevation={3}>
            <HeaderTypography variant="h5">Bine ati venit!</HeaderTypography>
            <br />
            <Typography variant="h6">
              Bucătăria este spațiul în care dau frâu liber creativității,
              inspirată de pasiunea mea pentru cofetărie. Pun suflet când gătesc
              și îmi doresc să împart rezultatul muncii mele cu voi, fiindcă
              nimic nu aduce mai multă bucurie și zâmbete decât un dulce
              autentic și delicios, savurat în tihnă sau alături de cei dragi.
              Gustul deserturilor Oana Coace Dulce nu se uită ușor. Prăjiturile
              de casă au la bază ingrediente proaspete și naturale, rețete
              autentice dar și un ingredient secret, care aduce magie în
              bucătărie: pasiunea mea. Oana Coace Dulce este un hobby ce s-a
              transformat într-un proiect de suflet: deserturi cu gust
              inconfundabil, accesibile tuturor, din ingrediente de calitate.
              Deserturile noastre sunt speciale fiindcă nu sunt simple
              prăjituri, ele se transformă într-o clipă de răsfăț, o pauză bine
              meritată, un cadou pentru cineva drag sau un moment aparte,
              petrecut alături de familie ori prieteni. Dulciuri care îți aduc
              aminte de gustul copilăriei sau deserturi noi, care îți stârnesc
              curiozitate… încearcă-le pe toate și alege-ți favoritele!
            </Typography>
          </CustomPaper>
        </CustomGrid>
        <ImageGrid className="image-grid" item xs={12} md={6}>
          <Image src={welcomeRight} alt="" />
        </ImageGrid>
      </GridContainer>
    </div>
  );
};
