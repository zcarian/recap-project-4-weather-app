import "./showAllButton.css";
export default function ShowAllButton({ onShowAllButton, ifShowAll }) {
  return (
    <button onClick={onShowAllButton}>
      {ifShowAll ? "Show less" : "Show all"}
    </button>
  );
}
