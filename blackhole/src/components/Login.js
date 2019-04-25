import React from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: purple
  },
  typography: { useNextVariants: true }
});

export default class Login extends React.Component {
  state = {
    logcreds: {
      logname: "",
      logpassword: ""
    }
  };

  login = e => {
    e.preventDefault();
    this.props.history.push("/protected");
  };

  handleInput = e => {
    e.persist();
    this.setState(prevState => ({
      logcreds: { ...prevState.logcreds, [e.target.name]: e.target.value }
    }));
  };

  render() {
    return (
      <div className="Sign-up">
        <h1> Login </h1>
        <form onSubmit={this.login}>
          <MuiThemeProvider theme={theme}>
            <TextField
              onChange={this.handleInput}
              value={this.state.logcreds.logname}
              name="logname"
              type="text"
              label="Name"
              id="mui-theme-provider-standard-input"
              className="input"
            />
            <TextField
              onChange={this.handleInput}
              value={this.state.logcreds.logpassword}
              name="logpassword"
              type="password"
              label="Password"
              id="mui-theme-provider-standard-input"
              className="input"
            />
          </MuiThemeProvider>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
