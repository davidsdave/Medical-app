// Import necessary dependencies
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import '../styles/Login.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from "../images/med10.jpg"
// Create the main component
const LogIn = () => {
  const navigate = useNavigate()
  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handler to update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3500/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.statusCode === 200) {
         localStorage.setItem("accessToken", data.accessToken);
        console.log('Login successful');
         navigate("/");
        // Redirect or set authentication token as needed
      } else {
        console.log('Login failed:', data.message);
        // Display error message to the user
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error
    }
  };

  // JSX structure of the component
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '40px 0' }}>
    <Container maxWidth="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px' }}>
    
   <Container maxWidth="sm"></Container>
      <Link to="/Home">
        <span>
          <ArrowBackIosIcon /> Back
        </span>
      </Link>
      
      <Typography variant="h4" align="center" gutterBottom>
        Log In
      </Typography>
      <form onSubmit={handleSubmit}>
        
        <TextField
          label=" User Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        
        />
        <Button type="submit" variant="contained" color="primary">
          LogIn
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default LogIn; 