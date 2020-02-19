/// getButtons (string takenBy, bool completed, string user)
/// If the order is assigned to the user and not completed return a
/// done button. If the order is not assigned and not completed then
/// assign a take button. If the order is assigned to another user and
/// not completed or has been completed return the name of the user.
import React from 'react';
import {Button} from 'reactstrap';
import CompleteCheckmark from './CompleteCheckmark';
import takeOrder from './takeOrder';

function getButtons (order, user) {
  let takenBy = order.takenBy;
  let completed = order.completed;

  if (takenBy) {
    if (takenBy == user && !completed) {
      return <Button color="success">Done</Button>
    } else if (completed) {
      return <CompleteCheckmark />;
    } else {
      return <span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>{takenBy}</span>;
    }
  } else {
    return <Button color="primary" onClick={() => takeOrder(order, user.uid)}>Take</Button>;
  }
}

export default getButtons;
