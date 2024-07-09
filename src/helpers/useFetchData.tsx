import { useState, useEffect } from "react";

export interface Product {
  title: string;
  description: string;
}

const useFetchData = () => {
  const [data, setData] = useState<Array<Product>>([]);

  const URL: string = "https://dummyjson.com/products";

  useEffect(() => {
    (async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData?.products);
    })();
  }, []);

  return data;
};

export default useFetchData;
