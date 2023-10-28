import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Countdown from './components/Countdown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        <Link to='/page1'>page 1</Link>
        <Countdown />
        <Link to='/page2'>page 2</Link>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {this.state.count}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
//import logo from './logo.svg';
//import './App.css';
//import Countdown from './components/Countdown';

//class App extends Component {
//    constructor(props) {
//    super(props);
//    this.state = {
//      count: 0
//    };
//    this.handleIncrement = this.handleIncrement.bind(this);
//  }

//  handleIncrement() {
//    this.setState({ count: this.state.count + 1 });
//  }

////function App() {
//  return (
//    <div className="App">
//      <Countdown />
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//          {this.state.count}
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;
