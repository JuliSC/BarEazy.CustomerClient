import React, {useEffect} from "react";
import {QueryKey, useQuery} from "react-query";
import BeerCard from "../components/BeerCard";

type BeerListType = Array<Array<string | number>>;

const BeerList = () => {
  const fetchBeers = () => {
    // Implement API call here when ready
    return [
      {
        beerName: "Carlsberg",
        beerDescription: "",
        beerPrice: 20.0,
        beerVolume: 0.5,
        alcoholPercentage: 5.0,
      },
      {
        beerName: "Grøn Tuborg",
        beerDescription: "",
        beerPrice: 20.0,
        beerVolume: 0.5,
        alcoholPercentage: 5.0,
      },
      {
        beerName: "Tuborg Classic",
        beerDescription: "",
        beerPrice: 22.0,
        beerVolume: 0.5,
        alcoholPercentage: 5.0,
      },
      {
        beerName: "Albani",
        beerDescription: "",
        beerPrice: 15.0,
        beerVolume: 0.5,
        alcoholPercentage: 5.0,
      },
      {
        beerName: "Dansk Pilsner",
        beerDescription: "",
        beerPrice: 10.0,
        beerVolume: 0.5,
        alcoholPercentage: 5.0,
      },
    ];
  };

  const fetchImages = async ({queryKey}: {queryKey: QueryKey}) => {
    let arr = [];
    for (const item in queryKey[1]) {
      let res = await fetch("https://picsum.photos/300/200", {
        method: "GET",
      });

      arr.push(res.url);
    }

    return arr;
  };

  const beerQuery = useQuery("beers", fetchBeers);

  const imageQuery = useQuery(["images", beerQuery.data], fetchImages);

  if (beerQuery.error) return "An error has occurred: " + beerQuery.error;

  return (
    <div>
      {beerQuery.data?.map((beer, i) => (
        <BeerCard
          key={beer.beerName}
          beer={beer}
          img={imageQuery.data ? imageQuery.data[i].toString() : ""}
        />
      ))}
    </div>
  );
};

export default BeerList;
