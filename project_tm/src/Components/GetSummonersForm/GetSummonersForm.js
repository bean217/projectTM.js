import React from "react";
import './GetSummonersForm.css'

import { UploadFile } from "../UploadFile/UploadFile";
import { AddPlayer } from "../AddPlayer/AddPlayer";
import { PlayerViewer } from "../PlayerViewer/PlayerViewer";
import { TournamentTypeSelect } from "../TournamentTypeSelect/TournamentTypeSelect";

export class GetSummonersForm extends React.Component {
    render() {
        return (<div className="getsummonersform">
            <UploadFile />
            <hr id="hr1" />
            <AddPlayer api_key={this.props.api_key} />
            <hr id="hr2" />
            <PlayerViewer />
            <hr id="hr3" />
            <TournamentTypeSelect />
        </div>);
    }
}