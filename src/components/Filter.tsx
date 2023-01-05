import React from "react";
import FilterPoint from "./FilterPoint";
import { IProductData } from "../interfaces";
import { products } from "./Products";
import { IObject } from "../interfaces";

interface IFilter {
  name: string;
  setKeyFilterState: React.Dispatch<React.SetStateAction<string>>;
  setValueFilterState: React.Dispatch<React.SetStateAction<string[]>>;
  productsToShow: IProductData[];
}

const Filter = ({
  name,
  setKeyFilterState,
  setValueFilterState,
  productsToShow,
}: IFilter) => {
  const counter = products.reduce(function (o: IObject, i: IProductData) {
    if (!o.hasOwnProperty(i[name] as keyof IProductData)) {
      o[i[name] as keyof IProductData] = 0;
    }
    o[i[name] as keyof IProductData]++;
    return o;
  }, {});

  const filterCounter = productsToShow.reduce(function (
    o: IObject,
    i: IProductData
  ) {
    if (!o.hasOwnProperty(i[name] as keyof IProductData)) {
      o[i[name] as keyof IProductData] = 0;
    }
    o[i[name] as keyof IProductData]++;
    return o;
  },
  {});

  return (
    <div className="filter_block">
      <h2>{name}</h2>
      <FilterPoint
        counter={counter}
        filterCounter={filterCounter}
        name={name}
        setKeyFilterState={setKeyFilterState}
        setValueFilterState={setValueFilterState}
      />
    </div>
  );
};

export default Filter;
