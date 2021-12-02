import React from "react";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './TournamentTypeSelect.css'

const algos = require("../../matchmaking_algorithms/algos");

export class TournamentTypeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleTypeSelect = this.handleTypeSelect.bind(this);
    }

    handleTypeSelect(algo) {
        const validate = algo.validate;
        const generate = algo.generate;
        
    }

    render() {
        return (
            <div className="tournamenttypeselect">
                <div className="text">Tournament Type:</div>
                <ErrorMsg 
                    display={true} 
                    errMsg={"TEST"}
                />
                <select id="tournamenttype" name="tournamenttype">
                    { Object.keys(algos).map(
                        // a tournament type will only appear if the player list meets an algorithm's requirements
                        (algo) => (algos[algo].validate(this.props.players) ? <option key={algo} value={algo}>{algo}</option> : "")
                    ) }
                </select>
                <button onClick={() => this.handleTypeSelect(
                    // gets selected algorithm based on key in algos dict
                    algos[document.getElementById('tournamenttype').value]
                )}>
                    Generate
                </button>
            </div>
        );
    }
}