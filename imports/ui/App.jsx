import React, { Component } from 'react';

import Nav from "./Nav.jsx";
import SecNav from "./SecNav.jsx";
import CustomMenu from "./CustomMenu.jsx";
import NavBar from "./NavBar.jsx";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showNavBar: false,
    };
  }

  renderNav() {
    return [
      { _id: 1, text: 'MENU1', submenus: ['SUBMENU1', 'SUBMENU2'] },
      { _id: 2, text: 'MENU2', submenus: null},
      { _id: 3, text: 'MENU3', submenus: ['SUBMENU3', 'SUBMENU4', 'SUBMENU5'] },
    ];
  }

  setShowNavBar(showState) {
    this.setState({showNavBar: showState})
  }

  render() {
    return (
      <div className="container-header">
        <div className="logo-company">
          <a href="/">
            <img id="logo-meteor-home" src="" alt="Home Page"/>
          </a>
        </div>
        <Nav navItems={this.renderNav()}>
        </Nav>
        <SecNav></SecNav>
        <CustomMenu showNavBar={this.state.showNavBar} setShowNavBar={this.setShowNavBar.bind(this)}></CustomMenu>
        <NavBar showNavBar={this.state.showNavBar} navItems={this.renderNav()}></NavBar>
      </div>
    );
  }
}

export default App;
