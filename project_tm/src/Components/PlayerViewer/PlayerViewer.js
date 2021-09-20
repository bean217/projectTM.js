import React from "react";
import './PlayerViewer.css'
import bracket from './bracket.png'
import { PlayerTag } from "../PlayerTag/PlayerTag";

export class PlayerViewer extends React.Component {
    render() {
        return (
            <div className="playerviewer">
                <div className="text">Summoners</div>
                <div className="list">
                    <ul>
                        {this.props.players.map((player) => (
                            <li key={player.name} value={player}>
                                <PlayerTag 
                                    player={player}
                                    onPlayerRemove={this.props.onPlayerRemove} />
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={bracket} alt="bracket.png" />
                <div className="banner">

                </div>
            </div>
        );
    }
}