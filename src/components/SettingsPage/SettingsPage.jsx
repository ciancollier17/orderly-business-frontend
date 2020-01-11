import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

function SettingsPage (props) {
  let settings = [];

  function parseSetting (setting) {
    switch (setting.type) {
      case "text":
        return (
          <FormGroup>
            <Label for={setting.id}>{setting.title + ": "}</Label>
            <Input id={setting.id} type="text" />
          </FormGroup>);
        break;
      default:
        return <span>Error: Can't Parse Setting</span>
        break;
    }
  }

  function renderSettings () {
    if (props.category.settings) {
      settings = props.category.settings.map(setting => {
        return parseSetting(setting);
      });

      return settings;
    } else {
      return [<span>No Settings For This Category</span>];
    }
  }

  return (
    <Form style={{marginTop: "1rem"}}>
      {renderSettings().map(element => {
        return element;
      })}
      <Button color="primary">Apply Settings</Button>
    </Form>
  )
}

export default SettingsPage;
