import React, {useState} from 'react';
import {ListGroupItem, Button, Badge} from 'reactstrap';
import getBadgeColour from './getBadgeColour';
import formatTimeSinceOrder from './formatTimeSinceOrder';
import ItemList from '../ItemList/ItemList';

function Order (props) {
  const [isItemListOpen, setIsItemListOpen] = useState(false);

  const expandHandler = () => {
    setIsItemListOpen(!isItemListOpen);
  };

  const orderContainerStyles = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  };

  let percentOfExpectedTimeElapsed = props.order.timeSinceOrder / props.order.expectedCompletionTime;
  let badgeColour = getBadgeColour(percentOfExpectedTimeElapsed);

  return (
    <React.Fragment>
    <ListGroupItem style={orderContainerStyles}>
      <strong>{props.order.whereTo} <Badge color={badgeColour} pill>{formatTimeSinceOrder(props.order.timeSinceOrder)}</Badge></strong>
      <span>
        <Button style={{marginRight: "0.5rem"}} color="secondary" onClick={expandHandler}>Expand</Button>
        <Button color={props.assignedToUser ? "success" : "primary"}>{props.assignedToUser ? "Done" : "Take"}</Button>
      </span>
    </ListGroupItem>
    <ItemList listId={props.order.id} orderItems={props.order.items} isOpen={isItemListOpen} />
    </React.Fragment>
  )
}

export default Order;
