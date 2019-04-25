import React from "react";

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notes">
        {this.props.notes.map(note => {
          return <div className="note">{note.text}</div>;
        })}
      </div>
    );
  }
}
