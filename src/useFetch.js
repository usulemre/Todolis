import { useEffect, useState } from "react";
import page from "./page";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
export default function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProduct = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(page(data));
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return { data, loading };
}
