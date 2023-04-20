import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../app/slices/orderSlice";
import Btn from "./Btn";
import {Beer} from "../@types/Beer";
import formatPrice from "../utils/formatUtils";

interface BeerProps {
  beer: Beer;
  img: string;
}

const BeerCard: React.FC<BeerProps> = ({beer, img}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-row justify-start bg-yellow rounded-lg shadow-lg overflow-hidden h-36 m-5">
        <div className="w-1/3 bg-center">
          {!!img ? (
            <img className="object-cover w-full h-full" src={img} alt="beer" />
          ) : (
            <div className="animate-pulse flex items-center justify-center h-full w-full bg-gray-300">
              <div className="w-3/4 h-1/2 bg-gray-400 rounded"></div>
            </div>
          )}
        </div>
        <div className="p-3 md:p-5 w-1/3">
          <h1 className="text-md md:text-3xl font-bold">{beer.beerName}</h1>
          <p className="text-md md:text-lg">{formatPrice(beer.beerPrice)}</p>
        </div>
        <div className="ml-auto">
          <Btn
            title="Add To Cart"
            className="bg-orange text-black p-2"
            onClick={() => dispatch(add(beer))}
          ></Btn>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
