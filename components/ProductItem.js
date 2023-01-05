import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="rouded shadow" />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">$ {product.price}</p>
        <button
          className="primary-btn"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
