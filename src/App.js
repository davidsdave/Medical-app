import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './Header.css';
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Log from "./Pages/Log In";
import Registration from "./Pages/Registration";
import { BookAppointment } from "./Pages/book-appointment"; 
import Appointment from "./Apointment/Appointment";
const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Log In" element={<Log In />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Appointment" element={<Appointment/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
