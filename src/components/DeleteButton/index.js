import "./deleteButton.css";
export default function DeleteButton({ onDeleteButton, id }) {
  return <button onClick={() => onDeleteButton(id)}>✕</button>;
}
