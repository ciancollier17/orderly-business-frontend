import React from 'react';
import {ListGroup, ListGroupItem, Badge, Button} from 'reactstrap';
import Order from '../Order/Order';

function OrderList (props) {
  return (
    <div className="col-md-6" style={{marginTop: "1.5rem"}}>
      <h2>{props.title}</h2>
      <ListGroup>
        {props.orders.map(order => {
          return <Order key={order.id} order={order} />
        })}
      </ListGroup>
    </div>
  )
}

export default OrderList;
