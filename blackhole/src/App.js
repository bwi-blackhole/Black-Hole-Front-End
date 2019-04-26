import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./components/MainPage";
import Notes from "./components/Notes";
import data from "./components/data";
import NoteForm from "./components/NoteForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: data });
  }

  // updateNotes = newNotes => {
  //   this.setState({ notes: [...this.state.notes, newNotes] })
  // }

  render() {
    return (
      <>
        <nav>
          <div className="nav-links">
          <NavLink to="/sign-up" className="bhLogo">blackh0le</NavLink>

            /*
            <NavLink exact to="/">
              Home
            </NavLink>
            
            
            <NavLink to="/login">Login</NavLink>
            <NavLink exact to="/main-page">
              Main Page
            </NavLink>
            <NavLink to="/main-page/note-form">Note Form</NavLink>
          </div>
        </nav>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          {/* <PrivateRoute exact path="/main-page" component={MainPage} /> */}
          <Route
            exact
            path="/main-page"
            render={props => <MainPage {...props} notes={this.state.notes} />}
          />
          <Route
            path="/main-page/note-form"
            render={props => <NoteForm {...props} notes={this.state.notes} />}
          />
          <Route
            exact
            path="/notes/:id"
            render={props => <Notes {...props} notes={this.state.notes} />}
          />
        </div>
      </>
    );
  }
}
