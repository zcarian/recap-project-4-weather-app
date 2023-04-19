import ListElement from "../ListElement";

export default function List({
  activities,
  isGoodWeather,
  onDeleteButton,
  ifShowAll,
}) {
  return (
    <ul>
      {activities
        .filter((activity) =>
          ifShowAll ? true : activity.isForGoodWeather === isGoodWeather
        )
        .map((activity) => (
          <ListElement
            key={activity.id}
            activity={activity}
            onDeleteButton={onDeleteButton}
          />
        ))}
    </ul>
  );
}
