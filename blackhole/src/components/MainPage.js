import React from "react";
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   zeroNotes: true,
      showForm: false
    };
  }

  toNotes = (e, note) => {
    e.preventDefault();
    console.log(`${note.id}`);
    this.props.history.push(`/notes/${note.id}`);
    // props.getNoteById(note.id);
  };

  toForm = e => {
    e.preventDefault();
    this.props.history.push("/main-page/note-form");
  };

  render() {
    return (
      <div className="main">
        <h1> Satellite Storage </h1>
        {this.props.notes.length === 0 ? (
          <h1> Nothing Stored In Satellite!!</h1>
        ) : (
          <div className="notes">
            {this.props.notes.map(note => {
              return (
                <div
                  onClick={e => this.toNotes(e, note)}
                  key={note.id}
                  className="note"
                >
                  {note.text}
                </div>
              );
            })}
          </div>
        )}
        <button onClick={this.toForm}> Create Note</button>
      </div>
    );
  }
}

// <div className="main">
//   {this.state.showForm ? (
//     <>
//       <NoteForm notes={this.props.notes} />
//       <button onClick={this.toggle}>Back</button>
//     </>
//   ) : (
//     <>
//       <h1> Satellite Storage </h1>
//       <Notes notes={this.props.notes} />
//       <button onClick={this.toggle}>Create New Note</button>
//     </>
//   )}
// </div>
