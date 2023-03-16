import {useEffect, useState} from "react";
import BeerCard from "../components/BeerCard";

type BeerList = Array<Array<string | number>>;

const Home: React.FC = () => {
  const [items, setItems] = useState<BeerList>([]);

  const fetchBeers = () => {
    // Implement API call here when ready
    const beers = [
      [1, "Carlsberg", "", 20.0],
      [2, "Grøn Tuborg", "", 20.0],
      [3, "Tuborg Classic", "", 22.0],
      [4, "Albani", "", 15.0],
      [5, "Dansk Pilsner", "", 10.0],
    ];
    items.length = 0;
    items.push(...beers);
  };

  const fetchImages = async () => {
    const imgUrls: string[] = [];

    for (const item in items) {
      let res = await fetch("https://picsum.photos/300/200", {
        method: "GET",
      });

      imgUrls.push(res.url);
    }

    setItems((prevItems) => {
      return prevItems.map((item, index) => {
        const newItem = [item[0], item[1], imgUrls[index], item[3]];

        return newItem;
      });
    });
  };

  useEffect(() => {
    fetchBeers();

    fetchImages();
  }, []);

  const listItems = items.map((item) => (
    <BeerCard
      key={item[1]}
      title={item[1].toString()}
      img={item[2].toString()}
      price={item[3] as number}
    />
  ));

  return <div className="w-full rounded p-1 md:w-3/4">{listItems}</div>;
};

export default Home;
