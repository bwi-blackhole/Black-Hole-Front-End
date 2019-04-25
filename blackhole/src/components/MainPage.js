import React from "react";
import NoteForm from "./NoteForm";
import Notes from "./Notes";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   zeroNotes: true,
      showForm: false
    };
  }

  toggle = e => {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    return (
      <div className="main">
        {this.state.showForm ? (
          <>
            <NoteForm notes={this.props.notes} />
            <button onClick={this.toggle}>Back</button>
          </>
        ) : (
          <>
            <h1> Satellite Storage </h1>
            <Notes notes={this.props.notes} />
            <button onClick={this.toggle}>Create New Note</button>
          </>
        )}
      </div>
    );
  }
}
