import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
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
    message: '',
    errorMsg: '',
    loading: false
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    this.updatePlayernBalance();

    this.setState({ manager })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    // Enable ethereum on the webapge
    await window.ethereum.enable();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success...", loading: true, errorMsg: "" })
    
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
    } catch(err) {
      this.setState({ errorMsg: err.message })
    }
    
    this.setState({ message: 'You have been entered!', loading: false })
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
        <h1>Lottery Contract</h1>
        <p>This Contract is managed by {manager}</p>
        <p>There are currently {players.length} people entered, competiting to win {web3.utils.fromWei(balance, 'ether')} ether!</p>

        <hr />

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <h3>Want to try your luck?</h3>
          <div>
            <label>Amount of ether to enter </label> <br />
            <Input 
              value={value}
              onChange={event => this.setState({ value: event.target.value })}
              placeholder="in ether"
            />
          </div>
          <Button loading={this.state.loading} primary style={{marginTop: "10px"}}>Enter</Button>
          <Message error header="Oops!" content={this.state.errorMsg} />
        </Form>

        <hr />

        <h3>Ready to pick a winner?</h3>
        <Button onClick={this.onClick} basic color='blue'>Pick a winner!</Button>

        <hr />

        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
