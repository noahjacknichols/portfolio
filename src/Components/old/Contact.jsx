import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Contact.css";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
export default class Contact extends React.Component {
  state = {
    email: "",
    content: "",
  };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onButtonPress() {
    console.log(this.state);
  }

  render() {
    return (
      <VisibilitySensor partialVisibility offset={{ top: 400, bottom: 400 }}>
        {({ isVisible }) => (
          <Spring
            config={{ duration: 700, delay: 200 }}
            from={{}}
            to={{ backgroundColor: isVisible ? "#c1605c" : "grey" }}
          >
            {(props) => (
              <div id="section4">
                <Container>
                  <Row>
                    <Col xs={{ span: 12 }}>
                      <div className="contactTitle text-centre">Contact</div>
                    </Col>
                  </Row>
                  <div className="contactContainer" style={props}>
                    <Row>
                      <Col xs={12}>
                        <Spring
                          config={{
                            duration: 700,
                            delay: isVisible ? 200 : 100,
                          }}
                          from={{ opacity: 0, marginLeft: "0rem" }}
                          to={{
                            opacity: isVisible ? 1 : 0,
                            marginLeft: isVisible ? "2rem" : "0rem",
                          }}
                        >
                          {(props) => (
                            <div className="white contactHeader" style={props}>
                              Say Hello!
                            </div>
                          )}
                        </Spring>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Spring
                          config={{
                            duration: 700,
                            delay: isVisible ? 900 : 100,
                          }}
                          from={{ opacity: 0 }}
                          to={{ opacity: isVisible ? 1 : 0 }}
                        >
                          {(props) => (
                            <div className="white contactEmail" style={props}>
                              noahjacknichols@gmail.com
                            </div>
                          )}
                        </Spring>
                      </Col>
                      <Col xs={12}>
                        <Spring
                          config={{
                            duration: 700,
                            delay: isVisible ? 1600 : 100,
                          }}
                          from={{ opacity: 0 }}
                          to={{ opacity: isVisible ? 1 : 0 }}
                        >
                          {(props) => (
                            <div className="or" style={props}>
                              / OR /
                            </div>
                          )}
                        </Spring>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div>
                          <Spring
                            config={{
                              duration: 700,
                              delay: isVisible ? 1800 : 100,
                            }}
                            from={{ opacity: 0 }}
                            to={{ opacity: isVisible ? 1 : 0 }}
                          >
                            {(props) => (
                              <div className="contactText" style={props}>
                                check me out on
                              </div>
                            )}
                          </Spring>
                          <div className="contactDividerR" />
                        </div>
                      </Col>
                      <Col className="linkContainer" xs={12}>
                        <Spring
                          config={{
                            duration: 700,
                            delay: isVisible ? 1800 : 100,
                          }}
                          from={{ opacity: 0 }}
                          to={{ opacity: isVisible ? 1 : 0 }}
                        >
                          {(props) => (
                            <div className="inline" style={props}>
                              <div className="white linkText">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="socialLinks"
                                  href="https://www.linkedin.com/in/noah-nichols/"
                                >
                                  LinkedIn
                                </a>
                              </div>
                              <div className="white linkText and"> & </div>
                              <div className="white linkText">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="socialLinks"
                                  href="https://github.com/noahjacknichols?tab=repositories"
                                >
                                  Github
                                </a>
                              </div>
                            </div>
                          )}
                        </Spring>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    );
  }
}
