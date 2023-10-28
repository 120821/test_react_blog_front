//import React, { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { startCountdown, stopCountdown, setTime } from '../actions';

//const Countdown = () => {
//  const dispatch = useDispatch();
//  const countdown = useSelector((state) => state.timer.countdown);
//  const time = useSelector((state) => state.timer.time);
//  const [timer, setTimer] = useState(60);

//  useEffect(() => {
//    const interval = setInterval(() => {
//      if (timer > 0) {
//        setTimer((t) => t - 1);
//        dispatch(setTime(timer - 1));
//      }
//    }, 1000);

//    return () => {
//      clearInterval(interval);
//      dispatch(stopCountdown());
//    };
//  }, [timer, dispatch]);

//  return (
//    <div>
//      <h1>Countdown: {timer} seconds</h1>
//    </div>
//  );
//};

//export default Countdown;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCountdown, stopCountdown, setTime } from '../actions';

const Countdown = () => {
  const dispatch = useDispatch();
  const countdown = useSelector((state) => state.timer.countdown);
  const time = useSelector((state) => state.timer.time);

  useEffect(() => {
    let interval;

    if (countdown) {
      interval = setInterval(() => {
        if (time > 0) {
          dispatch(setTime(time - 1));
        } else {
          dispatch(stopCountdown());
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, time, dispatch]);

  const handleStartCountdown = () => {
    dispatch(startCountdown());
  };

  const handleResetCountdown = () => {
    dispatch(setTime(60));
  };

  return (
    <div>
      <h1>Countdown: {time} seconds</h1>
      {!countdown && (
        <button onClick={handleStartCountdown}>Start Countdown</button>
      )}
      {countdown && (
        <button onClick={handleResetCountdown}>Reset Countdown</button>
      )}
    </div>
  );
};

export default Countdown;
