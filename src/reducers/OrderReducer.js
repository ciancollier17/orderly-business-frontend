import sampleOrders from '../testfiles/sampleOrders';

function OrderReducer (initialState = sampleOrders, action) {
  switch (action.type) {
    case "UPDATE_ORDERS":
      return action.payload;
      break;
    default:
      return initialState;
      break;
  }
}

export default OrderReducer;
