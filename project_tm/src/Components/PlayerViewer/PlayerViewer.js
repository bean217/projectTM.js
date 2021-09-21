import React from "react";
import './PlayerViewer.css'
import bracket from './bracket.png'
import { PlayerTag } from "../PlayerTag/PlayerTag";
import { SummonerBanner } from "../SummonerBanner/SummonerBanner";

export class PlayerViewer extends React.Component {
    constructor(props) {
        super(props);
        // get datadragon version
        this.state = {
            ddrag_version: null,
            selected_player: null,
        }
    }

    componentDidMount() {
        const getVersion = async () => await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        ...this.state,
                        ddrag_version: res[0],
                    });
                })
                .catch(err => console.log(`Error encountered in PlayerViewer::constructor() - ${err}`));
            getVersion();
    }

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
                                    onPlayerRemove={this.props.onPlayerRemove}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={bracket} alt="bracket.png" />
                <div className="banner">
                    {this.state.selected_player !== null && 
                    <SummonerBanner player={this.state.selected_player}/>}
                </div>
            </div>
        );
    }
}