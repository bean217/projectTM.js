import './index.css';
import BackgroundSlider from 'react-background-slider';

import { check_api } from './riotApi';

import image1 from './assets/bg-1.jpg';
import image2 from './assets/bg-2.jpg';
import image3 from './assets/bg-3.jpg';
import image4 from './assets/bg-4.jpg';
import image5 from './assets/bg-5.jpg';
import image6 from './assets/bg-6.jpg';
import React from 'react';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      form_current: FormType.RIOTDEVKEYFORM,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="form">
          {this.state.form_current === FormType.RIOTDEVKEYFORM && <RiotDevKeyForm />}
          {this.state.form_current === FormType.GETSUMMONERSFORM && <GetSummonersForm />}
          {this.state.form_current === FormType.VIEWTEAMSFORM && <ViewTeamsForm />}
        </div>
  
        <BackgroundSlider 
          images={[image1, image2, image3, image4, image5, image6]}
          duration={8}
          transition={2}
        />
      </div>
        
    );
  }
}

const FormType = {
  RIOTDEVKEYFORM: "riotdevkeyform",
  GETSUMMONERSFORM: "getsummonersform",
  VIEWTEAMSFORM: "viewteamsform"
}

class RiotDevKeyForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      key: '',
      errMsg: {
        isErr: false,
        msg: "",
      }
    };
  }

  handleChange(event) {
    this.setState({
      key: event.target.value,
      errMsg: this.state.errMsg,
    });
    console.log(this.state.key);
  }

  handleSubmit(event) {
    console.log("HANDLE SUBMIT: " + this.state.key);
    check_api(this.state.key);
    event.preventDefault();
  }

  render() {
    return (<div className="riotdevkeyform">
      <div className="text">
        Enter Riot Dev Key:
      </div>
      <div className="input">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.key} onChange={this.handleChange}></input>
        </form>
      </div>
      <div className="submit">
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
      <ErrorMsg display={this.state.errMsg.isErr} errMsg={this.state.errMsg.msg} />

      
    </div>);
  }
}

class GetSummonersForm extends React.Component {
  render() {
    return (<div className="getsummonersform">
      GetSummonersForm
    </div>);
  }
}

class ViewTeamsForm extends React.Component {
  render() {
    return (<div className="viewteamsform">
      ViewTeamsForm
    </div>);
  }
}

class ErrorMsg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{visibility: this.props.display ? "visible" : "hidden"}} className="errMsg">
        {this.props.errMsg}
      </div>
    );
  }
}

function ErrorForm(props) {
    return (<div className={"error", "form"}>
      {props.msg}
    </div>);
}

export default App;
