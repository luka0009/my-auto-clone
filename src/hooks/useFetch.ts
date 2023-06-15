import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [url]);

  function refetch() {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }

  return { isLoading, error, data, refetch };
}
