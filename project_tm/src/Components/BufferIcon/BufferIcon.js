import React from "react";
import './BufferIcon.css';
import loadGif from './buffer.gif';

export class BufferIcon extends React.Component {
    render() {
        return (
            <img 
                style={{display: this.props.display ? "block" : "none"}} 
                src={loadGif} alt="Loading..." 
                className="bufferIcon"
            />
        );
    }
}