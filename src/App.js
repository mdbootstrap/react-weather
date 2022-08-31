import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">Basic</MDBBtn>
      </Link>
      <Link to="/weather-app">
        <MDBBtn className="m-3">Weather App</MDBBtn>
      </Link>
      <Link to="/card">
        <MDBBtn className="m-3">Card</MDBBtn>
      </Link>
      <Link to="/current-info">
        <MDBBtn className="m-3">Current Weather info card</MDBBtn>
      </Link>
      <Link to="/report">
        <MDBBtn className="m-3">Weather report</MDBBtn>
      </Link>
      <Link to="/card-ui">
        <MDBBtn className="m-3">Weather card UI</MDBBtn>
      </Link>
      <Link to="/api">
        <MDBBtn className="m-3">Weather dashboard with API</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
