// src/components/HomePage.js

import React from "react";
import "../styles/Home.css";
import img1 from "../images/med4.jpg";
import { Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  // const router = useRouter();

  return (
    <div style={{ backgroundImage: `url(${img1})`, 
    minHeight: "700px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    }}>
      <Container maxWidth="xl" sx={{ marginTop: 10 }}>
        <h1>Welcome to Equity Afya Hospital</h1>
        {/* <img src={img1}
        style={{position: "relative"}}
         alt="discreption"
         width={1700}
         height={800} 
  
      />  */}
        <section>
          <p>
            Your health is our priority. We provide top-notch medical services.
          </p>
        </section>
        <Link to="/book-appointment">
          <Button
            sx={{
              padding: 2,
              textTransform: "capitalize",
              borderRadius: "35px",
            }}
            variant="contained"
          >
            Book your appointment today
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
