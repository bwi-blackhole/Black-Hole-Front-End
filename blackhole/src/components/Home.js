import React from "react";

import '../home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="homeWrap"> 
        

        <div className="infoBox">
          <h2>
            Welcome to the blackh0le
          </h2>

          <p>
            alsdjfa;dgkaaklgjag
            agajgiopaegaioeghae
          </p>

          <p>
            alsdjfa;dgkaaklgjag
            agajgiopaegaioeghae
          </p>
          
          <button className="signButton"> 
            <a> Sign Up </a>
          </button>

          <button className="logButton"> 
            <a> Log In </a> 
          </button>
        </div>
      
      </div>
    )
    
  }
}
