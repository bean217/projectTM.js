import React from "react";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './TournamentTypeSelect.css'

export class TournamentTypeSelect extends React.Component {
    render() {
        return (
            <div className="tournamenttypeselect">
                <div className="text">Tournament Type:</div>
                <ErrorMsg 
                    display={true} 
                    errMsg={"TEST"}
                />
                <select name="tournamenttype">
                    <option value="TEMP">TEMP</option>
                </select>
                <button>
                    Generate
                </button>
            </div>
        );
    }
}