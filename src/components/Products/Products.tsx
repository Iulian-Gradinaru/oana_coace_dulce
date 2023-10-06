import { Typography } from '@mui/material';
import { PRODUCTS } from '../../utils/products';
import { Item } from '../Item';
import {
  CustomGrid,
  CustomPaper,
  GridContainer,
  GridProduct,
  HeaderTypography,
} from './Product.styles';

export const Products = () => {
  const productItem = PRODUCTS.map((product) => (
    <Item key={product.id} product={product} />
  ));

  return (
    <div>
      <GridContainer className="grid-container">
        <CustomGrid className="custom-grid" item xs={12} md={6}>
          <CustomPaper className="custom-paper" elevation={3}>
            <HeaderTypography variant="h5">Torturi</HeaderTypography>
            <br />
            <Typography variant="h6" style={{ padding: '30px' }}>
              Specialitatile noastre: torturi invelite in martipan, iar modelul
              si decorul se aleg de catre client, in interiorul tortului se
              poate face din orice sortiment disponibil. Sortimente torturi:
              tort jofre ciocolata , delice cu crema de vanilie si fulgi de
              migdale , tort ciocolata speciala , tort caramel , tort nuceta ,
              tort jofre coniac , tort jofre capsuni , tort Oreo , tort iaurt cu
              fructe de padure , tort dobos , tort trifoi , tort diplomat , tort
              branza de vaci si piersici sau afine , tort specialitate , tort
              trei ciocolate , tort regal cu afine , tortul fara nume cu crema
              de vanilie ciocolata , frisca si visine
            </Typography>
            <HeaderTypography variant="h5">Prajituri</HeaderTypography>
            <br />
            <Typography variant="h6" style={{ padding: '30px' }}>
              Specialitatile noastre: torturi invelite in martipan, iar modelul
              si decorul se aleg de catre client, in interiorul tortului se
              poate face din orice sortiment disponibil. Sortimente torturi:
              tort jofre ciocolata , delice cu crema de vanilie si fulgi de
              migdale , tort ciocolata speciala , tort caramel , tort nuceta ,
              tort jofre coniac , tort jofre capsuni , tort Oreo , tort iaurt cu
              fructe de padure , tort dobos , tort trifoi , tort diplomat , tort
              branza de vaci si piersici sau afine , tort specialitate , tort
              trei ciocolate , tort regal cu afine , tortul fara nume cu crema
              de vanilie ciocolata , frisca si visine
            </Typography>
          </CustomPaper>
        </CustomGrid>

        <GridProduct container spacing={2} className="grid-product">
          {productItem}
        </GridProduct>
      </GridContainer>
    </div>
  );
};
