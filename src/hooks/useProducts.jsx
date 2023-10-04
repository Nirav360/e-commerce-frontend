import { useEffect, useState } from "react";

export const useProducts = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch(url);
      const json = await response.json();
      setIsPending(false);
      setData(json);
    };
    fetchData();
  }, [url]);
  return { data, isPending };
};
