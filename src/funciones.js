import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/Registrase" component={Registrase} />
      </div>
    </Router>
  );
}

function Login() {
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
          <Link to="/Registrase">Registrase</Link>
          </div>
        </MDBModalFooter>
      </MDBCardBody>
    </MDBCard>
</MDBContainer>
  );
}

function Registrase() {
  return (
      <div>
    <MDBContainer>
    <MDBCard className="card">
      <MDBCardBody>
        <MDBCardHeader className="form-header indigo rounded">
          <center>
          <h3 className="white-text mb-3 pt-3 font-weight-bold" >
             Registrarse:
          </h3>
          </center>
        </MDBCardHeader>
        <form>
          <div className="grey-text">
            <MDBInput
              label="Nombre"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Apellido Paterno"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Nick Name"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
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
            <MDBInput
              label="Confirmar Password"
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
            Registrarse
          </MDBBtn>
        </div>
        </form>
        <MDBModalFooter>
          <div className="font-weight-light">
          <Link to="/">Log In</Link>
          </div>
        </MDBModalFooter>
      </MDBCardBody>
    </MDBCard>
</MDBContainer>
<br/>
<br/>
</div>
  );
}

/* function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
} */

export default BasicExample;