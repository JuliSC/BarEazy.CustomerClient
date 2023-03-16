import React from "react";
import Btn from "./Btn";

interface BeerProps {
  title: string;
  img: string;
  price: number;
}

const formatPrice = (price: number) => {
  return price.toLocaleString("da-DK", {
    style: "currency",
    currency: "DKK",
  });
};

const BeerCard: React.FC<BeerProps> = ({title, img, price}) => {
  return (
    <div>
      <div className="flex flex-row justify-start bg-yellow rounded-lg shadow-lg overflow-hidden m-5">
        <div className="w-1/3 bg-cover bg-center">
          {!!img ? (
            <img className="object-cover" src={img} alt="beer" />
          ) : (
            <div className="animate-pulse flex items-center justify-center h-full w-full bg-gray-300">
              <div className="w-3/4 h-1/2 bg-gray-400 rounded"></div>
            </div>
          )}
        </div>
        <div className="p-5 ">
          <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
          <p className="text-lg">{formatPrice(price)}</p>
        </div>
        <div className="ml-auto">
          <Btn title="Add To Cart" className="bg-orange text-black"></Btn>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
