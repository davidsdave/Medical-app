import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../images/med12.jpg";
const MedicalAppointmentForm = () => {
  const navigate = useNavigate();
  const [getResp, setResponse] = useState("");
  const handleSubmit = async (values) => {
    // console.log(values);
    const reqBody = {
      fullName: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      description: values.description,
    };
    console.log(reqBody);
    const resp = await axios.post("http://localhost:3500/book", reqBody, {
      "Content-type": "application/json",
    });
    console.log(">>>>>>>>>", resp);
    if (resp?.data?.statusCode === 200) {
      localStorage.setItem("applicationData", JSON.stringify(values));
      setResponse(resp.data.message);
      setTimeout(() => {
        navigate("/Appointment");
      }, 3000);
    }

    // Add your submission logic here
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '40px 0' }}>
      
    <Formik
  
  initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        description: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          {getResp && <Alert severity="success">{getResp}</Alert>}
          <Form>
            <Field
              as={TextField}
              fullWidth
              name="fullName"
              label="Full Name"
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              fullWidth
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              margin="normal"
            />
            <Field
              as={TextField}
              fullWidth
              name="description"
              label="Description of Patient"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
          
        </>
      )}
    </Formik>
    </div>

  
  );
};

export default MedicalAppointmentForm;
