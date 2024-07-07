// useFetchData.tsx
import { useState, useEffect } from "react";

const useFetchData = (URL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [URL]); // Dependency array with URL to refetch when URL changes

  return data;
};

export default useFetchData;
