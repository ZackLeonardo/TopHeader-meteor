import React, { Component, PropTypes } from "react";

export default class NavBar extends Component {

  renderItems(){
    return this.props.navItems.map((item) => (
      <Item key={item._id} item={item}/>
    ));
  }

  render(){
    return (
      <nav>
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



// <nav class="navbar navbar-inverse" id="menu-Onmobile" role="navigation">
//     <div class="list-menu-mobile">
//       <nav id="primary-menu">
//     <a id="developers" href="/developers" class="menu-main active-primary has-sub-menu" data-letters="Developers">
//       <span>Developers</span>
//       <ul class="sub-menu-secondary">
//         <li><a class="menu-child" href="/install">Install</a></li>
//         <li><a class="menu-child" href="/tutorials">Tutorials</a></li>
//         <li><a class="menu-child" href="http://guide.meteor.com/">Guide</a></li>
//         <li><a class="menu-child" href="http://docs.meteor.com/#/full/">Documentation</a></li>
//         <li><a class="menu-child" href="https://forums.meteor.com/">Forums</a></li>
//         <li><a class="menu-child" href="http://meteor.meetup.com/">Meetups</a></li>
//
//         <!-- <li><a class="menu-child" href="{{pathFor 'articles'}}">Articles</a></li> -->
//         <!-- <li><a class="menu-child" href="{{pathFor 'speakerKit'}}">Speaker Kit</a></li> -->
//       </ul>
//     </a>
//     <a id="showcase" href="/showcase" class="menu-main" data-letters="Showcase">
//       <span>Showcase</span>
//     </a>
//     <a id="Solutions" href="/solutions" class="menu-main has-sub-menu" data-letters="Solutions">
//       <span>Solutions</span>
//       <ul class="sub-menu-secondary">
//         <li><a class="menu-child" href="/hosting">Meteor Hosting</a></li>
//         <li><a class="menu-child" href="/developer-support">Developer Support</a></li>
//         <li><a class="menu-child" href="/partners">Official Partners</a></li>
//         <li><a class="menu-child" href="/submit-rfp">Submit RFP</a></li>
//         <li><a class="menu-child" href="/become-a-partner">Become a Partner</a></li>
//       </ul>
//       </a>
//
//     <a id="Company" href="/company" class="menu-main has-sub-menu" data-letters="Company">
//       <span>Company</span>
//       <ul class="sub-menu-secondary">
//         <li><a class="menu-child" href="http://info.meteor.com/blog">Blog</a></li>
//         <li><a class="menu-child" href="/careers">Careers</a></li>
//         <li><a class="menu-child" href="/culture">Culture</a></li>
//         <li><a class="menu-child" href="/press">Press</a></li>
//         <!-- <li><a class="menu-child" href="{{pathFor 'contact'}}">Contact Us</a></li>
//         <li><a class="menu-child" href="{{pathFor 'policyNew'}}">Policies</a></li> -->
//       </ul>
//     </a>
//   </nav>
//     </div>
//
//       <a id="login-nav-mobile" href="/sign-in" class="menu-secondary mobile-menu">Login</a>
//       <a id="register" href="/sign-up" class="menu-secondary mobile-menu">Register</a>
//
//   </nav>
