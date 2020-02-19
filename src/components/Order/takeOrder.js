import * as firebase from 'firebase';
import 'firebase/firestore';

/// takeOrder (order)
/// Takes in an order and a user UID, updates the database
/// to put the users name in the orders takenBy field.
async function takeOrder (order, user) {
  let userData = await firebase.firestore().collection('userData').doc(user).get();

  let done = await firebase.firestore().collection('orders').doc(order.id).update({takenBy: userData.data().firstName});
}

export default takeOrder;
