import "./App.css";
import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
