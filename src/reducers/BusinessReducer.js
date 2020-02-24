function BusinessReducer (initialState = {}, action) {
  switch (action.type) {
    case "BUSINESS_DATA_LOADED":
      return action.payload;
      break;
    default:
      return initialState;
      break;
  }
}

export default BusinessReducer;
