import "./listHeader.css";
export default function ListHeader({ isGoodWeather }) {
  return (
    <header className="header">
      <h1>
        {isGoodWeather && isGoodWeather
          ? "The weather is awesome! go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </h1>
    </header>
  );
}
