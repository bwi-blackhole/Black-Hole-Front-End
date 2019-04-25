import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./components/MainPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <>
        <nav>
          <div className="logo">
            <a className="bhlogo"> blackh0le</a>
          </div>
          <div className="nav-links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/sign-up">SignUp</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/main-page">Main Page</NavLink>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path="/protected" component={MainPage} /> */}
        <Route path="/main-page" component={MainPage} />
      </>
    );
  }
}
