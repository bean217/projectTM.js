import React from "react";
import './GetSummonersForm.css'

import { UploadFile } from "../UploadFile/UploadFile";

export class GetSummonersForm extends React.Component {
    render() {
        return (<div className="getsummonersform">
            <UploadFile />
            <hr/>
        </div>);
    }
}