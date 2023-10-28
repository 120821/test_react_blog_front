//export const START_COUNTDOWN = 'START_COUNTDOWN';
//export const STOP_COUNTDOWN = 'STOP_COUNTDOWN';
//export const SET_TIME = 'SET_TIME';
// actions.js
export const startCountdown = () => ({ type: 'START_COUNTDOWN' });
export const stopCountdown = () => ({ type: 'STOP_COUNTDOWN' });
export const setTime = (time) => ({ type: 'SET_TIME', time });

// reducers/timerReducer.js
const initialState = {
  isCountingDown: false,
  time: null,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_COUNTDOWN':
      return {
        ...state,
        isCountingDown: true,
      };
    case 'STOP_COUNTDOWN':
      return {
        ...state,
        isCountingDown: false,
      };
    case 'SET_TIME':
      return {
        ...state,
        time: action.time,
      };
    default:
      return state;
  }
};

export default timerReducer;

//export const startCountdown = (countdown) => ({
//  type: START_COUNTDOWN,
//  payload: countdown,
//});

//export const stopCountdown = () => ({
//  type: STOP_COUNTDOWN,
//});

//export const setTime = (time) => ({
//  type: SET_TIME,
//  payload: time,
//});
