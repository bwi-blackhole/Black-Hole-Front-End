import React from "react";
import { Link } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";

// const theme = createMuiTheme({
//   palette: {
//     primary: purple
//   },
//   typography: { useNextVariants: true }
// });

export default class Login extends React.Component {
  state = {
    logcreds: {
      logname: "",
      logpassword: ""
    }
  };

  login = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
  };

  handleInput = e => {
    e.persist();
    this.setState(prevState => ({
      logcreds: { ...prevState.logcreds, [e.target.name]: e.target.value }
    }));
  };

  render() {
    return (
      <div className="login">
        <h1> Login </h1>
        <form onSubmit={this.login}>
          <input
            onChange={this.handleInput}
            value={this.state.logcreds.logname}
            name="logname"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={this.handleInput}
            value={this.state.logcreds.logpassword}
            name="logpassword"
            type="password"
            placeholder="Password"
          />

          <button type="submit">Login</button>
          <Link className="link" to="/sign-up">
            <p> Need To Sign Up?</p>
          </Link>
        </form>
      </div>
    );
  }
}
