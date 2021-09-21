import React from "react";
import './PlayerViewer.css'
import bracket from './bracket.png'
import { PlayerTag } from "../PlayerTag/PlayerTag";
import { SummonerBanner } from "../SummonerBanner/SummonerBanner";

export class PlayerViewer extends React.Component {
    constructor(props) {
        super(props);
        // get datadragon version
        this.handleTagToggle = this.handleTagToggle.bind(this);
        this.state = {
            ddrag_version: null,
            selected_player: null,
        }
    }

    handleTagToggle(player) {
        if (this.state.selected_player === null) {
            // if there is currently no selected player
            this.setState({
                ...this.state,
                selected_player: player,
            });
        } else {
            if (this.state.selected_player.name === player.name) {
                // if the selected player is being deselected
                this.setState({
                    ...this.state,
                    selected_player: null,
                });
            } else {
                // if the selected player is a different player
                this.setState({
                    ...this.state,
                    selected_player: player,
                });
            }
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
                                    onPlayerRemove={this.props.onPlayerRemove}
                                    onTagToggle={() => this.handleTagToggle(player)}
                                    isSelected={
                                        this.state.selected_player !== null && 
                                        this.state.selected_player.name === player.name
                                    }/>
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={bracket} alt="bracket.png" />
                <div className="banner">
                    {this.state.selected_player !== null && 
                    <SummonerBanner 
                        player={this.state.selected_player}
                        ddrag_version={this.state.ddrag_version} />}
                </div>
            </div>
        );
    }
}