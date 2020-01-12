import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SettingsPage from './SettingsPage';
import {Input} from 'reactstrap';

Enzyme.configure({adapter: new Adapter()});

const testConfig = {
  categories: [
    {
      title: "Single Text",
      settings: [
        {
          id: "test",
          title: "Test",
          type: "text"
        }
      ]
    },
    {
      title: "Single Dropdown",
      settings: [
        {
          id: "dropdown",
          title: "Dropdown",
          type: "dropdown",
          options: [
            "Hello",
            "World"
          ]
        }
      ]
    }
  ]
}

it("Renders text settings correctly", () => {
  const output = mount(<SettingsPage category={testConfig.categories[0]} />);
  expect(output.find('label').text()).toEqual("Test: ");
  expect(output.contains(<Input id="test" type="text" />)).toBeTruthy();
});

it("Renders dropdown settings correctly", () => {
  const output = mount(<SettingsPage category={testConfig.categories[1]} />);
  expect(output.find('label').text()).toEqual("Dropdown:");
  expect(output.contains(
    <Input id="dropdown" type="select">
      <option>Hello</option>
      <option>World</option>
    </Input>)).toBeTruthy();
});
