import "./form.css";
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
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <div className="checkbox">
        <label htmlFor="good-weather-activity">Good weather activity</label>
        <input
          type="checkbox"
          id="good-weather-activity"
          name="isForGoodWeather"
        />
      </div>
      <SubmitButton />
    </form>
  );
}
