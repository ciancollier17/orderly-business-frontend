import React from 'react';
import {Form, Button} from 'reactstrap';
import renderSettings from './renderSettings';

function SettingsPage (props) {
  let settings = [];

  return (
    <Form style={{marginTop: "1rem"}}>
      {renderSettings(props.category.settings, []).map(element => {
        return element;
      })}
      {props.category.settings ? props.category.settings.length > 0 ? <Button color="primary">Apply Settings</Button> : <span></span> : <span></span>}
    </Form>
  )
}

export default SettingsPage;
