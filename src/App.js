import "./App.css";
import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import ShowAllButton from "./components/ShowAllButton";
import ListHeader from "./components/ListHeader";
import useFetch from "./utils/useFetch.js";
import useActivities from "./utils/useActivities";
import useShowAll from "./utils/useShowAll";

function App() {
  const [showAll, handleShowAllButton] = useShowAll();

  const [isGoodWeather, temperature, location, condition] = useFetch();

  const [activities, handleAddActivity, handleDeleteActivity] = useActivities();

  return (
    <main>
      <ListHeader isGoodWeather={isGoodWeather} />
      <section>
        <h2>{temperature}°</h2>
        <p>Location {location}</p>
        <span>{condition}</span>
      </section>

      <List
        activities={activities}
        onDeleteButton={handleDeleteActivity}
        isGoodWeather={isGoodWeather}
        ifShowAll={showAll}
      />
      <ShowAllButton
        onShowAllButton={handleShowAllButton}
        ifShowAll={showAll}
      />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
