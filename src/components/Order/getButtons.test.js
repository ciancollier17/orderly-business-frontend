import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {Button} from 'reactstrap';
import getButtons from './getButtons';
import CompleteCheckmark from './CompleteCheckmark';

configure({adapter: new Adapter()});

const completeCheckmark = <CompleteCheckmark />;
const userMe = {id: "me", firstName: "me"};
const userCian = {id: "cian", firstName: "cian"};

it("If unassigned and incomplete return a take button", () => {
  let order = {takenBy: null, completed: false};
  let takeButton1 = shallow(getButtons(order, userMe));
  expect(takeButton1.text()).toEqual("Take");
  let takeButton2 = shallow(getButtons(order, userCian));
  expect(takeButton2.text()).toEqual("Take");
});

it("If assigned to the user and incomplete return a done button", () => {
  let order1 = {takenBy: "me", completed: false};
  let doneButton1 = shallow(getButtons(order1, userMe));
  expect(doneButton1.text()).toEqual("Done");
  let order2 = {takenBy: "cian", completed: false};
  let doneButton2 = shallow(getButtons(order2, userCian));
  expect(doneButton2.text()).toEqual("Done");
});

it("If assigned to someone else display the name of the assigned user", () => {
  let order1 = {takenBy: "me", takenByName: "me", completed: false};
  expect(getButtons(order1, userCian)).toEqual(<span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>me</span>);
  let order2 = {takenBy: "cian", takenByName: "cian", completed: false};
  expect(getButtons(order2, userMe)).toEqual(<span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>cian</span>);
});

it("If complete display a checkmark", () => {
  let order = {takenBy: "cian", completed: true};
  expect(getButtons(order, userCian)).toEqual(completeCheckmark);
  expect(getButtons(order, userMe)).toEqual(completeCheckmark);
});
