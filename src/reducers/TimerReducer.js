function TimerReducer (initialState = 0, action) {
  switch (action.type) {
    case "INCREASE_TIMER":
      return action.payload;
      break;
    default:
      return initialState;
      break;
  }
}

export default TimerReducer;
