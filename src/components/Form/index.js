import SubmitButton from "../SubmitButton";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.isForGoodWeather = Boolean(data.isForGoodWeather);
    onAddActivity(data);
    console.log("data: ", data);
    event.target.reset();

    // console.log("data is checked:", data.isForGoodWeather);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Activity</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="good-weather-activity">Good weather activity</label>
      <input
        type="checkbox"
        id="good-weather-activity"
        name="isForGoodWeather"
      />
      <SubmitButton />
    </form>
  );
}
