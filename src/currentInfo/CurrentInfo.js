import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function CurrentInfo() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard
              className="bg-dark text-white"
              style={{ borderRadius: "40px" }}
            >
              <div className="bg-image" style={{ borderRadius: "35px" }}>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                  className="card-img"
                  alt="weather"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                ></div>
              </div>
              <div className="card-img-overlay text-dark p-5">
                <MDBTypography tag="h4" className="mb-0">Juneau, Alaska, US</MDBTypography>
                <p className="display-2 my-3">1.28°C</p>
                <p className="mb-2">
                  Feels Like: <strong>-1.08 °C</strong>
                </p>
                <MDBTypography tag="h5">Snowy</MDBTypography>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
