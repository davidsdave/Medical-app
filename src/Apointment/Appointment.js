import { Card, Container, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Appointment() {
  const details = JSON.parse(localStorage.getItem("applicationData"));
  return (
    <Container>
      <Link to="/book-appointment">
        <span>
          <ArrowBackIosIcon /> Back
        </span>
      </Link>
      <Card
        sx={{
          padding: 5,
          marginTop: 10,
          boxShadow: "none",
          border: "solid 1px #e83116",
          borderRadius: 5,
        }}
      >
        <Typography variant="body1">Full Name:</Typography>
        <Typography variant="body2">{details?.fullName}</Typography>

        <Typography variant="body1">Email:</Typography>
        <Typography variant="body2">{details?.email}</Typography>

        <Typography variant="body1">Date booked:</Typography>
        <Typography variant="body2">
          {moment().format("DD MMM YYYY, HH:mm:ss")}
        </Typography>

        <Typography variant="body1">Date of Appointment:</Typography>
        <Typography variant="body2">--/--/----</Typography>

        <Typography variant="body1">Status:</Typography>
        <Typography variant="body2">Pending allocation</Typography>
      </Card>
    </Container>
  );
}
