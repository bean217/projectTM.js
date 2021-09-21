import React from "react";
import './PlayerTag.css';

export class PlayerTag extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.onPlayerRemove(this.props.player);
    }

    render() {
        return (
            <div className="playertag" >
                <div className="name" onClick={() => console.log("CLICKED!")}>
                    {this.props.player.name}
                </div>
                <div className="button" onClick={this.handleRemove}>
                    X
                </div>
            </div>
        );
    }
}