import React, {useState} from 'react';
import SettingsNavigation from '../SettingsNavigation/SettingsNavigation';
import SettingsPage from '../SettingsPage/SettingsPage';
import SettingsConfig from '../../SettingsConfig.json';

function Settings () {
  const [active, setActive] = useState(0);

  return (
    <div style={{width: "90%", margin: "auto", marginTop: "1rem"}}>
      <h1>Settings</h1>
      <SettingsNavigation active={active} config={SettingsConfig} linkClickHandler={setActive} />
      <SettingsPage category={SettingsConfig.categories[active]} />
    </div>
  )
}

export default Settings;
