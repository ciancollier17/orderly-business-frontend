import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Form, Button, Alert} from 'reactstrap';
import renderSettings from './renderSettings';
import updateSettings from './updateSettings';

function SettingsPage (props) {
  let settings = [];
  let [settingsState, setSettingsState] = useState({});
  let [alertMessage, setAlertMessage] = useState("");
  let [alertColour, setAlertColour] = useState("danger");
  let [prevActiveCategory, setPrevActiveCategory] = useState("");
  let user = useSelector(full_state => full_state.user);
  let business = useSelector(full_state => full_state.business);
  let initialValues;

  if (props.category.name != prevActiveCategory) {
    setSettingsState({});
    setAlertMessage("");
    setPrevActiveCategory(props.category.name);
  }

  if (props.category.document == "business") {
    initialValues = business;
  } else {
    initialValues = user;
  }

  function changeHandler (e) {
    let newSettingsState = {...settingsState};
    newSettingsState[e.target.name] = e.target.value;
    setSettingsState(newSettingsState);
    setAlertMessage("");
  }

  async function updateSettingsHandler () {
    let errors = await updateSettings(props.category, settingsState, user);

    if (errors.error) {
      setAlertMessage(errors.error.message);
      setAlertColour("danger");
    } else {
      setAlertMessage("Settings Saved Successfully!");
      setAlertColour("success");
    }
  }

  return (
    <Form style={{marginTop: "1rem"}}>
      <Alert isOpen={alertMessage != ""} color={alertColour}>{alertMessage}</Alert>
      {renderSettings(props.category.settings, [], changeHandler, initialValues).map(element => {
        return element;
      })}
      {props.category.settings ? props.category.settings.length > 0 ? <Button color="primary" onClick={updateSettingsHandler}>Apply Settings</Button> : <span></span> : <span></span>}
    </Form>
  )
}

export default SettingsPage;
