import React from 'react'

// Product component
const Product = ({ name, description, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
};

// Parent component
const ProductPage = () => {
  // Product details
  const product1 = {
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$100',
  };

  const product2 = {
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$200',
  };

  return (
    <div>
      <h1>Products</h1>
      {/* Render Product component with product details */}
      <Product {...product1} />
      <Product {...product2} />
    </div>
  );
};

export default ProductPage;


