import React, { Component } from 'react';
import './App.css';

import web3 from "./web3";
import lottery from './lottery';

class App extends Component {
  // Can use this instead of using the constructor
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
  }

  async componentDidMount() {
    // Enable ethereum on the webapge
    window.ethereum.enable();
    const manager = await lottery.methods.manager().call();
    this.updatePlayernBalance();

    this.setState({ manager })
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." })
    
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ message: 'You have been entered!' })
    this.updatePlayernBalance();
  }

  onClick = async (event) => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." })
    
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: 'A winner has been picked' })
    this.updatePlayernBalance();
  }

  updatePlayernBalance = async () => {
    const players = await lottery.methods.getPlayers().call();
    // Balance inside our eth contract
    const balance = await web3.eth.getBalance(lottery.options.address); 
    this.setState({ players, balance })
  }

  render() {
    const { manager, players, balance, value, message } = this.state
    return (
      <div className="App">
        <h2>Lottery Contract</h2>
        <p>This Contract is managed by {manager}</p>
        <p>There are currently {players.length} people entered, competiting to win {web3.utils.fromWei(balance, 'ether')} ether!</p>

        <hr />

        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input 
              value={value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick} >Pick a winner!</button>

        <hr />

        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
