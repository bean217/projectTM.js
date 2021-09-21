import './App.css';
import BackgroundSlider from 'react-background-slider';
import { RiotDevKeyForm } from '../RiotDevKeyForm/RiotDevKeyForm';
import { GetSummonersForm } from '../GetSummonersForm/GetSummonersForm';
import { ViewTeamsForm } from '../ViewTeamsForm/ViewTeamsForm';

import image1 from '../../assets/bg-1.jpg';
import image2 from '../../assets/bg-2.jpg';
import image3 from '../../assets/bg-3.jpg';
import image4 from '../../assets/bg-4.jpg';
import image5 from '../../assets/bg-5.jpg';
import image6 from '../../assets/bg-6.jpg';
import React from 'react';

const FormType = {
  RIOTDEVKEYFORM: "riotdevkeyform",
  GETSUMMONERSFORM: "getsummonersform",
  VIEWTEAMSFORM: "viewteamsform"
}

class App extends React.Component {

  constructor() {
    super();
    this.handleKey = this.handleKey.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    this.state = {
      api_key: "",
      form_current: FormType.RIOTDEVKEYFORM,
      players: {},
    };
    
  }

  handleKey(api_key) {
    console.log(`API_KEY_PASSED_TO_PARENT: ${api_key}`);

    this.setState({
      ...this.state,
      api_key: api_key,
      form_current: FormType.GETSUMMONERSFORM,
     });
  }

  handleAddPlayer(playerObj) {
      console.log("APP Has Received <add>" + playerObj);
      //if (!this.state.players.map(item => item.name).includes(playerObj.name)) {
      if (!this.state.players.hasOwnProperty(playerObj.name)) {
          this.setState({
              ...this.state,
              players: {...this.state.players, [playerObj.name]: playerObj},
          });
      }
      console.log(this.state.players);
  }

  handleRemovePlayer(playerObj) {
    console.log("APP Has Received <del>" + playerObj);
    let newPlayersDict = {...this.state.players};
    delete newPlayersDict[playerObj.name];
    this.setState({
      ...this.state,
      players: newPlayersDict
    });
  }

  render() {
      return (
          <div className="App">
              <header className="App-header">
              </header>

        
              {this.state.form_current === FormType.RIOTDEVKEYFORM && 
                  <RiotDevKeyForm 
                      onKeyAccept={this.handleKey} />}
              {this.state.form_current === FormType.GETSUMMONERSFORM && 
                  <GetSummonersForm 
                      api_key={this.state.api_key}
                      players={Object.values(this.state.players)}
                      onPlayerAdd={this.handleAddPlayer}
                      onPlayerRemove={this.handleRemovePlayer} />}
              {this.state.form_current === FormType.VIEWTEAMSFORM && <ViewTeamsForm />}
  
              <BackgroundSlider 
                  images={[image1, image2, image3, image4, image5, image6]}
                  duration={8}
                  transition={2} />

          </div>
    );
  }
}

export default App;
