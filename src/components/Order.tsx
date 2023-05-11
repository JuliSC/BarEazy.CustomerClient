import React from "react";
import Btn from "./Btn";
import {Beer} from "../@types/Beer";
import {useDispatch, useSelector} from "react-redux";
import {BeerItem, remove, selectBeers} from "../app/slices/orderSlice";
import formatPrice from "../utils/formatUtils";
import {useMutation} from "react-query";

interface OrderDTO {
  email: string;
  name: string;
  description: string;
  beers: BeerItem[];
  paymentDetails: {
    cardNumber: string;
    cardOwnerName: string;
    expirationDate: string;
    verificationNumber: string;
    email: string;
  };
}

interface OrderProps {}

const Order: React.FC<OrderProps> = (props) => {
  const beers = useSelector(selectBeers);

  const dispatch = useDispatch();

  const placeOrder = useMutation({
    mutationFn: async () => {
      const order: OrderDTO = {
        email: "string",
        name: "string",
        description: "string",
        beers: beers,
        paymentDetails: {
          cardNumber: "string",
          cardOwnerName: "string",
          expirationDate: "2023-04-27T11:28:30.546Z",
          verificationNumber: "string",
          email: "string",
        },
      };

      const res = await fetch(
        "https://6666-87-72-193-253.ngrok-free.app/api/order/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );
      const data = await res.json();
      console.log(data);

      return data;
    },
  });

  const handleClick = () => {
    console.log("handleClick");

    placeOrder.mutate();
  };

  const getBeers = () => {
    if (beers.length) {
      return beers.map((beer, i) => {
        return (
          <div key={i} className="flex justify-between py-2">
            <p>{beer.name}</p>
            <div className="flex">
              <p></p>
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
          onClick={handleClick}
        ></Btn>
      </div>
    </div>
  );
};

export default Order;
