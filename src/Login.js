import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer>
          <MDBCard className="card">
            <MDBCardBody>
              <MDBCardHeader className="form-header indigo rounded">
                <center>
                <h3 className="white-text mb-3 pt-3 font-weight-bold" >
                   Login:
                </h3>
                </center>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="indigo"
                  className="mb-3"
                  type="submit"
                  rounded
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                    <a href="Registrase.html">Registrarse</a>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
    </MDBContainer>
  );
};

export default FormPage;