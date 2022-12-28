import React, { useState } from "react";
import NotFoundProducts from "./NotFoundProducts";
import ProductCard from "./ProductCard";
import SvgSelector from "./UI/SvgSelector";
import { IProducts } from "./Products";

interface IProductCardField {
  products: IProducts[];
  activeMode: string;
}

const ProductCardField = ({ products, activeMode }: IProductCardField) => {
  const [searchedValue, setSearchedValue] = useState("");

  let searchedProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchedValue.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchedValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchedValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedValue.toLowerCase()) ||
      product.rating.toString().includes(searchedValue) ||
      product.price.toString().includes(searchedValue) ||
      product.stock.toString().includes(searchedValue) ||
      product.discountPercentage.toString().includes(searchedValue)
    );
  });

  const cardField = searchedProducts.map((item) => {
    return (
      <ProductCard
        id={item.id}
        title={item.title}
        category={item.category}
        brand={item.brand}
        price={item.price}
        discount={item.discountPercentage}
        rating={item.rating}
        stock={item.stock}
        background={item.thumbnail}
        activeMode={activeMode}
        key={item.id}
      />
    );
  });

  return (
    <>
      <div className="search-bar">
        <label>
          <SvgSelector id="magnifier" />
          <input
            type="text"
            placeholder="Search on OnlineStore"
            onChange={(event) => setSearchedValue(event.target.value)}
          />
        </label>
      </div>
      {cardField.length > 0 ? (
        <div className="product-card_field">{cardField}</div>
      ) : (
        <NotFoundProducts />
      )}
    </>
  );
};

export default ProductCardField;
