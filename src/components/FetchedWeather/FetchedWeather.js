import ListHeader from "../ListHeader";

export default function FetchedWeather({
  isGoodWeather,
  temperature,
  location,
  condition,
}) {
  return (
    <>
      <ListHeader isGoodWeather={isGoodWeather} />

      <section
        className={`weatherInfo ${
          isGoodWeather ? "weatherInfo--good" : "weatherInfo--bad"
        }`}
      >
        <h2>{temperature}°</h2>
        <span>{condition}</span>

        <p>Location {location}</p>
      </section>
    </>
  );
}
