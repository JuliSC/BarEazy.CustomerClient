import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../app/slices/orderSlice";
import Btn from "./Btn";
import {Beer} from "../@types/Beer";
import formatPrice from "../utils/formatUtils";
import {
  addNotification,
  selectNotifications,
} from "../app/slices/notificationSlice";

interface BeerProps {
  beer: Beer;
  img: string;
}

const BeerCard: React.FC<BeerProps> = ({beer, img}) => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);

  const handleClick = (beer: Beer) => {
    dispatch(add(beer));
    dispatch(addNotification(`${beer.beerName} added to order 🍺`));
  };

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
          <h1 className="text-md md:text-2xl font-bold">{beer.beerName}</h1>
          <p className="text-md">{beer.beerDescription}</p>
          <p className="text-xs">{beer.beerVolume} L</p>
          <p className="text-xs">{beer.alcoholPercentage}%</p>
        </div>
        <div className="ml-auto flex flex-col justify-between">
          <Btn
            title="Add To Cart"
            className="bg-orange text-black p-2"
            onClick={() => handleClick(beer)}
          ></Btn>
          <p className="text-right text-lg mr-2">
            {formatPrice(beer.beerPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
