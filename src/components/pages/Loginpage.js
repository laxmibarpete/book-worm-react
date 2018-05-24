
import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component{
  onSubmit = (data)=>{
        console.log(data);
  }
  render(){
    return(
      <div>
      <LoginForm submit={this.onSubmit}/>
      </div>
    )
  }
}
export default LoginPage;