import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function CardUI() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ borderRadius: "10px" }}>
              <MDBRipple
                tag="div"
                className="bg-image"
                rippleColor="light"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw2.webp"
                  className="w-100"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0,0,0,.45)" }}
                >
                  <div className="d-flex justify-content-between p-4">
                    <a href="#!" className="text-white">
                      <MDBIcon fas icon="chevron-left" size="lg" />
                    </a>
                    <a href="#!" className="text-white">
                      <MDBIcon fas icon="cog" size="lg" />
                    </a>
                  </div>
                  <div className="text-center text-white">
                    <p className="h3 mb-4">Clear night</p>
                    <p className="h5 mb-4">Detroit, US</p>
                    <p className="display-2">
                      <strong>20°C</strong>{" "}
                    </p>
                  </div>
                </div>
              </MDBRipple>
              <MDBCardBody className="p-4 text-center">
                <a href="#!" className="text-body">
                  <MDBIcon fas icon="chevron-up mb-4" size="lg" />
                </a>
                <div className="d-flex justify-content-between mb-3">
                  <p className="h5 fw-normal">Yesterday</p>
                  <p className="h5 fw-normal">
                    <MDBIcon fas icon="sun pe-2" /> 23°C
                  </p>
                </div>
                <div
                  className="d-flex justify-content-between"
                  style={{ color: "#aaa" }}
                >
                  <p className="h5 fw-normal">Tommorow</p>
                  <p className="h5 fw-normal">
                    <MDBIcon fas icon="cloud pe-2" /> 21°C
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
