import "./list.css";
import ListElement from "../ListElement";

export default function List({ activities, isGoodWeather, onDeleteButton }) {
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather is awesome! go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </h1>

      <ul>
        {activities
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((activity) => (
            <ListElement
              key={activity.id}
              activity={activity}
              onDeleteButton={onDeleteButton}
            />
          ))}
      </ul>
    </>
  );
}
