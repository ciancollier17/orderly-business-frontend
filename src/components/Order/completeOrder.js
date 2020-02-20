import * as firebase from 'firebase';
import "firebase/firestore";

/// completeOrder (order)
/// Takes in an order object and updates the order record
/// to say that the order is now complete and calculates
/// the completion time. 
async function completeOrder (order) {
  let updated = await firebase.firestore().collection('orders').doc(order.id)
    .update({completed: true, completionTime: (Math.floor(Date.now() / 1000) - order.timeOfOrder)});
}

export default completeOrder;
