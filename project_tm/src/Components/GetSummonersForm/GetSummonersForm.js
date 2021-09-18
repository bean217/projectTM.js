import React from "react";
import './GetSummonersForm.css'

import { UploadFile } from "../UploadFile/UploadFile";
import { PlayerViewer } from "../PlayerViewer/PlayerViewer";
import { TournamentTypeSelect } from "../TournamentTypeSelect/TournamentTypeSelect";

export class GetSummonersForm extends React.Component {
    render() {
        return (<div className="getsummonersform">
            <UploadFile />
            <hr id="hr1" />
            <PlayerViewer />
            <hr id="hr2" />
            <hr id="hr3" />
            <TournamentTypeSelect />
        </div>);
    }
}