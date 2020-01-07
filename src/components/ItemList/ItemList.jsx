import React, {useEffect, useState} from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
import './orderExpandTransition.css';

function ItemList (props) {
  const [stylesForOpen, setStylesForOpen] = useState({});

  const stylesForClosed = {
    height: "0",
    overflow: "hidden"
  };

  // Assuming orders don't change once submitted so fine to do
  // only once.
  useEffect(() => {
    setStylesForOpen({
      height: `${document.getElementById(props.listId).offsetHeight}px`,
      overflow: "hidden"
    });
  }, []);

  return (
    <div className="order-expand-transition" style={props.isOpen ? stylesForOpen : stylesForClosed}>
      <ListGroup id={props.listId}>
        {props.orderItems.map(item => {
          return <ListGroupItem>{item.itemName}</ListGroupItem>;
        })}
      </ListGroup>
    </div>
  )
}

export default ItemList;
