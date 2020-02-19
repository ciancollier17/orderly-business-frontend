import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {Button} from 'reactstrap';
import getButtons from './getButtons';
import CompleteCheckmark from './CompleteCheckmark';

configure({adapter: new Adapter()});

const doneButton = <Button color="success">Done</Button>;
const completeCheckmark = <CompleteCheckmark />;

it("If unassigned and incomplete return a take button", () => {
  let order = {takenBy: null, completed: false};
  let takeButton1 = shallow(getButtons(order, "me"));
  expect(takeButton1.text()).toEqual("Take");
  let takeButton2 = shallow(getButtons(order, "cian"));
  expect(takeButton2.text()).toEqual("Take");
});

it("If assigned to the user and incomplete return a done button", () => {
  let order1 = {takenBy: "me", completed: false};
  expect(getButtons(order1, "me")).toEqual(doneButton);
  let order2 = {takenBy: "cian", completed: false};
  expect(getButtons(order2, "cian")).toEqual(doneButton);
});

it("If assigned to someone else display the name of the assigned user", () => {
  let order1 = {takenBy: "me", completed: false};
  expect(getButtons(order1, "cian")).toEqual(<span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>me</span>);
  let order2 = {takenBy: "cian", completed: false};
  expect(getButtons(order2, "me")).toEqual(<span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>cian</span>);
});

it("If complete display a checkmark", () => {
  let order = {takenBy: "cian", completed: true};
  expect(getButtons(order, "cian")).toEqual(completeCheckmark);
  expect(getButtons(order, "me")).toEqual(completeCheckmark);
});
