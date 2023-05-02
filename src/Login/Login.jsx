import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault(); // prevent the form from submitting by default
        console.log('Email:', email, 'Password:', password);
        // do whatever you want with the email and password data, such as sending it to a backend server
      }
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    

      return (
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </Form.Group>
                  
                  <Button variant="primary" type="submit">
                        Submit
                  </Button>
            </Form>

      );
};

export default Login;