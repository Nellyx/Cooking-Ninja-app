import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setdata] = useState(null);
  const [ispending, setispending] = useState(false);
  const [error, seterror] = useState(null);
  const [options, setoptions] = useState(null);

  const postData = postData => {
    setoptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async fetchoptions => {
      setispending(true);

      try {
        const response = await fetch(url, {
          ...fetchoptions,
          signal: controller.signal
        });

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

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { data, ispending, error, postData };
};

export default useFetch;
