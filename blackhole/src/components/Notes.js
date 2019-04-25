import React from "react";

const Notes = props => {
  const note = props.notes.find(note => `${note.id}` === props.match.params.id);

  const back = e => {
    e.preventDefault();
    props.history.push("/main-page");
    console.log("hi");
  };

  return (
    <div className="single-note">
      <div className="single-text">
        <h3> {note.text}</h3>
      </div>
      <div className="single-btn">
        <button>Edit</button>
        <button onClick={back}>Back</button>
      </div>
    </div>
  );
};

export default Notes;
