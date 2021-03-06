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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/theme/MyImage.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
      {/* style={{"background": "linear-gradient(150deg, #276aa0 15%, #003866 70%, #001c33 94%)"}} > */}
              
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4" style={{"background": "linear-gradient(150deg, #e67878 15%, #79313b 70%, #5a1f24 94%)"}} >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        {/* <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button> */}
                        <br/><br/>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading"> </span>
                          <span className="description"> </span>
                        </div>
                        <div>
                          <span className="heading"> </span>
                          <span className="description"> </span>
                        </div>
                        <div>
                          <span className="heading"> </span>
                          <span className="description"> </span>
                        </div>
                      </div>
                    </Col>
                    <br/><br/>
                  </Row>
                  <div className="text-center mt-5 text-dark">
                    <h3 className="text-dark">
                      Hasnaa Al-Habahbeh{" "}
                      <span className="font-weight-light">, 23</span>
                    </h3>
                    <div className="h6 font-weight-300 text-dark">
                      <i className="ni location_pin mr-2 " />
                      Amman, Jordan
                    </div>
                    <div className="h6 mt-4 text-danger">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer - Electrical Engineer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      LTUC ASAC - University of Jordan
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center text-dark">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Hello, my name is Hasnaa Al-Habahbeh, I graduated as an electrical engineer from the university 
                        of Jordan. I have always been interested in coding and technology in general, and recently 
                        decided to take the opportunity to become a web developer.
                        </p>
                        {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="col-sm">
                        <br/><br/><br/>
                        <Button 
                        color="danger" 
                        type="button"
                        href="landing-page"
                        >
                          Portfolio
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
