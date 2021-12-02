import React from "react";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import { BACKENDURL, ROLES } from "../App/constants";
import './UploadFile.css'

export class UploadFile extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errMsg: "",
        }
    }

    handleSubmit() {
        this.setState({
            ...this.state,
            errMsg: "",
        });

        const files = document.getElementById('input').files;

        if (files.length === 0) {
            this.setState({
                ...this.state,
                errMsg: "No File Selected",
            });
            return;
        }

        const file = files[0];

        console.log(`Reading file: '${file}'`);

        // function for validating a line in the text file
        const validateData = (line_data) => {
            if (line_data.length !== 3) return false;
            const name = line_data[0];
            if (name.length <= 3 || name.length >= 16) return false;
            const primary = line_data[1];
            const secondary = line_data[2];
            if (!ROLES.includes(primary) || !ROLES.includes(secondary)) return false;
            return true;
        };

        const reader = new FileReader();
        let errCounter = 0;
        reader.onload = async (event) => {
            const file = event.target.result;
            const lines = file.split(/\r\n|\n/);
            await lines.forEach(async (line) => {
                // check if line is empty or is a comment
                if (line.length === 0 || line[0] === '#') return;

                // check line format
                let data = line.split(/,/);
                // if data is valid format, fetch player. Otherwise increment errCounter
                if (!validateData(data)) {
                    errCounter += 1;
                    return;
                }
                // attempt to fetch player
                let summoner = {
                    name: data[0],
                    role1: data[1],
                    role2: data[2],
                };

                await fetch(`${BACKENDURL}/getsummoner`, {
                    method: 'POST',
                    body: JSON.stringify({
                        summonerName: summoner.name,
                        api_key: this.props.api_key,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(res => {
                    // check if result has an error message
                    if (!res.result.hasOwnProperty('errMsg')) {
                        summoner = {...summoner, ...res.result};
                        this.props.onPlayerAdd(summoner);
                    } else {
                        // if so, increment error counter
                        errCounter += 1;
                        this.setState({
                            ...this.state,
                            errMsg: errCounter > 0 ? `Error adding ${errCounter} summoner${errCounter > 1 ? 's' : ''}` : "",
                        });
                    }
                })
                .catch(err => console.log(`Encountered an error in UploadFile::handleSubmit() - ${err}`));
            });
        };
        reader.readAsText(file);
    }

    render() {
        return (
            <div className="uploadfile">
                <div className="text">Upload File:</div>
                <ErrorMsg 
                    display={this.state.errMsg.length !== 0} 
                    errMsg={this.state.errMsg}
                />
                <div className="browse">
                    <input id="input" type="file" name="file" accept=".txt,.csv"></input>
                    <button htmlFor="file" onClick={() => document.getElementById('input').click()}>Upload File</button>
                </div>
                <div className="submit">
                    <button onClick={this.handleSubmit} >Submit</button>
                </div>
                <div className="usage">
                    (<a href="/"><u>?</u></a>)
                </div>
            </div>
        );
    }
}