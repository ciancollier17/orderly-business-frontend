import React from 'react';
import {FormGroup,
        Input,
        Label,
        InputGroup,
        DropdownMenu,
        DropdownItem} from 'reactstrap';

function renderSettings (settingsList, renderedSettings, changeHandler, initialValues) {
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
          <Input id={setting.id} name={setting.id} type="text" onChange={(e) => changeHandler(e)} placeholder={initialValues[setting.id] ? initialValues[setting.id] : ""} />
        </FormGroup>);
      break;
    case "dropdown":
      renderedSettings.push(
        <FormGroup>
          <Label for={setting.id}>{setting.title + ":"}</Label>
          <Input id={setting.id} name={setting.id} type="select" defaultValue={initialValues[setting.id] ? initialValues[setting.id] : setting.options[0]} onChange={(e) => changeHandler(e)}>
            {setting.options.map(option => {
              return <option>{option}</option>;
            })}
          </Input>
        </FormGroup>
      );
      break;
    case "radiobutton":
      renderedSettings.push(
        <FormGroup tag="fieldset">
           <legend>{setting.title + ":"}</legend>
           {setting.options.map(option => {
             return (
               <FormGroup check>
                 <Label check>
                   <Input type="radio" name={setting.id} value={option.value} onChange={(e) => changeHandler(e)} defaultChecked={initialValues[setting.id] ? (initialValues[setting.id] == option.value) : false} />
                   {option.label}
                 </Label>
               </FormGroup>
             );
           })}
         </FormGroup>
      );
      break;
    case "checkbox":
      renderedSettings.push(
        <FormGroup tag="fieldset">
          <legend>{setting.title + ":"}</legend>
          {setting.options.map(option => {
            return (
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name={setting.id} value={option.value} onChange={(e) => changeHandler({target: {name: e.target.value, value: e.target.checked}})} />
                  {option.label}
                </Label>
              </FormGroup>
            );
          })}
          </FormGroup>
        );
      break;
    case "subcategory":
      renderedSettings.push(<h3>{setting.title}</h3>);
      renderSettings(setting.settings, renderedSettings, changeHandler, initialValues);
      renderedSettings.push(<hr />);
      break;
    default:
      renderedSettings.push(<span>Error: Can't Parse Setting</span>);
      break;
  }

  let newSettings = [...settingsList];
  newSettings.shift();
  return renderSettings(newSettings, renderedSettings, changeHandler, initialValues);
}

export default renderSettings;
