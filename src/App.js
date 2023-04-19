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

  const isGoodWeather = useFetch();

  const [activities, handleAddActivity, handleDeleteActivity] = useActivities();

  return (
    <>
      <ListHeader isGoodWeather={isGoodWeather} />
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
    </>
  );
}

export default App;
