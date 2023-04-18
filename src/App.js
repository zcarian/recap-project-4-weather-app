import "./App.css";
import React from "react";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./components/List";

const initialActivities = [
  {
    id: 1,
    name: "Go to the beach",
    isForGoodWeather: true,
  },
  {
    id: 2,
    name: "Go to the mountains",
    isForGoodWeather: true,
  },
  {
    id: 3,
    name: "Go to the cinema",
    isForGoodWeather: false,
  },
];

function App() {
  const [activities, setActivities] = useState(initialActivities);
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
  useEffect(() => {
    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    console.log("activities: ", activities);
  }

  function handleDeleteButton(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <>
      <List activities={activities} onDeleteButton={handleDeleteButton} />
      <Form onAddActivity={handleAddActivity} isGoodWeather={isGoodWeather} />
    </>
  );
}

export default App;
