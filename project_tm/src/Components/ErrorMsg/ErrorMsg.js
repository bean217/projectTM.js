import React from "react";
import './ErrorMsg.css'

export class ErrorMsg extends React.Component {
    render() {
        return (
            <div style={{display: this.props.display ? "block" : "none"}} className="errMsg">
                {this.props.errMsg}
            </div>
        );
    }
}