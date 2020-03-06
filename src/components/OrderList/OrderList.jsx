import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem, Badge, Button} from 'reactstrap';
import Order from '../Order/Order';
import OrderPagination from '../OrderPagination/OrderPagination';
import paginateOrders from './paginateOrders';

function OrderList (props) {
  const numberPerPage = 25;
  const [pagination, setPagination] = useState(paginateOrders(props.orders, numberPerPage));
  let [currentPage, prevPage, nextPage] = pagination;
  const nextPageFunction = nextPage ? () => setPagination(nextPage()) : null;
  const prevPageFunction = prevPage ? () => setPagination(prevPage()) : null;

  useEffect(() => {
    setPagination(paginateOrders(props.orders, numberPerPage));
  }, [props.orders])

  return (
    <div className="col-md-6" style={{marginTop: "1.5rem"}}>
      <h2>{props.title}</h2>
      <ListGroup>
        {currentPage.map(order => {
          return <Order key={order.id} order={order} />
        })}
      </ListGroup>
      <OrderPagination prev={prevPageFunction} next={nextPageFunction} />
    </div>
  )
}

export default OrderList;
