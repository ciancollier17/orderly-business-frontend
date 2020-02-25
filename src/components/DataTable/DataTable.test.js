import React from 'react';
import DataTable from './DataTable';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

let labels = ['C1', 'C2', 'C3', 'C4'];
let dataset = [[100, 120, 110, 100],
               [110, 10, 110, 110],
               [100, 100, 90, 100]];

let testTable = shallow(<DataTable title="Test" labels={labels} dataset={dataset} />);

it("Renders the title correctly", () => {
  expect(testTable.find('h3').text()).toEqual("Test");
});

it("Correct number of rows", () => {
  expect(testTable.find('tbody').children().length).toEqual(4);
});

it("Correct number of columns in each row", () => {
  expect(testTable.find('tbody').childAt(0).children().length).toEqual(4);
  expect(testTable.find('tbody').childAt(1).children().length).toEqual(4);
});

it("Renders correct data in correct cell", () => {
  expect(testTable.find('tbody').childAt(1).childAt(0).text()).toEqual("100");
  expect(testTable.find('tbody').childAt(3).childAt(2).text()).toEqual("90");
});