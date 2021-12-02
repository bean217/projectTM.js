import React from "react";
import './SummonerBanner.css'

export class SummonerBanner extends React.Component {
    render() {
        return (
            <div className="summonerbanner">
                <div className="icon">
                    <img 
                        src={`http://ddragon.leagueoflegends.com/cdn/${this.props.ddrag_version}/img/profileicon/${this.props.player.iconId}.png`}
                        alt="Missing Icon">
                    </img>
                </div>
                <div className="playerdata">
                    <div id="name">{this.props.player.name}</div>
                    <div id="level">{this.props.player.level}</div>
                    {this.props.player.rank !== null ? 
                        <div id="rank">
                            {`${this.props.player.rank.tier} ${this.props.player.rank.rank}`}
                        </div> : ""}

                        {this.props.player.rank !== null ? 
                        (<div id="LP">
                            {`${this.props.player.rank.LP} LP`}
                        </div>) : ""}
                </div>
                <div className="roledata">
                    <div id="role1">{`Primary: ${this.props.player.role1}`}</div>
                    <div id="role2">{`Secondary: ${this.props.player.role2}`}</div>
                </div>
            </div>
        );
    }
}