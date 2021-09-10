/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default" style={{"background": "linear-gradient(150deg, #276aa0 15%, #003866 70%, #001c33 94%)"}}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Hasnaa Al-Habahbeh{" "}
                        <span>Full-stack developer.</span>
                      </h1>
                      <p className="lead text-white">
                        {/* Add text here */}
                      </p>
                      <br/><br/>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <br />
                          <h6 className="text-primary text-uppercase">
                            Aluminum Souq
                          </h6>
                          <p className="description mt-3">
                            Aluminum Souq is an online store for an Aluminum factory. It contains a landing page, a page
                            for displaying the products line and services, a store, and an about/contact page.
                            It has a Sign-up and log-in functionality for visitors and a show user accounts,
                            feedback inbox, and general statistics for the owner.
                            <br />
                            This website was created as the final project for CodeFellows Code 201 course.
                          </p>
                          <div>
                            <Badge pill className="mr-1" color="warning">
                              HTML
                            </Badge>
                            <Badge pill className="mr-1" style={{"background-color":"#FDDB23", "color":"white"}}>
                              Vanilla JS
                            </Badge>
                            <Badge pill className="mr-1" color="info">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href="https://git-better-dot.github.io/aluminum-factory/"
                          >
                            Link
                          </Button>
                          <Button
                            className="mt-4"
                            color="default"
                            href="https://github.com/git-better-dot/aluminum-factory"
                          >
                            Code
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <br />
                          <h6 className="text-success text-uppercase">
                            Pat’s Salmon Cookie Stand
                          </h6>
                          <p className="description mt-3">
                            Pat’s Salmon Cookies is a website for a business created by someone called Pat; who developed a
                            recipe for a coffee-time confection called Salmon Cookies. The website contains a public facing page and
                            an application that calculates daily sales for each store location.
                            <br />
                            This website was created as the second project for
                            CodeFellows code-201 course. <br /><br />
                          </p>
                          <div>
                            <Badge pill className="mr-1" color="warning">
                              HTML
                            </Badge>
                            <Badge pill className="mr-1" style={{"background-color":"#FDDB23", "color":"white"}}>
                              Vanilla JS
                            </Badge>
                            <Badge pill className="mr-1" color="info">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href="https://hasnaa38.github.io/cookie-stand/"
                          >
                            Link
                          </Button>
                          <Button
                            className="mt-4"
                            color="default"
                            href="https://github.com/hasnaa38/cookie-stand"
                          >
                            Code
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <br/>
                          <h6 className="text-warning text-uppercase">
                            Horned Animals
                          </h6>
                          <p className="description mt-3">
                            Horned Animals is an application that displays images and information of horned animals.
                            It allows searching and filtering the animals based on the number of horns. Also,
                            visitors can like the pictures of their choice.
                            <br />
                            This application was created as the first project for CodeFellows code-301 course.
                          </p>
                          <br /><br />
                          <div>
                            <Badge pill className="mr-1" color="primary">
                              React
                            </Badge>
                            <Badge pill className="mr-1" color="info">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href="https://keen-brattain-b3c332.netlify.app/"
                          >
                            Link
                          </Button>
                          <Button
                            className="mt-4"
                            color="default"
                            href="https://github.com/hasnaa38/horned-animals"
                          >
                            Code
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            
          <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <br />
                          <h6 className="text-primary text-uppercase">
                            New Project 1
                          </h6>
                          <p className="description mt-3">
                            Project description
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              #1
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              #2
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              #3
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href=""
                          >
                            Link
                          </Button>
                          <Button
                            className="mt-4"
                            color="default"
                            href=""
                          >
                            Code
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <br />
                          <h6 className="text-success text-uppercase">
                            New Project 2
                          </h6>
                          <p className="description mt-3">
                            Project description
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              #1
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              #2
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              #3
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href=""
                          >
                            Link
                          </Button>
                          <Button
                            className="mt-4"
                            color="default"
                            href=""
                          >
                            Code
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <br />
                          <h6 className="text-warning text-uppercase">
                            New Project 3
                          </h6>
                          <p className="description mt-3">
                            Project description
                          </p>
                          <div>
                            <Badge color="default" pill className="mr-1">
                              #1
                            </Badge>
                            <Badge color="default" pill className="mr-1">
                              #2
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="default"
                            href=""
                          >
                            Link
                          </Button>
                          <Button
                            className="mt-4"
                            color="default"
                            href=""
                          >
                            Code
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                {/* <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col> */}
                <Col className="order-md-1" md="11">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> */}
                    <h3>My Background</h3>
                    <p>
                      Hello, my name is Hasnaa Al-Habahbeh. I have recently graduated with a B.S. degree in electrical 
                      engineering from the university of Jordan.
                      I grew up surrounded by technology and have always been interested in the different aspects of it.
                      <br/><br/>
                      What fascinates me the most about technology is how limitless it can be. Basically, with technology, 
                      if you can think of something, you can build it and make it real. On the other hand, coding offers a large room 
                      for building valuable applications and finding creative solutions for various problems.
                      Therefore, I recently decided to dive deeper into coding and choose the web developing path to do so.
                      <br/><br/>
                      I aspire to become a decent full-stack developer and prove my abilities in building creative and helpful solutions.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-250">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Contact</h2>
                  {/* <p className="lead text-white">
                    
                  </p> */}
                </Col>
              </Row>

            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Have a question or want to work together?</h4>
                      <p className="mt-0">
                        Your project is very important to me.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={() => this.setState({ emailFocused: true })}
                            onBlur={() => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
