//import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import Countdown from './Countdown';

//class Page2 extends Component {
//  constructor(props) {
//    super(props);

//    this.state = {
//      timer: props.timer,
//    };
//  }

//  static getDerivedStateFromProps(props, state) {
//    if (props.timer !== state.timer) {
//      return { timer: props.timer };
//    }

//    return null;
//  }

//  render() {
//    return (
//      <div>
//        <h1>Page 2</h1>
//        <Countdown />
//        <h2>Timer: {this.state.timer}</h2>
//      </div>
//    );
//  }
//}

//Page2.propTypes = {
//  timer: PropTypes.number.isRequired,
//};

//export default Page2;



//import React from 'react';
//import Countdown from '../components/Countdown';

//const Page2 = () => {
//  return (
//    <div>
//      <h1>Page 2</h1>
//      <Countdown />
//    </div>
//  );
//};

//export default Page2;

import React from 'react';
import { useSelector } from 'react-redux';
import Countdown from '../components/Countdown';

import { Link } from 'react-router-dom';


const Page2 = () => {
  const countdown = useSelector((state) => state.timer.countdown);
  const time = useSelector((state) => state.timer.time);

  return (
    <div>
      <h1>Page 2</h1>
      <Link to='/page1'>page 1</Link>
      <Countdown countdown={countdown} time={time} />
    </div>
  );
};

export default Page2;
