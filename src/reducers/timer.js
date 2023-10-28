import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 60,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState((prevState) => ({ timer: prevState.timer - 1 }));
      } else {
        this.stopTimer();
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div>
        <Page1 timer={this.state.timer} />
        <Page2 timer={this.state.timer} />
      </div>
    );
  }
}

export default Timer;
