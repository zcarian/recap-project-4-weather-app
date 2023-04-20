import { useState, useEffect } from "react";

export default function useFetch() {
  const [isGoodWeather, setIsGoodWeather] = useState();
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("Fetched data:",data);
      setIsGoodWeather(data.isGoodWeather);
      setTemperature(data.temperature);
      setLocation(data.location);
      setCondition(data.condition);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(
    () => {
      fetchWeather();
      //This is bonus task however we dont want to overload API again so for now it's fetching only once 
      // const interval = setInterval(() => {
      //   fetchWeather();
      // }, 5000);
      // return () => clearInterval(interval);
    },
    [] /*<= delete this when changing */
  );
  return [isGoodWeather, temperature, location, condition];
}
