import React, { Component, PropTypes } from 'react';

export default class CustomMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNavBar: false,
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.showMenu.bind(this)} className={this.state.showNavBar ? "icon-custom-menu is-open" : "icon-custom-menu is-closed"}>
        <span className="icon-top"></span>
        <span className="icon-middle"></span>
        <span className="icon-bottom"></span>
        </button>
      </div>
    );
  }

  showMenu() {
    this.setState({showNavBar: !this.state.showNavBar});
  }
}
