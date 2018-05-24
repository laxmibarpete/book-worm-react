import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from "validator";
import InlineError from '../messages/InlineError';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
      },
      loadding: false,
      errors: {}
    };
  }

  onChangeHandle = (e)=> {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit = ()=>{
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if(Object.keys(errors).length===0){
            this.props.submit(this.state.data);
      }
  }

  validate = (data)=>{
      const errors = {};
        if( !Validator.isEmail(data.email)) errors.email= "Invalid Email";
        if(!data.password) errors.password = "password can not be blank";
      return errors;

  }
  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit} >
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gamil.com"
            value={data.email}
            onChange={this.onChangeHandle}
          />
        </Form.Field>
        {errors.email && <InlineError text={errors.email}/>}
        <Form.Field  error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChangeHandle}
          />
        </Form.Field>
        {errors.password && <InlineError text={errors.password}/>}
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
