import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

class Navbar extends React.Component {
  state = {
    isActive: true,
  }

  render() {
    return (
      <div id="myNav" className="mynav">
        <NavLink
          className="topnav"
          activeClassName="topnav_active"
          to="/logout"
        >
          Logout
        </NavLink>
        <NavLink
          className="topnav"
          activeClassName="topnav_active"
          to="/old_codes"
        >
          Old Codes
        </NavLink>
        <NavLink
          className="topnav"
          activeClassName="topnav_active"
          to="/new_codes"
        >
          New Codes
        </NavLink>
        <NavLink
          className="topnav"
          activeClassName="topnav_active"
          to="/joan_home_codes"
        >
          Joan Home Codes
        </NavLink>
        <NavLink className="topnav" activeClassName="topnav_active" to="/jdba">
          JDBA
        </NavLink>
        <NavLink
          className="topnav"
          activeClassName="topnav_active"
          to="/instructions"
        >
          Instructions
        </NavLink>
        <NavLink
          className="topnav"
          activeClassName="topnav_active"
          to="/created_codes"
        >
          Created Codes
        </NavLink>
      </div>
    )
  }
}

export default Navbar
