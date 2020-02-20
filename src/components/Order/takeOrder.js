import * as firebase from 'firebase';
import 'firebase/firestore';

/// takeOrder (order, user)
/// Takes in an order and a user object, updates the database
/// to put the user ID in the orders takenBy field.
async function takeOrder (order, user) {
  let done = await firebase.firestore().collection('orders').doc(order.id).update({takenBy: user.id});
}

export default takeOrder;
