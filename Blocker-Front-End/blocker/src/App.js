import React, { Component } from 'react';
import web3 from './web3';
import greetings from './greetings';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      greetingMsg: '',
      regNum: "UU-1212"
    };
    
  }

  async componentDidMount() {
    const greetingMsg = await greetings.methods.getGreetings().call();

    await greetings.methods.createVehicle().send(this.state.regNum
    )

    const greetingMsg2 = await greetings.methods.getDeployedVehicles().call();


    console.log('hello',greetingMsg)
    console.log('hello',greetingMsg2)

    this.setState({ greetingMsg });
  }

  componentWillMount() {
    if(web3) {
      this.setState({isConnected: true});
    }
  }

  
  render() {
    console.log(web3.eth.getAccounts().then(console.log))
    console.log('hiii', this.state.greetingMsg)
    return (
      <div>
        <h2>Is connected?:</h2><br/>
        {this.state.isConnected?'Connected to local node':'Not Connected'}
    <h1>Greeting message is : {this.state.greetingMsg} </h1>
      </div>
      
    );
  }
}
export default App;