/// paginateOrders (orders, numPerPage, user = null)
/// Returns a prev and next function for retrieving the
/// previous and next page of orders.
function paginateOrders (orders, numPerPage, start=0) {
  let currentPage = [];

  for (let i = start; i < start + numPerPage && i < orders.length; i++) {
    currentPage.push(orders[i]);
  }

  function prev () {
    return paginateOrders(orders, numPerPage, start - numPerPage);
  }

  function next () {
    return paginateOrders(orders, numPerPage, start + numPerPage);
  }

  let returnPrev = (start <= 0) ? null : prev;
  let returnNext = (start + numPerPage >= orders.length) ? null : next;
  return [currentPage, returnPrev, returnNext];
}

export default paginateOrders;
