import './index.css';
import BackgroundSlider from 'react-background-slider';

import image1 from './assets/bg-1.jpg';
import image2 from './assets/bg-2.jpg';
import image3 from './assets/bg-3.jpg';
import image4 from './assets/bg-4.jpg';
import image5 from './assets/bg-5.jpg';
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
          images={[image1, image2, image3, image4, image5]}
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
  render() {
    return (<div className="riotdevkeyform">
      <div class="text">
        Enter Riot Dev Key:
      </div>
      <div class="input">
        <input type="text"></input>
      </div>
      <div class="submit">
        <button>
          Submit
        </button>
      </div>
      
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

function ErrorForm(props) {
    return (<div className={"error", "form"}>
      {props.msg}
    </div>);
}

export default App;
