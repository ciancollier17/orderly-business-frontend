import React from 'react';
import {useSelector} from 'react-redux';
import OrderList from '../OrderList/OrderList';

function Orders () {
  let orders = useSelector(full_state => full_state.orders);
  let user = useSelector(full_state => full_state.user);
  let userTakenOrders = [];
  let otherOrders = [];

  if (user) {
    orders.map(order => {
      if (order.takenBy == user.id) {
        userTakenOrders.push(order);
      } else {
        if (otherOrders.length < 100) {
          otherOrders.push(order);
        }
      }
    });
  }

  return (
    <div className="row" style={{width: "90%", margin: "auto", marginBottom: "2rem"}}>
      <OrderList title="Your Orders" orders={userTakenOrders} />
      <OrderList title="New Orders" orders={otherOrders} />
    </div>
  );
}

export default Orders;
