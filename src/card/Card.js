import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./card.css";

export default function Card() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
      <MDBContainer className="h-100">
        <MDBRow
          className="justify-content-center align-items-center h-100"
          style={{ color: "#282828" }}
        >
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard
              className="mb-4 gradient-custom"
              style={{ borderRadius: "25px" }}
            >
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2">
                  <div>
                    <h2 className="display-2">
                      <strong>23°C</strong>
                    </h2>
                    <p className="text-muted mb-0">Coimbra, Portugal</p>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                      width="150px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  <div className="flex-column">
                    <p className="small">
                      <strong>21°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>12:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>2°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>1:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>20°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>2:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>19°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>3:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>18°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>4:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  <div className="flex-column">
                    <p className="small">
                      <strong>21°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Mon</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>20°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Tue</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>16°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Wed</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>17°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Thu</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>18°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Fri</strong>
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
