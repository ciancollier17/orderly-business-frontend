const curr_time = Math.round((new Date()).getTime() / 1000);

const sampleOrders = [
  {id: "9", whereTo: "Table 4", timeOfOrder: curr_time - 1401, expectedCompletionTime: 1200, items: [{itemName: "Chocolate Cake"}, {itemName: "Espresso"}], takenBy: "me", completed: false},
  {id: "10", whereTo: "Table 12", timeOfOrder: curr_time - 885, expectedCompletionTime: 1200, items: [{itemName: "Carlsberg"}, {itemName: "Gin and Tonic"}, {itemName: "San Miguel"}], takenBy: "me", completed: false},
  {id: "11", whereTo: "Table 23", timeOfOrder: curr_time - 612, expectedCompletionTime: 1200, items: [{itemName: "Pepsi Max"}], takenBy: "me", completed: false},
  {id: "12", whereTo: "Table 15", timeOfOrder: curr_time - 534, expectedCompletionTime: 1200, items: [{itemName: "VK (Blue)"}, {itemName: "VK (Orange)"}, {itemName: "VK (Cherry)"}, {itemName: "VK (Lemon)"}], takenBy: "me", completed: false},
  {id: "13", whereTo: "Table 8", timeOfOrder: curr_time - 443, expectedCompletionTime: 1200, items: [{itemName: "White Wine (Large)"}, {itemName: "Lambrini"}], takenBy: "me", completed: true, completionTime: 443},
  {id: "1", whereTo: "Table 23", timeOfOrder: curr_time - 921, expectedCompletionTime: 1200, items: [{itemName: "Snowball"}], takenBy: null, completed: false},
  {id: "2", whereTo: "Table 6", timeOfOrder: curr_time - 2072, expectedCompletionTime: 1200, items: [{itemName: "Pitcher (Blue Lagoon)"}, {itemName: "Prosecco (Bottle)"}], takenBy: "jonte", completed: false},
  {id: "3", whereTo: "Table 1", timeOfOrder: curr_time - 534, expectedCompletionTime: 1200, items: [{itemName: "San Miguel"}, {itemName: "Magners"}, {itemName: "White Wine (Large)"}, {itemName: "Pitcher (Blue Lagoon)"}, {itemName: "Vodka + Cranberry"}], takenBy: "jonte", completed: true, completionTime: 534},
  {id: "4", whereTo: "Table 10", timeOfOrder: curr_time - 453, expectedCompletionTime: 1200, items: [{itemName: "Carlsberg"}, {itemName: "John Fosters"}], takenBy: null, completed: false},
  {id: "5", whereTo: "Table 12", timeOfOrder: curr_time - 443, expectedCompletionTime: 1200, items: [{itemName: "Pepsi Max"}], takenBy: null, completed: false},
  {id: "6", whereTo: "Table 1", timeOfOrder: curr_time - 598, expectedCompletionTime: 1200, items: [{itemName: "Jager"}, {itemName: "JD + Coke"}], takenBy: null, completed: false},
  {id: "7", whereTo: "Table 10", timeOfOrder: curr_time - 2, expectedCompletionTime: 1200, items: [{itemName: "Vodka + Cranberry"}, {itemName: "Carlsberg"}, {itemName: "Carling"}], takenBy: null, completed: false},
  {id: "8", whereTo: "Table 12", timeOfOrder: curr_time - 403, expectedCompletionTime: 1200, items: [{itemName: "Jamesons"}, {itemName: "Grey Goose"}], takenBy: null, completed: false}
];

export default sampleOrders;
