import "./App.css";
import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import ShowAllButton from "./components/ShowAllButton";
import useFetch from "./utils/useFetch.js";
import useActivities from "./utils/useActivities";
import useShowAll from "./utils/useShowAll";
import FetchedWeather from "./components/FetchedWeather/FetchedWeather";

function App() {
  const [showAll, handleShowAllButton] = useShowAll();

  const [isGoodWeather, temperature, location, condition] = useFetch();

  const [activities, handleAddActivity, handleDeleteActivity] = useActivities();

  return (
    <main>
      <FetchedWeather
        temperature={temperature}
        location={location}
        condition={condition}
      />

      <section className="entries">
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
      </section>
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
