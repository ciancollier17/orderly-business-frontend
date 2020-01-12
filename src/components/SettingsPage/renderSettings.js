import React from 'react';
import {FormGroup,
        Input,
        Label,
        InputGroup,
        DropdownMenu,
        DropdownItem} from 'reactstrap';

function renderSettings (settingsList, renderedSettings) {
  if (!settingsList) {
    return [<span>No settings here yet!</span>];
  }

  if (settingsList.length == 0) {
    return renderedSettings;
  }

  let setting = settingsList[0];

  switch (setting.type) {
    case "text":
      renderedSettings.push(
        <FormGroup>
          <Label for={setting.id}>{setting.title + ": "}</Label>
          <Input id={setting.id} type="text" />
        </FormGroup>);
      break;
    case "dropdown":
      renderedSettings.push(
        <FormGroup>
          <Label for={setting.id}>{setting.title + ":"}</Label>
          <Input id={setting.id} type="select">
            {setting.options.map(option => {
              return <option>{option}</option>;
            })}
          </Input>
        </FormGroup>
      );
      break;
    case "subcategory":
      renderedSettings.push(<h3>{setting.title}</h3>);
      renderSettings(setting.settings, renderedSettings);
      renderedSettings.push(<hr />);
      break;
    default:
      renderedSettings.push(<span>Error: Can't Parse Setting</span>);
      break;
  }

  let newSettings = [...settingsList];
  newSettings.shift();
  return renderSettings(newSettings, renderedSettings);
}

export default renderSettings;
