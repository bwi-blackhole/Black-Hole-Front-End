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
      <div className="sign-flex">
        <div className="sign-left">
           

          <h1>
          
            ~ Welcome to the blackh0le ~
            <br />
          </h1>

            <h3>
            The Reverse Note Taking App
            </h3>
            

            <p>
            <br />
            Do you feel like screaming out loud? Venting out your frustrations without anyone knowing what you really think?
            <br />
            <br />
            Sign up today, and write out all your problems, and when it's all said and done, go ahead and send it to the blackh0le!
            <br />
            <br />
            Or if you might want to come back to your message, go ahead and store it in our sattelite. Don't worry, this is your own personal sattelite, and no one can hack into it!
            </p>
            
          
        </div>
        <div className="Sign-up">
          <div>
            <h1>Sign Up</h1>
          </div>
          <form onSubmit={this.signUp}>
            <input
              onChange={this.handleInput}
              value={this.state.regcreds.regname}
              name="regname"
              type="text"
              label="Name"
              placeholder="Username"
              className="inputField"
            />
            <input
              onChange={this.handleInput}
              value={this.state.regcreds.regpassword}
              name="regpassword"
              type="password"
              label="Password"
              placeholder="Password"
              className="inputField"
            />

            <button type="submit">Submit Form</button>
            <Link className="link" to="/login">
              <p>Already Have An Account?</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

/* <MuiThemeProvider theme={theme}>
            <TextField
              onChange={this.handleInput}
              value={this.state.regcreds.regname}
              name="regname"
              type="text"
              label="Name"
              id="mui-theme-provider-standard-input"
 
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
          </MuiThemeProvider> */
