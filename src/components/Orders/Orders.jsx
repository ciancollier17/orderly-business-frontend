import React from 'react';
import OrderList from '../OrderList/OrderList';

function Orders () {
  return (
    <div className="row" style={{width: "90%", margin: "auto", marginBottom: "2rem"}}>
      <OrderList title="My Orders" assignedToUser={true} orders={[
        {id: "9", whereTo: "Table 4", timeSinceOrder: 1401, expectedCompletionTime: 1200, items: [{itemName: "Chocolate Cake"}, {itemName: "Espresso"}]},
        {id: "10", whereTo: "Table 12", timeSinceOrder: 885, expectedCompletionTime: 1200, items: [{itemName: "Carlsberg"}, {itemName: "Gin and Tonic"}, {itemName: "San Miguel"}]},
        {id: "11", whereTo: "Table 23", timeSinceOrder: 612, expectedCompletionTime: 1200, items: [{itemName: "Pepsi Max"}]},
        {id: "12", whereTo: "Table 15", timeSinceOrder: 534, expectedCompletionTime: 1200, items: [{itemName: "VK (Blue)"}, {itemName: "VK (Orange)"}, {itemName: "VK (Cherry)"}, {itemName: "VK (Lemon)"}]},
        {id: "13", whereTo: "Table 8", timeSinceOrder: 443, expectedCompletionTime: 1200, items: [{itemName: "White Wine (Large)"}, {itemName: "Lambrini"}]}
      ]} />
      <OrderList title="Other Orders" assignedToUser={false} orders={[
        {id: "1", whereTo: "Table 23", timeSinceOrder: 921, expectedCompletionTime: 1200, items: [{itemName: "Snowball"}]},
        {id: "2", whereTo: "Table 6", timeSinceOrder: 2072, expectedCompletionTime: 1200, items: [{itemName: "Pitcher (Blue Lagoon)"}, {itemName: "Prosecco (Bottle)"}]},
        {id: "3", whereTo: "Table 1", timeSinceOrder: 534, expectedCompletionTime: 1200, items: [{itemName: "San Miguel"}, {itemName: "Magners"}, {itemName: "White Wine (Large)"}, {itemName: "Pitcher (Blue Lagoon)"}, {itemName: "Vodka + Cranberry"}]},
        {id: "4", whereTo: "Table 10", timeSinceOrder: 453, expectedCompletionTime: 1200, items: [{itemName: "Carlsberg"}, {itemName: "John Fosters"}]},
        {id: "5", whereTo: "Table 12", timeSinceOrder: 443, expectedCompletionTime: 1200, items: [{itemName: "Pepsi Max"}]},
        {id: "6", whereTo: "Table 1", timeSinceOrder: 598, expectedCompletionTime: 1200, items: [{itemName: "Jager"}, {itemName: "JD + Coke"}]},
        {id: "7", whereTo: "Table 10", timeSinceOrder: 2, expectedCompletionTime: 1200, items: [{itemName: "Vodka + Cranberry"}, {itemName: "Carlsberg"}, {itemName: "Carling"}]},
        {id: "8", whereTo: "Table 12", timeSinceOrder: 403, expectedCompletionTime: 1200, items: [{itemName: "Jamesons"}, {itemName: "Grey Goose"}]}
      ]} />
    </div>
  )
}

export default Orders;
