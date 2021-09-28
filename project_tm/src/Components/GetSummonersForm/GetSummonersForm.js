import React from "react";
import './GetSummonersForm.css'

import { UploadFile } from "../UploadFile/UploadFile";
import { AddPlayer } from "../AddPlayer/AddPlayer";
import { PlayerViewer } from "../PlayerViewer/PlayerViewer";
import { TournamentTypeSelect } from "../TournamentTypeSelect/TournamentTypeSelect";

export class GetSummonersForm extends React.Component {

    render() {
        return (<div className="getsummonersform">
            <UploadFile 
                api_key={this.props.api_key}
                onPlayerAdd={this.props.onPlayerAdd} />
            <hr id="hr1" />
            <AddPlayer 
                api_key={this.props.api_key} 
                onPlayerAdd={this.props.onPlayerAdd} />
            <hr id="hr2" />
            <PlayerViewer
                players={this.props.players}
                onPlayerRemove={this.props.onPlayerRemove} />
            <hr id="hr3" />
            <TournamentTypeSelect players={this.props.players} />
        </div>);
    }
}