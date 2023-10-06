// ProductDescription.tsx

import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Pentru a prelua id-ul produsului din URL
import { PRODUCTS } from '../../utils/products';

import {
  Description,
  CustomImage,
  ContainerProduct,
  Paragraph,
  Title,
  ProductName,
  ProductDescriptionsTitle,
  CustomButton,
} from './ProductDesriptions.styles';

export const ProductDescriptions: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // Get product id from URL
  const product = PRODUCTS.find((p) => p.id === parseInt(productId, 10));

  // Check if the product exists in the product list
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductDescriptionsTitle>Descriere Produse</ProductDescriptionsTitle>
      <Description className="description">
        <CustomImage src={product.productImage} />

        <ContainerProduct className="container-product">
          <ProductName className="product-name">
            <Title>{product.productName}</Title>
          </ProductName>
          <Paragraph>{product.descriptions}</Paragraph>
          <Paragraph> Blat: {product.cakeBase}</Paragraph>
          <Paragraph> Crema: {product.cream}</Paragraph>
          <Paragraph> Decor: {product.decoration} </Paragraph>
        </ContainerProduct>

        <Link to={'/products'}>
          <CustomButton className="custom-button">
            Inapoi la produse
          </CustomButton>
        </Link>
      </Description>
    </div>
  );
};
