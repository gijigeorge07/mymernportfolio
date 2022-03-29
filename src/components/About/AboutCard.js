import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Giji George </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am an Aspiring MERN Stack Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Art and Craft Developer.
            </li>
            <li className="about-activity">
              <ImPointRight /> Collections
            </li>
            <li className="about-activity">
              <ImPointRight /> Glass Painting and Drawing.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Giji George</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
