import formatTimeSinceOrder from './formatTimeSinceOrder';

it("Returns 00:xx format when given times under a minute", () => {
  expect(formatTimeSinceOrder(30)).toEqual("00:30");
  expect(formatTimeSinceOrder(12)).toEqual("00:12");
  expect(formatTimeSinceOrder(0)).toEqual("00:00");
});

it("Returns XX:XX format when given times over a minute", () => {
  expect(formatTimeSinceOrder(120)).toEqual("02:00");
  expect(formatTimeSinceOrder(184)).toEqual("03:04");
  expect(formatTimeSinceOrder(700)).toEqual("11:40");
});

it("Returns XX:XX format when given time over 10 minutes", () => {
  expect(formatTimeSinceOrder(3600)).toEqual("01:00:00");
  expect(formatTimeSinceOrder(3741)).toEqual("01:02:21");
  expect(formatTimeSinceOrder(7373)).toEqual("02:02:53");
});
