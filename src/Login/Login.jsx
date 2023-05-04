import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(Authcontext)
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error,setError]=useState('')
      const [success,setSuccess]=useState('')
    
      const handleSubmit = (event) => {
        event.preventDefault(); // prevent the form from submitting by default
        console.log('Email:', email, 'Password:', password);
        signIn(email, password)
          .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            setSuccess("login Suucess")
          })
          .catch(error => {
            console.log(error.message);
            setError(error)
          })
      }
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    

      return (
            <Container className='d-flex justify-content-center'>
            <Form className='w-50 '  onSubmit={handleSubmit}>
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
                  <p>New to <span>Quisinne De French</span>? <Link to={'/register'}>Register</Link></p>
                  <p>{success}</p>
            </Form>
            </Container>

      );
};

export default Login;