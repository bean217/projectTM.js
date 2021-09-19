import React from "react";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './UploadFile.css'

export class UploadFile extends React.Component {
    render() {
        return (
            <div className="uploadfile">
                <div className="text">Upload File:</div>
                <ErrorMsg 
                    display={true} 
                    errMsg={"TEST"}
                />
                <div className="browse">
                    <input id="input" type="file" name="file"></input>
                    <button htmlFor="file" onClick={() => document.getElementById('input').click()}>Upload File</button>
                </div>
                <div className="submit">
                    <button>Submit</button>
                </div>
                <div className="usage">
                    (<a href="/"><u>?</u></a>)
                </div>
            </div>
        );
    }
}