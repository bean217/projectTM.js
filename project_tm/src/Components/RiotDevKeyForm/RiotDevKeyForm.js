import React from "react";
import './RiotDevKeyForm.css'

import { BACKENDURL } from '../App/constants';

import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import { BufferIcon } from "../BufferIcon/BufferIcon";

export class RiotDevKeyForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
        this.state = {
            key: '',
            errMsg: '',
            isLoading: false,
        };
    }
  
    handleChange(event) {
        this.setState({
            ...this.state,
            key: event.target.value,
        });
    }
  
    handleSubmit(event) {
        // check the key
        this.setState({
            ...this.state,
            errMsg: '',
            isLoading: true,
        });
        fetch(`${BACKENDURL}/check_key`, {
            method: 'POST',
            body: JSON.stringify({ key: this.state.key }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            // res.result is a boolean value indicating if they key is valid
            if (res.result) {
                this.setState({
                    ...this.state,
                    errMsg: '',
                    isLoading: false,
                });
                this.props.onKeyAccept(this.state.key); // pass it to the parent (App) component
            } else {
                this.setState({
                    ...this.state, 
                    errMsg: "Invalid Key", 
                    isLoading: false,
                });
            }
        })
        .catch(err => console.log(`Encountered an error in RiotDevKeyForm::handleSubmit() - ${err}`));

        event.preventDefault();
    }
  
    render() {
        return (<div className="riotdevkeyform">
            <div className="text">
            Enter Riot Dev Key:
            </div>
            <div className="input">
                <form onSubmit={this.state.isLoading ? (e) => e.preventDefault() : this.handleSubmit}>
                    <input readOnly={this.state.isLoading ? true : false} type="text" value={this.state.key} onChange={this.handleChange}></input>
                </form>
            </div>
            <div className="submit">
                <button 
                    style={{display: this.state.isLoading ? "none" : "block"}} 
                    onClick={this.handleSubmit}>
                        Submit
                </button>
            </div>
            <ErrorMsg 
                display={this.state.errMsg.length !== 0}
                errMsg={this.state.errMsg}
            />
            <BufferIcon 
                display={this.state.isLoading}
            />
        </div>);
    }
  }