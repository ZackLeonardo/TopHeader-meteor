import React, { Component } from 'react';

import Nav from "./Nav.jsx";
import SecNav from "./SecNav.jsx";
import CustomMenu from "./CustomMenu.jsx";

class App extends Component {

  renderNav(){
    return [
      { _id: 1, text: 'DEVELPOERS', submenus: ['INSTALL', 'TUTORIALS'] },
      { _id: 2, text: 'SHOWCASE', submenus: null},
      { _id: 3, text: 'SOUTIONS', submenus: ['INSTALL', 'TUTORIALS'] },
    ];
  }

  render() {
    return (
      <div className="container-header">
        <div className="logo-company">
          <a href="/">
            <img id="logo-meteor-home" src="https://d14xs1qewsqjcd.cloudfront.net/assets/logo-diff.svg" alt="Home Page"/>
          </a>
        </div>
        <Nav navItems={this.renderNav()}>
        </Nav>
        <SecNav>
        </SecNav>
        <CustomMenu>
        </CustomMenu>
      </div>
    );
  }
}

export default App;
