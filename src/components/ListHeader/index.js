import "./listHeader.css";
export default function ListHeader({ isGoodWeather }) {
  return (
    <header className="header">
      <h1>
        {isGoodWeather && isGoodWeather
          ? "Bad weather outside! Here is what you can do now:"
          : "The weather is awesome! go outside and:"}
      </h1>
    </header>
  );
}
