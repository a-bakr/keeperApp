import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Zoom } from "@material-ui/core";

function Note(props) {
  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p> {props.content} </p>

      <Zoom in={true}>
        <button
          onClick={() => {
            props.deleteNote(props.id);
          }}
        >
          <DeleteIcon />
        </button>
      </Zoom>
    </div>
  );
}

export default Note;
