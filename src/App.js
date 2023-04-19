import "./App.css";
import React from "react";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import ShowAllButton from "./components/ShowAllButton";
import ListHeader from "./components/ListHeader";

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
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });
  const [isGoodWeather, setIsGoodWeather] = useState();
  const [showAll, setShowAll] = useState(false);

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
    // const interval = setInterval(() => {
    //   fetchWeather();
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  function handleDeleteButton(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function handleShowAllButton() {
    setShowAll(!showAll);
  }
  return (
    <>
      <main>
        <ListHeader isGoodWeather={isGoodWeather} />
        <section className="entries">
          <List
            activities={activities}
            onDeleteButton={handleDeleteButton}
            isGoodWeather={isGoodWeather}
            ifShowAll={showAll}
          />
          <ShowAllButton onShowAllButton={handleShowAllButton} />
        </section>
        <Form onAddActivity={handleAddActivity} />
      </main>
    </>
  );
}

export default App;
