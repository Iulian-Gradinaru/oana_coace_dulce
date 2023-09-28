import { ProductProps } from './Item.types';

import { Container, Image, Descriptions, ProductName } from './Item.styles';
import { Link } from 'react-router-dom';

export const Item: React.FC<ProductProps> = (props) => {
  const { product } = props;

  return (
    <Container className="container_product">
      <Link to={`/product/${product.id}`} key={product.id}>
        <Image className="image-card" src={product.productImage} />
      </Link>
      <Descriptions className="description">
        <ProductName className="product-name">
          <b>{product.productName}</b>
        </ProductName>
      </Descriptions>
    </Container>
  );
};
