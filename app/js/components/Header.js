'use strict';

import React from 'react';
//import NavBar from 'NavBar';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <NavBar />
        <ul id="gn-menu" className="gn-menu-main">
          <li className="gn-trigger">
            <a className="gn-icon gn-icon-menu"><span>Menu</span></a>
          </li>
          <li className="moi">
            <a href="index.html">Christopher Camplin - UI Developer</a>
          </li>
          <li className="linked">
            <a href="http://www.linkedin.com/pub/christopher-camplin/65/81b/882" target="_BLANK">
              <img src="images/linkedin_logo.png" />
            </a>
          </li>
        </ul>

      </header>
    );
  }

}

export default Header;
