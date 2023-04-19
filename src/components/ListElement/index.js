import DeleteButton from "../DeleteButton";

export default function ListElement({ activity, onDeleteButton }) {
  return (
    <li>
      {activity.name}
      <DeleteButton id={activity.id} onDeleteButton={onDeleteButton} />
    </li>
  );
}
