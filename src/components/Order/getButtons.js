/// getButtons (string takenBy, bool completed, string user)
/// If the order is assigned to the user and not completed return a
/// done button. If the order is not assigned and not completed then
/// assign a take button. If the order is assigned to another user and
/// not completed or has been completed return the name of the user.
import React from 'react';
import * as firebase from 'firebase';
import "firebase/firestore";
import {Button} from 'reactstrap';
import CompleteCheckmark from './CompleteCheckmark';
import takeOrder from './takeOrder';
import completeOrder from './completeOrder';

function getButtons (order, user) {
  let takenBy = order.takenBy;
  let completed = order.completed;

  if (takenBy) {
    if (takenBy == user.id && !completed) {
      return <Button color="success" onClick={() => completeOrder(order)}>Done</Button>
    } else if (completed) {
      return <CompleteCheckmark />;
    } else {
      return <span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>{order.takenByName}</span>;
    }
  } else {
    return <Button color="primary" onClick={() => takeOrder(order, user)}>Take</Button>;
  }
}

export default getButtons;
