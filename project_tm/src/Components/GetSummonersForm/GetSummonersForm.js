import React from "react";
import './GetSummonersForm.css'

import { UploadFile } from "../UploadFile/UploadFile";
import { AddPlayer } from "../AddPlayer/AddPlayer";
import { TournamentTypeSelect } from "../TournamentTypeSelect/TournamentTypeSelect";

export class GetSummonersForm extends React.Component {
    render() {
        return (<div className="getsummonersform">
            <UploadFile />
            <hr id="hr1" />
            <AddPlayer />
            <hr id="hr2" />
            <hr id="hr3" />
            <TournamentTypeSelect />
        </div>);
    }
}