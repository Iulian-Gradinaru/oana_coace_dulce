import { Typography } from '@mui/material';
import { Carousel } from '../Carousel';
import welcomeRight from '../../assets/products/poza7.jpg';
import {
  CustomGrid,
  CustomPaper,
  GridContainer,
  HeaderTypography,
  Image,
  ImageGrid,
} from './About.styles';

export const About = () => {
  return (
    <div>
      <Carousel />

      <GridContainer className="grid-container">
        <CustomGrid className="custom-grid" item xs={12} md={6}>
          <CustomPaper className="custom-paper" elevation={3}>
            <HeaderTypography variant="h5">Despre noi!</HeaderTypography>
            <br />
            <Typography variant="h6">
              Facem produse artizanale, deci produse imperfecte, un tort nu va
              semăna niciodată cu altul, nicio coajă de tartă nu va fi identică
              cu alta, niciun biscuite nu are acceași dimensiune cu altul. Tot
              ce facem este la scară mică, utilizăm tehnologia foarte puțin,
              ingredientele nu sunt artificiale, prin urmare nu pot crește
              termenul de valabilitate. Produsele au o aromă bine definită,
              tratăm aluaturile cu respect, munca asta este una migăloasă,
              atenția se îndreaptă îndeosebi spre calitate. Nu putem produce
              cantități mari pentru că știm că un volum mare de produse va duce,
              inevitabil, la pierderea calității. Funcționăm pe principiul puțin
              și bun. 🙂 #coacemcudrag
            </Typography>
          </CustomPaper>
        </CustomGrid>
        <ImageGrid className="image-grid" item xs={12} md={6}>
          <Image className="image" src={welcomeRight} alt="" />
          <Image className="image" src={welcomeRight} alt="" />
          <Image className="image" src={welcomeRight} alt="" />
        </ImageGrid>
      </GridContainer>
    </div>
  );
};
