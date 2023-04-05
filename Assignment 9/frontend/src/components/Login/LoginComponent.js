import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Col, Row, Container, Alert } from 'react-bootstrap';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);


  console.log("loginForm")
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    // Client-side validation
    const validationErrors = [];
    if (!email.trim()) {
      validationErrors.push('Email is required');
    }
    if (!password.trim()) {
      validationErrors.push('Password is required');
    }
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // API integration using Fetch
    try {
        const response = await axios.post('http://localhost:8000/api/user/login', {
            email,
            password
          });
          console.log(response.data);
        setAuthenticated(true);
    //   const data = await response.json();
    //   console.log(data)
    localStorage.setItem('username', response.data.name);
      localStorage.setItem('token', response.data.token); // Store JWT in localStorage
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
        setShowAlert(true)
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="p-4 border rounded">
            <h2 className="text-center mb-4">Login</h2>
            {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                Invalid credentials!
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Login
              </Button>
            </Form>
            <div className="already-member-login">
        <span>New User?</span>
        <a href="/register">
            <Button variant="link">Register</Button>
        </a>
      </div>
          </div>
        </Col>
      </Row>
    </Container>

  );
};

export default LoginForm;
