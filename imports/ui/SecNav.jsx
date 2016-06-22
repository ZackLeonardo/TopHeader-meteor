import React, { Component, PropTypes} from "react";

export default class SecNav extends Component {

  showLogin(){
    //  alert(document.getElementById("login-popup").className);
    document.getElementById("login-popup").className = "fadeInDown";
  }

  render() {
    return (
      <div className="secondary-nav">
        <nav>
          <a id="login" onClick={this.showLogin} className="menu-secondary">Login</a>
          <a id="register" href="/sign-up" className="menu-secondary">Register</a>
        </nav>
        <div id="login-popup" className="hidden">
          <div className="form-login">
            <h3>Login</h3>
            <form>
              <input type="text" name="username" placeholder="Username / Email"/>
              <input type="password" name="password" placeholder="Password"/>
              <span className="error-account"></span>
              <button type="submit" className="action-login btn-primary-meteor hvr-rectangle-out-bg">Login</button>
            </form>
            <div className="action-form-login">
              <a data-url="resetPassword" href="/reset-password">
                <i></i>
                <span>Forgot your Password?</span>
              </a>
              <a data-url="signUp" href="/sign-up">
                <i></i>
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
