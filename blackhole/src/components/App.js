import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./SignUp";
import Login from "./Login";
import MainPage from "./MainPage";
import Notes from "./Notes";
import NoteForm from "./NoteForm";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">
              SignUp
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink exact to="/main-page">
              Main Page
            </NavLink>
            {/* <NavLink to="/main-page/note-form">Note Form</NavLink> */}
          </div>
        </nav>
        <div>
          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/main-page" component={MainPage} />
          <PrivateRoute path="/notes/:id" component={Notes} />
          <PrivateRoute path="/main-page/note-form" component={NoteForm} />
        </div>
      </Router>
    );
  }
}
