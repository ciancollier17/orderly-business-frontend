import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SettingsPage from './SettingsPage';
import {Input, FormGroup, Label} from 'reactstrap';

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
    },
    {
      title: "Single Radio Button",
      settings: [
        {
          id: "radiobutton",
          title: "Radio Button",
          type: "radiobutton",
          options: [
            {
              value: "red",
              label: "Red"
            },
            {
              value: "green",
              label: "Green"
            },
            {
              value: "blue",
              label: "Blue"
            }
          ]
        }
      ]
    },
    {
      title: "Single Checkbox",
      settings: [
        {
          id: "checkbox",
          title: "Checkbox",
          type: "checkbox",
          options: [
            {
              value: "red",
              label: "Red"
            },
            {
              value: "green",
              label: "Green"
            },
            {
              value: "blue",
              label: "Blue"
            }
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

it("Renders radio button settings correctly", () => {
  const output = mount(<SettingsPage category={testConfig.categories[2]} />);
  expect(output.find('legend').text()).toEqual("Radio Button:");
  expect(output.contains(
    <FormGroup check>
      <Label check>
        <Input type="radio" name="radiobutton" value="red" />
        Red
      </Label>
    </FormGroup>
  )).toBeTruthy();

  expect(output.contains(
    <FormGroup check>
      <Label check>
        <Input type="radio" name="radiobutton" value="green" />
        Green
      </Label>
    </FormGroup>
  )).toBeTruthy();

  expect(output.contains(
    <FormGroup check>
      <Label check>
        <Input type="radio" name="radiobutton" value="blue" />
        Blue
      </Label>
    </FormGroup>
  )).toBeTruthy();
});

it("Renders checkbox settings correctly", () => {
  const output = mount(<SettingsPage category={testConfig.categories[3]} />);
  expect(output.find('legend').text()).toEqual("Checkbox:");
  expect(output.contains(
    <FormGroup check>
      <Label check>
        <Input type="checkbox" name="checkbox" value="red" />
        Red
      </Label>
    </FormGroup>
  )).toBeTruthy();

  expect(output.contains(
    <FormGroup check>
      <Label check>
        <Input type="checkbox" name="checkbox" value="green" />
        Green
      </Label>
    </FormGroup>
  )).toBeTruthy();

  expect(output.contains(
    <FormGroup check>
      <Label check>
        <Input type="checkbox" name="checkbox" value="blue" />
        Blue
      </Label>
    </FormGroup>
  )).toBeTruthy();
});
