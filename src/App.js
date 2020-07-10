import React, { Component } from 'react';
import './App.css';

import web3 from "./web3";
import lottery from './lottery';

class App extends Component {
  // Can use this instead of using the constructor
  state = {
    manager: '',
    players: [],
    balance: ''
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    // Balance inside our eth contract
    const balance = await web3.eth.getBalance(lottery.options.address); 

    this.setState({ manager, players, balance })
  }

  render() {
    const { manager, players, balance } = this.state
    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This Contract is managed by {manager}</p>
        <p>There are currently {players.length} people entered, competiting to win {web3.utils.fromWei(balance, 'ether')} ether!</p>
      </div>
    );
  }
}

export default App;
