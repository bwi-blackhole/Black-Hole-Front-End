import React from "react";
import moment from "moment";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h1> 
          Messing with Moment.js for tmrw
        </h1>
        
        <h4>
          Will expire on
          {moment()
            .add(4, "day")
            .format(" MM-DD-YYYY")}
        </h4>
      </>
    );
  }
}
