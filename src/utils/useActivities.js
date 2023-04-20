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
  },{
    id: 4,
    name: "Go to a concert",
    isForGoodWeather: false,
  },
  {
    id: 5,
    name: "Have a picnic in the park",
    isForGoodWeather: true,
  },
  {
    id: 6,
    name: "Visit a museum",
    isForGoodWeather: false,
  },
  {
    id: 7,
    name: "Go to a theme park",
    isForGoodWeather: true,
  },
  {
    id: 8,
    name: "Go shopping",
    isForGoodWeather: false,
  },
  {
    id: 9,
    name: "Go to a sports game",
    isForGoodWeather: true,
  },
  {
    id: 10,
    name: "Take a scenic drive",
    isForGoodWeather: true,
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
    if (window.confirm("Are you sure you want to delete this activity")){

      setActivities(activities.filter((activity) => activity.id !== id));
    }
  }

  return [activities, addActivity, deleteActivity];
}
