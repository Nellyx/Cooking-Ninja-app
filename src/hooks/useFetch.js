import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setdata] = useState(null);
  const [ispending, setispending] = useState(false);
  const [error, seterror] = useState(null);

  const [options, setoptions] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      setispending(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setispending(false);
        setdata(data);
      } catch (error) {
        setispending(false);
        console.log(error);
        seterror("There was an error loading this page");
      }
    };

    fetchdata();
  }, [url]);

  return { data, ispending, error };
};

export default useFetch;
