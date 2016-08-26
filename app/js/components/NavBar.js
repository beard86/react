'use strict';

import React from 'react';

class NavBar extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var pages = ['CV', 'Contact', 'Github'];
    var navLinks = pages.map(function(page){
      return (


              <div className="gn-scroller">
                <ul className="gn-menu">
                  <li>
                    <a className="gn-icon gn-icon-article open-popup-link" href="#CV">CV</a>
                  </li>
                  <li>
                    <a className="gn-icon gn-icon-archive open-popup-link" href="#contact">Contact</a>
                  </li>
                  <li>
                    <a className="gn-icon gn-icon-cog" target="_blank" href="https://github.com/beard86">Github</a>
                  </li>
                </ul>
              </div>



      );
    });

    return <nav className="gn-menu-wrapper">{navLinks}</nav>;
  }
}

export default NavBar;
