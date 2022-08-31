import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ApiExample() {
  return (
    <section className="vh-100">
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard
              className="text-white bg-image shadow-4-strong"
              style={{
                backgroundImage:
                  "url(https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif)",
              }}
            >
              <MDBCardHeader className="p-4 border-0">
                <div className="text-center mb-3">
                  <p className="h2 mb-1"></p>
                  <p className="mb-1"></p>
                  <p className="display-1 mb-1"></p>
                  <span className="">
                    Pressure: <span></span>
                  </span>
                  <span className="mx-2">|</span>
                  <span className="">
                    Humidity: <span></span>
                  </span>
                </div>
              </MDBCardHeader>

              <MDBCardBody className="p-4 border-top border-bottom mb-2">
                <MDBRow className="text-center">
                  <MDBCol size="2">
                    <strong className="d-block mb-2">Now</strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block"></strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2"></strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block"></strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2"></strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block"></strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2"></strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block"></strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2"></strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block"></strong>
                  </MDBCol>

                  <MDBCol size="2">
                    <strong className="d-block mb-2"></strong>
                    <img src="" className="" alt="" />
                    <strong className="d-block"></strong>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>

              <MDBCardBody className="px-5">
                <MDBRow className="align-items-center">
                  <MDBCol lg="6">
                    <strong>Today</strong>
                  </MDBCol>

                  <MDBCol lg="4" className="text-center">
                    <img className="w-100" src="" alt="" />
                  </MDBCol>

                  <MDBCol lg="4" className="text-end">
                    <span></span>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="align-items-center">
                  <MDBCol lg="6">
                    <strong>Tomorrow</strong>
                  </MDBCol>

                  <MDBCol lg="4" className="text-center">
                    <img className="w-100" src="" alt="" />
                  </MDBCol>

                  <MDBCol lg="4" className="text-end">
                    <span></span>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="align-items-center">
                  <MDBCol lg="6">
                    <strong>Day after tommorow</strong>
                  </MDBCol>

                  <MDBCol lg="4" className="text-center">
                    <img className="w-100" src="" alt="" />
                  </MDBCol>

                  <MDBCol lg="4" className="text-end">
                    <span></span>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
