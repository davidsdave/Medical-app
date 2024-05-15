// Import necessary dependencies
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import backgroundImage from "../images/med11.jpg";

// Create the main component

const Registration = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  // Submit function to log form data to the console
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3500/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form Data:', formData);
        console.log('Registration successful!');
        // Optionally, you can redirect the user to another page or show a success message
      } else {
        console.error('Registration failed!');
        // Handle registration failure
      }
    } catch (error) {
      console.error('Error registering:', error);
      // Handle error
    }
  };


  // JSX structure of the component
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '40px 0' }}>
      <Container maxWidth="md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px' }}>
        <Typography variant="h4" align="center" gutterBottom>
        Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
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
          SignUp
        </Button>
      </form>
    </Container>
  </div>
  );
};

export default Registration;