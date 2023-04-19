import "./showAllButton.css";
export default function ShowAllButton({ onShowAllButton }) {
  return (
    <button className="showAllButton" onClick={onShowAllButton}>
      Show all
    </button>
  );
}
