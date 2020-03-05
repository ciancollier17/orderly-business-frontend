import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem, Badge, Button} from 'reactstrap';
import Order from '../Order/Order';
import paginateOrders from './paginateOrders';

function OrderList (props) {
  const [pagination, setPagination] = useState(paginateOrders(props.orders, 25));
  let [currentPage, prevPage, nextPage] = pagination;

  useEffect(() => {
    setPagination(paginateOrders(props.orders, 25));
  }, [props.orders])

  return (
    <div className="col-md-6" style={{marginTop: "1.5rem"}}>
      <h2>{props.title}</h2>
      <ListGroup>
        {currentPage.map(order => {
          return <Order key={order.id} order={order} />
        })}
      </ListGroup>
    </div>
  )
}

export default OrderList;
