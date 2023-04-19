export default function ListHeader({ isGoodWeather }) {
  return (
    <h1>
      {isGoodWeather && isGoodWeather
        ? "The weather is awesome! go outside and:"
        : "Bad weather outside! Here is what you can do now:"}
    </h1>
  );
}
