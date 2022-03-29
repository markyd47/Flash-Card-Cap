import React from "react";
import { useHistory } from "react-router-dom";

function EditDeckCancelButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      class="btn btn-secondary mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Cancel
    </button>
  );
}

export default EditDeckCancelButton;