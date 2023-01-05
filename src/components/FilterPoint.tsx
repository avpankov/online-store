import React, { useState, useEffect } from "react";
import { IObject } from "../interfaces";

interface IFilterPoint {
  counter: IObject;
  filterCounter: IObject;
  name: string;
  setKeyFilterState: React.Dispatch<React.SetStateAction<string>>;
  setValueFilterState: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterPoint = ({
  counter,
  filterCounter,
  name,
  setKeyFilterState,
  setValueFilterState,
}: IFilterPoint) => {
  const [checkedState, setCheckedState] = useState(
    new Array(Object.keys(counter).length).fill(false)
  );

  const tempValueArr = checkedState.map((item, i) => {
    if (item) {
      return Object.keys(counter)[i];
    }
  });

  const valueArr = tempValueArr.filter((item) => {
    if (item) {
      return item;
    }
  });

  function handleOnChange(position: number) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

  useEffect(() => {
    setValueFilterState(valueArr as string[]);
    setKeyFilterState(name);
  }, [checkedState]);

  let fullFilterCounter = { ...counter };
  for (let key in fullFilterCounter) {
    if (filterCounter.hasOwnProperty(key)) {
      fullFilterCounter[key] = filterCounter[key];
    } else {
      fullFilterCounter[key] = 0;
    }
  }

  const filterPoints = Object.entries(counter).map((item, i) => {
    return (
      <div key={item[0]} className="filter_list_point">
        <input
          type="checkbox"
          id={item[0]}
          name={item[0]}
          onChange={() => handleOnChange(i)}
        />
        <label htmlFor={item[0]}>{item[0]}</label>
        <span>{`(${fullFilterCounter[item[0]]}/${item[1]})`}</span>
      </div>
    );
  });

  return <div className="filter_list">{filterPoints}</div>;
};

export default FilterPoint;
