import React, { Component, PropTypes } from 'react';

export default class CustomMenu extends Component {
  render() {
    return (
      <div>
        <button type="button" className="icon-custom-menu is-closed">
        <span className="icon-top"></span>
        <span className="icon-middle"></span>
        <span className="icon-bottom"></span>
        </button>
      </div>
    );
  }
}
