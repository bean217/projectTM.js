import React from "react";
import './SummonerBanner.css'

export class SummonerBanner extends React.Component {
    render() {
        return (
            <div className="summonerbanner">
                <img 
                    src={`http://ddragon.leagueoflegends.com/cdn/${this.props.ddrag_version}/img/profileicon/${this.props.player.iconId}.png`}
                    alt="Missing Icon">
                </img>
            </div>
        );
    }
}