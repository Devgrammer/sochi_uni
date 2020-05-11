import React, { Fragment } from "react";
import { Container, Row, } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Nav";
import HeroSection from "./components/hero";

function App() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <HeroSection />
        </Row>
      </Container>
   </Fragment> 
  );
}

export default App;
