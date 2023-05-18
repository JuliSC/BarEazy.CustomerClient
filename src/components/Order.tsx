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
      console.log(beers);

      const order: OrderDTO = {
        email: "john@example.com",
        name: "John Doe",
        description: "Order from John Doe",
        beers: beers,
        paymentDetails: {
          cardNumber: "1234567890",
          cardOwnerName: "John Smith",
          expirationDate: "2023-04-27T11:28:30.546Z",
          verificationNumber: "867",
          email: "john@example.com",
        },
      };

      const res = await fetch(
        `${process.env.REACT_APP_CUSTOMER_API_URL}/order/create`,
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
    placeOrder.mutate();
  };

  const getBeers = () => {
    if (beers.length) {
      return beers.map((beer, i) => {
        return (
          <div key={i} className="flex justify-between py-2">
            <p>{beer.beerName}</p>
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
