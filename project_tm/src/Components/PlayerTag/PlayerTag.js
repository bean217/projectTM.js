import React from "react";
import './PlayerTag.css';

export class PlayerTag extends React.Component {
    render() {
        return (
            <div className="playertag">
                <div className="name">
                    {this.props.name}
                </div>
                <button>
                    x
                </button>
            </div>
        );
    }
}