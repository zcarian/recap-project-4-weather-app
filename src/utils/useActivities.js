// import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

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

export default function useActivities() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: initialActivities,
  });

  function addActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  function deleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return [activities, addActivity, deleteActivity];
}
