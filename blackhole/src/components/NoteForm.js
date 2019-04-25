import React from "react";

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="note-form">
        <h1>Say Goodbye To All Of Your Problems</h1>
        <textarea
          placeholder="Vent it all away..."
          value={this.state.text}
          type="text"
          name="text"
          onChange={this.handleInput}
        />
        <div className="storage-btn">
          <button> Blackhole </button>
          <button> Store In Satellite</button>
        </div>
      </div>
    );
  }
}
