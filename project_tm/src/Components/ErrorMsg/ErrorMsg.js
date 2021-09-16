import React from "react";
import './ErrorMsg.css'

export class ErrorMsg extends React.Component {
    render() {
        return (
            <div style={{visibility: this.props.display ? "visible" : "hidden"}} className="errMsg">
                {this.props.errMsg}
            </div>
        );
    }
}