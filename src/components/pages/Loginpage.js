
import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

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
      push :propTypes.funs.isRequired
    }
  ).isRequired,

  login : propTypes.funs.isRequired
};

export default LoginPage;