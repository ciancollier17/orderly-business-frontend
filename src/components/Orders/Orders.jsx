import React from 'react';
import {useSelector} from 'react-redux';
import OrderList from '../OrderList/OrderList';

function Orders () {
  let orders = useSelector(full_state => full_state.orders);
  let user = useSelector(full_state => full_state.user.user);
  let userTakenOrders = [];
  let otherOrders = [];

  orders.map(order => {
    if (order.takenBy == user) {
      userTakenOrders.push(order);
    } else {
      otherOrders.push(order);
    }
  });

  return (
    <div className="row" style={{width: "90%", margin: "auto", marginBottom: "2rem"}}>
      <OrderList title="Your Orders" orders={userTakenOrders} />
      <OrderList title="New Orders" orders={otherOrders} />
    </div>
  );
}

export default Orders;
