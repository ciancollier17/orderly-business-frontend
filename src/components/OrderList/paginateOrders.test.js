import paginateOrders from './paginateOrders';

let numbers = [];

for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

it("Gets the first page by default", () => {
  let [currentPage, prev, next] = paginateOrders(numbers, 5);
  expect(currentPage).toEqual([1, 2, 3, 4, 5]);
  expect(prev).toBeNull();
  expect(next).toBeTruthy();
});

it("Gets the next page successfully in normal case", () => {
  let [currentPage, prev, next] = paginateOrders(numbers, 5);
  [currentPage, prev, next] = next();
  expect(currentPage).toEqual([6, 7, 8, 9, 10]);
  [currentPage, prev, next] = next();
  expect(currentPage).toEqual([11, 12, 13, 14, 15]);
});

it("Gets the prev page successfully in normal case", () => {
  let [currentPage, prev, next] = paginateOrders(numbers, 5, 90);
  [currentPage, prev, next] = prev();
  expect(currentPage).toEqual([86, 87, 88, 89, 90]);
  [currentPage, prev, next] = prev();
  expect(currentPage).toEqual([81, 82, 83, 84, 85]);
});

it("Returns no next function when near to end of orders", () => {
  let [currentPage, prev, next] = paginateOrders(numbers, 5, 98);
  expect(currentPage).toEqual([99, 100]);
  expect(next).toBeNull();
  expect(prev).toBeTruthy();
});

it("currentPage contains all orders when numPerPage > length of orders", () => {
  let [currentPage, prev, next] = paginateOrders(numbers, 500);
  expect(currentPage).toEqual(numbers);
});
