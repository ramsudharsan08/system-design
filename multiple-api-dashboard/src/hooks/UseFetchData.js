import { useEffect, useState } from "react";

export default function useFetchData(apiFunc, initialParams = {}) {
  const [data, setData] = useState([]);
  const [params, setParams] = useState(initialParams);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiFunc(params)
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [params, apiFunc]);

  return {
    data,
    loading,
    error,
    params,
    setParams,
  };
}