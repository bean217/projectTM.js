import React from "react";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './PlayerViewer.css'

export class PlayerViewer extends React.Component {
    render() {
        return (
            <div className="playerviewer">
                <div className="text">Add Player:</div>
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