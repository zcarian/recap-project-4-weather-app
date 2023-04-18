import "./App.css";
import React from "react";
import Form from "./components/Form";

function App() {
  function handleAddActivity() {}

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
