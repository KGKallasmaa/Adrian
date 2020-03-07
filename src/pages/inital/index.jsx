import React from 'react';
import { Helmet } from 'react-helmet';

import './assets/css/main.css';
import './assets/css/util.css';

import logo from './assets/images/logo.png';

export class InitalBotcreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Adrian',
      welcome_message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleClick(e) {
    e.preventDefault();
    const { name, welcome_message } = this.state;
    //TODO: what should we do with the info?
    //Currently redirecting to the main page
    window.location.href = '/';
  }

  render() {
    const name = this.state.name;
    return (
      <React.Fragment>
        <Helmet>
          <title>Welcome to Adrian</title>
        </Helmet>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-26">{name} </span>
                <span className="login100-form-title p-b-48">
                  <img className="logo" src={logo} alt={'Adrian logo'} />
                </span>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder={'Name your Bot'}
                  />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder={'Who are your customers?'}
                  />
                </div>
                <div className="wrap-input100 validate-input">
                  <textarea
                    className="input100"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder={'What should your customers do or feel after conversation?'}
                  />
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="welcome_message"
                    onChange={this.handleChange}
                    placeholder={'What\'s your welcoming message?'}
                  />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn" onClick={this.handleClick}>
                      Create bot
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </React.Fragment>
    );
  }
}
