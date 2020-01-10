import React, {useState} from 'react';
import {ListGroupItem, Button, Badge} from 'reactstrap';
import getBadgeColour from './getBadgeColour';
import getButtons from './getButtons';
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

  // TODO: Replace object with setting from redux store
  let badgeColour = getBadgeColour(percentOfExpectedTimeElapsed, {
    amber: 0.9,
    red: 1.2
  });

  return (
    <React.Fragment>
    <ListGroupItem style={orderContainerStyles}>
      <strong>{props.order.whereTo} <Badge color={badgeColour} pill>{formatTimeSinceOrder(props.order.timeSinceOrder)}</Badge></strong>
      <span>
        <Button style={{marginRight: "0.5rem"}} color="secondary" onClick={expandHandler}>Expand</Button>
        {getButtons(props.order.takenBy, props.order.completed, "me")}
      </span>
    </ListGroupItem>
    <ItemList listId={props.order.id} orderItems={props.order.items} isOpen={isItemListOpen} />
    </React.Fragment>
  )
}

export default Order;
