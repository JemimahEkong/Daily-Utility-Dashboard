import React, { useState } from "react";

function Notes() {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNotesList([...notesList, note]);
      setNote("");
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notesList.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
