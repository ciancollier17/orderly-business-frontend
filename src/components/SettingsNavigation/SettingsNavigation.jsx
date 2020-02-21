import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Nav, NavItem, NavLink} from 'reactstrap';

function SettingsNavigation (props) {
  const user = useSelector(full_state => full_state.user);

  return (
    <div>
      <Nav tabs>
        {props.config.categories.map((category, index) => {
          if ((category.needsManager && user.manager) || !category.needsManager) {
            return (
              <NavItem>
                <NavLink href="#" active={index == props.active} onClick={() => props.linkClickHandler(index)}>{category.name}</NavLink>
              </NavItem>
            );
          } else {
            return null;
          }
        })}
      </Nav>
    </div>
  )
}

export default SettingsNavigation;
