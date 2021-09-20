import React from "react";
import { BACKENDURL } from "../App/constants";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './AddPlayer.css'

const options = ["FILL", "TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];

export class AddPlayer extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            summonerName: "",
            isLoading: false,
            errMsg: "",
        };
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            summonerName: event.target.value,
        });
    }

    handleSubmit(event) {
        const summoner = {
            name: document.getElementById('summonerName').value,
            role1: document.getElementById('role1').value,
            role2: document.getElementById('role2').value,
        };

        if (summoner.name.length === 0) return;

        this.setState({
            ...this.state,
            summonerName: "",
            isLoading: true,
            errMsg: "",
        });

        fetch(`${BACKENDURL}/getsummoner`, {
            method: 'POST',
            body: JSON.stringify({
                summonerName: summoner.name,
                api_key: this.props.api_key,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (!res.result.hasOwnProperty('errMsg')) {
                this.props.onPlayerAdd(res.result);
            } else {
                this.setState({
                    ...this.state,
                    errMsg: res.result.errMsg,
                });
            }

            this.setState({
                ...this.state,
                summonerName: "",
                isLoading: false,
            });
        })
        .catch(err => console.log(`Encountered an error in AddPlayer::handleSubmit() - ${err}`));

        console.log("SN: " + this.state.summonerName);
        
        console.log("name: " + summoner.name);
        console.log("role1: " + summoner.role1);
        console.log("role2: " + summoner.role2);
    }

    render() {
        return (
            <div className="addplayer">
                <div className="text">Add Summoner:</div>
                <ErrorMsg 
                    display={this.state.errMsg.length === 0 ? false : true} 
                    errMsg={this.state.errMsg}
                />


                <input 
                    id="summonerName"
                    name="summonerName"
                    type="text"
                    readOnly={this.state.isLoading ? true : false}
                    placeholder="Summoner Name"
                    value={this.state.summonerName} 
                    onChange={this.handleChange}>
                </input>


                <select name="role1" id="role1" >
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <select name="role2" id="role2" >
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <button onClick={this.handleSubmit}>
                    +
                </button>
            </div>
        );
    }
}