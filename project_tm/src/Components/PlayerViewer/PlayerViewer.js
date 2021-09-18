import React from "react";
import './PlayerViewer.css'
import bracket from './bracket.png'

export class PlayerViewer extends React.Component {
    render() {
        return (
            <div className="playerviewer">
                <div className="text">Summoners</div>
                <div className="list">

                </div>
                <img src={bracket} />
                <div className="banner">

                </div>
            </div>
        );
    }
}