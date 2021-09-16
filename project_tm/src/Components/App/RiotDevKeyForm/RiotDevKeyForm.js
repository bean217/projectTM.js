import React from "react";

import { ErrorMsg } from "../ErrorMsg/ErrorMsg";

export class RiotDevKeyForm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
        this.state = {
            key: '',
            errMsg: {
                isErr: false,
                msg: "",
            }
        };
    }
  
    handleChange(event) {
        this.setState({
            key: event.target.value,
            errMsg: this.state.errMsg,
        });
        console.log(this.state.key);
    }
  
    handleSubmit(event) {
        console.log("HANDLE SUBMIT: " + this.state.key);
        event.preventDefault();
    }
  
    render() {
        return (<div className="riotdevkeyform">
            <div className="text">
            Enter Riot Dev Key:
            </div>
            <div className="input">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.key} onChange={this.handleChange}></input>
                </form>
            </div>
            <div className="submit">
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
            <ErrorMsg display={this.state.errMsg.isErr} errMsg={this.state.errMsg.msg} />
        </div>);
    }
  }