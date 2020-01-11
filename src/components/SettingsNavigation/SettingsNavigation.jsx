import React, {useState} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

function SettingsNavigation (props) {
  return (
    <div>
      <Nav tabs>
        {props.config.categories.map((category, index) => {
          return (
            <NavItem>
              <NavLink href="#" active={index == props.active} onClick={() => props.linkClickHandler(index)}>{category.name}</NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </div>
  )
}

export default SettingsNavigation;
