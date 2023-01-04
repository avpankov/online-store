import React from "react";
import { useState, useEffect, useCallback } from "react";
import FilterBlock from "./FilterBlock";
import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import { Options } from "./SortOptions";
import { ActiveMode } from "./SortProducts";
import data from "../data/data.json";

interface IData {
  products: IProducts[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProducts {
  [key: string]: number | string | string[];
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const dataFile: IData = data;

const products = dataFile.products;

const Products = () => {
  const [valueSort, setValueSort] = useState<string>("sort-options");
  const [productsToShow, setProductsToShow] = useState<IProducts[]>(products);
  const [activeMode, setActiveMode] = useState(ActiveMode.big);

  const chengeSelect = useCallback(() => {
    switch (valueSort) {
      case Options.priceASC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => a.price - b.price),
        ]);
        break;
      case Options.priceDESC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => b.price - a.price),
        ]);
        break;
      case Options.ratingASC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => a.rating - b.rating),
        ]);
        break;
      case Options.ratingDESC:
        setProductsToShow([
          ...productsToShow.sort((a, b) => b.rating - a.rating),
        ]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSort]);

  useEffect(() => {
    chengeSelect();
  }, [chengeSelect, valueSort]);

  return (
    <main>
      <div className="wrapper main">
        <FilterBlock
          setProductsToShow={setProductsToShow}
          productsToShow={productsToShow}
        />
        <div className="products">
          <SortProducts
            amount={100}
            setValueSort={setValueSort}
            valueSort={valueSort}
            activeMode={activeMode}
            setActiveMode={setActiveMode}
          />
          <ProductCardField products={productsToShow} activeMode={activeMode} />
        </div>
      </div>
    </main>
  );
};

export default Products;
