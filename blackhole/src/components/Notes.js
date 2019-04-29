import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import EditForm from "./EditForm";

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updatingNoteId: false
    };
  }

  back = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
    console.log("hi");
  };
  render() {
    const note = this.props.notes.find(
      note => `${note.creator_id}` === this.props.match.params.id
    );

    return (
      <>
        {this.state.updatingNoteId ? (
          <EditForm />
        ) : (
          <div className="single-note">
            <div className="single-text">
              <h3> {note.body}</h3>
            </div>
            <div className="single-btn">
              <button>Edit</button>
              <button onClick={this.back}>Back</button>
            </div>
            <p className="small">
              Created on {moment().format("MMMM Do YYYY")}
            </p>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
  {}
)(Notes);
