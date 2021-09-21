import React from "react";
import './PlayerTag.css';

export class PlayerTag extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.state = {
            isSelected: false,
        };
    }

    handleRemove() {
        this.props.onPlayerRemove(this.props.player);
    }

    handleSelected() {
        this.props.onTagToggle();
    }

    render() {
        return (
            <div className="playertag" >
                <div 
                    className="name" 
                    onClick={this.handleSelected}
                    style={{backgroundColor: this.props.isSelected ? "lightblue" : ""}}>
                        {this.props.player.name}
                </div>
                <div 
                    className="button" 
                    onClick={this.handleRemove}>
                    X
                </div>
            </div>
        );
    }
}