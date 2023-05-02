import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the form from submitting by default
    console.log('Name:', name, 'Email:', email, 'Photo URL:', photoUrl, 'Password:', password);
    // do whatever you want with the form data, such as sending it to a backend server
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoUrlChange = (event) => {
    setPhotoUrl(event.target.value);
  };

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

        <Form.Group className='mb-3' controlId='formBasicPhotoUrl'>
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type='text' placeholder='Enter your photo URL' value={photoUrl} onChange={handlePhotoUrlChange} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
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
