function UserReducer (initialState = false, action) {
  switch (action.type) {
    case "AUTH_STATE_CHANGE":
      return action.payload;
      break;
    default:
      return initialState;
  }
}

export default UserReducer;
