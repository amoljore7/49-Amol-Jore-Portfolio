import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./programs.styles.css";

const Programs = () => {
  return (
    <div id="programs">
      <h1 className="pt-3 text-center font-details-b pb-3">PROGRAMS</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="https://github.com/amoljore7/01-Logic-Building-Program-All/tree/master/01-Problems-On-C"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="C lang">
                  <i class="fa fa-laptop" aria-hidden="true"></i> C
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/amoljore7/01-Logic-Building-Program-All/tree/master/02-Problems-On-C%2B%2B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="CPP">
                  <i class="fa fa-laptop" aria-hidden="true"></i> C++
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/amoljore7/01-Logic-Building-Program-All/tree/master/03-Data-Structure-Using%20-C"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="DS in C">
                  <i class="fa fa-laptop" aria-hidden="true"></i> DS-'C'
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/amoljore7/01-Logic-Building-Program-All/tree/master/04-Data-Structure-Using%20-C%2B%2B"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  id="youtube-btn"
                  variant="outline-info"
                  title="Lets code together!"
                >
                  <i class="fa fa-laptop" aria-hidden="true"></i> DS-'C++'
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/amoljore7/07-Java-Program"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="java">
                  <i class="fa fa-laptop" aria-hidden="true"></i> Java
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/amoljore7/11-PHP-Programs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="PHP">
                  <i class="fa fa-laptop" aria-hidden="true"></i> PHP
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/amoljore7/08-CSharp-Program"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="C sharp">
                  <i class="fa fa-laptop" aria-hidden="true"></i> C#
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Programs;
