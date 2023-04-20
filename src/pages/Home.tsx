import {useEffect, useState} from "react";
import BeerCard from "../components/BeerCard";
import {useQuery} from "react-query";
import BeerList from "../components/BeerList";

const Home: React.FC = () => {
  return (
    <div className="w-full rounded mt-20 p-1 md:w-3/4">
      {<BeerList></BeerList>}
    </div>
  );
};

export default Home;
