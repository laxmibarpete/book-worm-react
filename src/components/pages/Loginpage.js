
import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { login } from "../action/auth";


class LoginPage extends React.Component{
  onSubmit = (data)=>this.props.login(data).then(()=>{this.props.history.push('/')});

  render(){
    return(
      <div>
      <LoginForm submit={this.onSubmit}/>
      </div>
    )
  }
}

LoginPage.propTypes={
  history : PropTypes.shape(
    {
      push :PropTypes.func.isRequired
    }
  ).isRequired,

  login : PropTypes.func.isRequired
};


export default connect(null, {login})(LoginPage);