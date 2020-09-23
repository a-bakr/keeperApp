import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

export default function CreateArea(props) {
  const [isClickNote, setIsClickNote] = useState(false);

  const [fullInput, setFullInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isClickNote && (
          <input
            onChange={handleChange}
            name="title"
            value={fullInput.title}
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => {
            setIsClickNote(true);
          }}
          name="content"
          value={fullInput.content}
          rows={isClickNote ? "3" : "1"}
          placeholder="Take a note..."
        />
        {isClickNote && (
          <Zoom in={true}>
            <Fab
              onClick={(e) => {
                console.log(fullInput)
                if (fullInput.content && fullInput.title) {
                  props.addNote(fullInput);
                  setFullInput({ title: "", content: "" });
                }
                e.preventDefault();
              }}
              type="submit"
            >
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}
