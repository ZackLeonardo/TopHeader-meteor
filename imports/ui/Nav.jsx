// 大屏幕下，功能菜单导航－－横行
import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {

  renderItems(){
    return this.props.navItems.map((item) => (
      <Item key={item._id} item={item}/>
    ));
  }

  render() {
    return (
      <nav className="primary-menu">
        {this.renderItems()}
      </nav>
    );
  }
}

class Item extends Component{
  render(){
    if (this.props.item.submenus != null) {
      return (
        <a href={"/" + this.props.item.text} className="menu-main has-sub-menu">
          <span>{this.props.item.text}</span>
            <ul className="sub-menu-secondary">
              {this.props.item.submenus.map((menu, index) => {
                return (
                  <li key={this.props.item._id + index}>
                    <a href={"/"+menu} className="menu-child">
                      {menu}
                    </a>
                  </li>
                );
              })}
            </ul>
        </a>
      );
    }else {
      return (
        <a href={"/" + this.props.item.text} className="menu-main">
          <span>{this.props.item.text}</span>
        </a>
      );
    }

  }
}
