import React from "react";
import Btn from "./Btn";
import {Beer} from "../@types/Beer";
import {useDispatch, useSelector} from "react-redux";
import {remove, selectBeers} from "../app/slices/orderSlice";
import formatPrice from "../utils/formatUtils";

interface OrderProps {}

const Order: React.FC<OrderProps> = (props) => {
  const beers = useSelector(selectBeers);

  const dispatch = useDispatch();

  const getBeers = () => {
    if (beers.length) {
      return beers.map((beer, i) => {
        return (
          <div key={i} className="flex justify-between py-2">
            <p>{beer.beerName}</p>
            <div className="flex">
              <p>{formatPrice(beer.beerPrice)}</p>
              <Btn
                className="ml-3 px-2"
                title="X"
                onClick={() => dispatch(remove(beer))}
              ></Btn>
            </div>
          </div>
        );
      });
    } else {
      return <p>No beers in order</p>;
    }
  };

  return (
    <div
      className="h-5/6 w-5/6 p-4 bg-slate-600 rounded-md flex flex-col justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <div>{getBeers()}</div>
      <div className="flex justify-center">
        <Btn
          disabled={beers.length === 0 ? true : false}
          className="p-5"
          title="GET YOUR BEER"
        ></Btn>
      </div>
    </div>
  );
};

export default Order;
