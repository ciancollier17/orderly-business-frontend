import React from 'react';
import {Button} from 'reactstrap';
import getButtons from './getButtons';
import CompleteCheckmark from './CompleteCheckmark';

const takeButton = <Button color="primary">Take</Button>;
const doneButton = <Button color="success">Done</Button>;
const completeCheckmark = <CompleteCheckmark />;

it("If unassigned and incomplete return a take button", () => {
  expect(getButtons(null, false, "me")).toEqual(takeButton);
  expect(getButtons(null, false, "cian")).toEqual(takeButton);
});

it("If assigned to the user and incomplete return a done button", () => {
  expect(getButtons("me", false, "me")).toEqual(doneButton);
  expect(getButtons("cian", false, "cian")).toEqual(doneButton);
});

it("If assigned to someone else display the name of the assigned user", () => {
  expect(getButtons("me", false, "cian")).toEqual(<span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>me</span>);
  expect(getButtons("cian", false, "me")).toEqual(<span style={{marginLeft: "0.8rem", marginRight: "0.8rem"}}>cian</span>);
});

it("If complete display a checkmark", () => {
  expect(getButtons("cian", true, "cian")).toEqual(completeCheckmark);
  expect(getButtons("cian", true, "me")).toEqual(completeCheckmark);
});
