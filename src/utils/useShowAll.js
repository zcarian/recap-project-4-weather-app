import { useState } from "react";

export default function useShowAll() {
  const [showAll, setShowAll] = useState(false);

  function toggleShowAll() {
    setShowAll(!showAll);
  }

  return [showAll, toggleShowAll];
}
