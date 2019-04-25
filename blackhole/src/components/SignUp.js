import React from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

import '../signUp.css';



const theme = createMuiTheme({
  palette: {
    primary: red
  },
  typography: { useNextVariants: true }
});

export default class SignUp extends React.Component {
  state = {
    regcreds: {
      regname: "",
      regpassword: ""
    }
  };

  signUp = e => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  handleInput = e => {
    e.persist();
    this.setState(prevState => ({
      regcreds: { ...prevState.regcreds, [e.target.name]: e.target.value }
    }));
  };

  render() {
    return (
      <div>
        <div></div>
      <div className="Sign-up">
        <div>
          <h1 className="SUh1">Sign Up</h1>
        </div>
        <form className="theForm" onSubmit={this.signUp}>
          <MuiThemeProvider theme={theme}>
            <TextField
              onChange={this.handleInput}
              value={this.state.regcreds.regname}
              name="regname"
              type="text"
              label="Name"
              id="mui-theme-provider-standard-input"
              className="input"
            />
            <TextField
              onChange={this.handleInput}
              value={this.state.regcreds.regpassword}
              name="regpassword"
              type="password"
              label="Password"
              id="mui-theme-provider-standard-input"
              className="input"
            />
          </MuiThemeProvider>
          <button type="submit">Submit Form</button>
        </form>
      </div>
      </div>
    );
  }
}
