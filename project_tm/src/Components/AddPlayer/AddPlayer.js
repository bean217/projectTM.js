import React from "react";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './AddPlayer.css'

export class AddPlayer extends React.Component {
    render() {
        return (
            <div className="addplayer">
                <div className="text">Add Summoner:</div>
                <ErrorMsg 
                    display={true} 
                    errMsg={"TEST"}
                />
                <input type="text"></input>
                <select name="roles" id="roles1">
                    <option value="FILL">FILL</option>
                    <option value="TOP">TOP</option>
                    <option value="JUNGLE">JUNGLE</option>
                    <option value="MID">MID</option>
                    <option value="ADC">ADC</option>
                    <option value="SUPPORT">SUPPORT</option>
                </select>
                <select name="roles" id="roles2">
                    <option value="FILL">FILL</option>
                    <option value="TOP">TOP</option>
                    <option value="JUNGLE">JUNGLE</option>
                    <option value="MID">MID</option>
                    <option value="ADC">ADC</option>
                    <option value="SUPPORT">SUPPORT</option>
                </select>
                <button>+</button>
            </div>
        );
    }
}