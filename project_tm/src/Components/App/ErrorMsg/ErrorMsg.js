import React from "react";

export class ErrorMsg extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div style={{visibility: this.props.display ? "visible" : "hidden"}} className="errMsg">
          {this.props.errMsg}
        </div>
      );
    }
  }
  
  function ErrorForm(props) {
      return (<div className={"error", "form"}>
        {props.msg}
      </div>);
  }