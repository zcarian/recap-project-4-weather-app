import ListElement from "../ListElement";

export default function List({
  activities,
  isGoodWeather,
  onDeleteButton,
  ifShowAll,
}) {
  return (
    <>
      <h1>
        {isGoodWeather && isGoodWeather
          ? "The weather is awesome! go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </h1>

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
    </>
  );
}
