import getBadgeColour from './getBadgeColour';

it("Returns green when under amber threshold", () => {
  expect(getBadgeColour(0.5, {amber: 1.0, red: 1.5})).toEqual("success");
  expect(getBadgeColour(0.4, {amber: 0.5, red: 0.8})).toEqual("success");
});

it("Returns amber when over amber threshold but below red threshold", () => {
  expect(getBadgeColour(0.8, {amber: 0.4, red: 1.0})).toEqual("warning");
  expect(getBadgeColour(0.6, {amber: 0.5, red: 0.8})).toEqual("warning");
});

it("Returns red when over the red threshold", () => {
  expect(getBadgeColour(0.8, {amber: 0.4, red: 0.7})).toEqual("danger");
  expect(getBadgeColour(0.9, {amber: 0.7, red: 0.85})).toEqual("danger");
})
