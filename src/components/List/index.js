import DeleteButton from "../DeleteButton";

export default function List({ activities, isGoodWeather, onDeleteButton }) {
  return (
    <ul>
      {activities &&
        activities
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <DeleteButton id={activity.id} onDeleteButton={onDeleteButton} />
            </li>
          ))}
    </ul>
  );
}
