export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li>{activity.name}</li>
      ))}
    </ul>
  );
}
