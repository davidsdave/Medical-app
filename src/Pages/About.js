import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Divider, List, ListItem, ListItemText } from '@mui/material';
import backgroundImage from '../images/med8.jpg'; // Import the background image
import hospitalImage from '../images/med5.jpg'; // Import the hospital image

const AboutPage = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', paddingTop: '80px' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff', marginBottom: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          About Equity Afya Hospital
        </Typography>
        <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
          <CardMedia
            component="img"
            image={hospitalImage}
            alt="Equity Afya Hospital"
            height="400"
            style={{ objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
          />
          <CardContent>
            <Typography variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
              Equity Afya Hospital is a leading healthcare facility committed to providing high-quality medical services to communities across Africa. With state-of-the-art infrastructure and a team of skilled healthcare professionals, we offer a wide range of healthcare services including primary care, specialized treatments, surgeries, and preventive care.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
              Our mission is to make healthcare accessible and affordable for all, regardless of socio-economic background. We strive to deliver compassionate care, promote health education, and improve health outcomes for individuals and families in need.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
              At Equity Afya Hospital, we are dedicated to innovation and excellence in healthcare delivery. We leverage technology, research, and best practices to continuously improve our services and meet the evolving needs of our patients and communities.
            </Typography>
          </CardContent>
        </Card>

        <Divider style={{ marginTop: '40px', marginBottom: '20px', backgroundColor: '#fff' }} />

        <Typography variant="h5" align="center" gutterBottom style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Contact Us
        </Typography>
        <List style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '20px' }}>
          <ListItem>
            <ListItemText primary="Address: 123 Equity Afya Street, Nairobi, Kenya" style={{ fontSize: '1.1rem' }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone: +254 123 456 789" style={{ fontSize: '1.1rem' }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email: info@equityafyahospital.com" style={{ fontSize: '1.1rem' }} />
          </ListItem>
        </List>

        {/* Additional sections such as Our Services, Mission & Values can be added here */}
      </Container>
    </div>
  );
};

export default AboutPage;
