import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(Authcontext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    if (password.length < 6) {
      setError("password must be 6 chracter long")
      return
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);


      })
      .catch(error => {
        console.error(error);
        setError(error.message)
      })

  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePhotoUrlChange = (event) => {
  //   setPhotoUrl(event.target.value);
  // };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container className='d-flex justify-content-center w-50'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' value={name} onChange={handleNameChange} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' value={email} onChange={handleEmailChange} />
        </Form.Group>
        {/*
        <Form.Group className='mb-3' controlId='formBasicPhotoUrl'>
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type='text' placeholder='Enter your photo URL' value={photoUrl} onChange={handlePhotoUrlChange} />
        </Form.Group> */}

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
          <p>  {error}</p>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <p>
          Already have an account? <Link to={'/login'}>Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
