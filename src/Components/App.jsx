import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleClicked(fullInput) {
    setNotes((prev) => {
      return [...prev, fullInput];
    });
  }

  function deleteNote(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />

      <CreateArea addNote={handleClicked} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
