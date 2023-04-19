import { useState, useEffect } from "react";

export default function useFetch() {
  const [isGoodWeather, setIsGoodWeather] = useState();

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("data fetched");
      setIsGoodWeather(data.isGoodWeather);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(
    () => {
      fetchWeather();
      // const interval = setInterval(() => {
      //   fetchWeather();
      // }, 5000);
      // return () => clearInterval(interval);
    },
    [] /*<= delete this when changing back to 5 sec intervall*/
  );
  return isGoodWeather;
}
