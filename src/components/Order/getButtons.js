/// getButtons (string takenBy, bool completed)
/// If the order is assigned to the user and not completed return a
/// done button. If the order is not assigned and not completed then
/// assign a take button. If the order is assigned to another user and
/// not completed or has been completed return the name of the user.
import React from 'react';
import {Button} from 'reactstrap';
import CompleteCheckmark from './CompleteCheckmark';

// TODO: Replace with redux store user
const user = "me";

function getButtons (takenBy, completed) {
  if (takenBy) {
    if (takenBy == user && !completed) {
      return <Button color="success">Done</Button>
    } else if (takenBy == user && completed) {
      return <CompleteCheckmark />;
    } else {
      return <span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>{takenBy}</span>;
    }
  } else {
    return <Button color="primary">Take</Button>;
  }
}

export default getButtons;
