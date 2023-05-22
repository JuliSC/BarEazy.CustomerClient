import React, {useEffect} from "react";
import {QueryKey, useQuery} from "react-query";
import BeerCard from "../components/BeerCard";
import axios from "axios";
import {Beer} from "../@types/Beer";

type BeerListType = Array<Array<string | number>>;

const BeerList = () => {
  const fetchBeers = async () => {
    // Implement API call here when ready
    const beerRes = await fetch(`${import.meta.env.VITE_BAR_API_URL}/beers`, {
      method: "GET",
    });

    const beers = await beerRes.json();
    console.log(beers);

    const purgedBeers = beers.filter(
      (beer: Beer, i: number, self: any) =>
        !self
          .slice(i + 1)
          .some((otherBeer: Beer) => otherBeer.beerName === beer.beerName)
    );

    return await beers;

    // return [
    //   {
    //     name: "Carlsberg",
    //     description: "",
    //     volume: 0.5,
    //     alcoholPercentage: 5.0,
    //   },
    //   {
    //     name: "Grøn Tuborg",
    //     description: "",
    //     volume: 0.5,
    //     alcoholPercentage: 5.0,
    //   },
    //   {
    //     name: "Tuborg Classic",
    //     description: "",
    //     volume: 0.5,
    //     alcoholPercentage: 5.0,
    //   },
    //   {
    //     name: "Albani",
    //     description: "",
    //     volume: 0.5,
    //     alcoholPercentage: 5.0,
    //   },
    //   {
    //     name: "Dansk Pilsner",
    //     description: "",
    //     volume: 0.5,
    //     alcoholPercentage: 5.0,
    //   },
    // ];
  };

  const fetchImages = async ({queryKey}: {queryKey: any}) => {
    let arr = [];
    for (const item of queryKey[1]) {
      if (item.imageUrl) {
        const imageUrlString = await fetch(
          `${import.meta.env.VITE_BAR_API_URL}/files/${item.imageUrl.replace(
            ".png",
            ""
          )}`,
          {
            method: "GET",
          }
        );

        const imageUrl = await imageUrlString.json();
        arr.push(imageUrl.url);
      }
    }

    return arr;
  };

  const beerQuery = useQuery("beers", fetchBeers);

  const imageQuery = useQuery(["images", beerQuery.data], fetchImages);

  if (beerQuery.error) {
    console.log(beerQuery.error);

    return <div>{import.meta.env.VITE_BAR_API_URL}</div>;
  }

  return (
    <div>
      {beerQuery.data?.map((beer: Beer, i: number) => (
        <BeerCard
          key={beer.beerName + i}
          beer={beer}
          img={imageQuery.data ? imageQuery.data[i] : ""}
        />
      ))}
    </div>
  );
};

export default BeerList;
