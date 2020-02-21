import React, {useState} from 'react';
import {Form, Button} from 'reactstrap';
import renderSettings from './renderSettings';
import updateSettings from './updateSettings';

function SettingsPage (props) {
  let settings = [];
  let [settingsState, setSettingsState] = useState({});

  function changeHandler (e) {
    let newSettingsState = {...settingsState};
    newSettingsState[e.target.name] = e.target.value;
    setSettingsState(newSettingsState);
  }

  return (
    <Form style={{marginTop: "1rem"}}>
      {renderSettings(props.category.settings, [], changeHandler).map(element => {
        return element;
      })}
      {props.category.settings ? props.category.settings.length > 0 ? <Button color="primary" onClick={() => updateSettings(props.category, settingsState)}>Apply Settings</Button> : <span></span> : <span></span>}
    </Form>
  )
}

export default SettingsPage;
