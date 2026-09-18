import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

export function useApiData(url) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "error" | "success"

  useEffect(() => {
    let isMounted = true;

    apiClient
      .get(url)
      .then((response) => {
        if (!isMounted) return;
        setData(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error(error);
        if (!isMounted) return;
        setStatus("error");
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, status };
}
