import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pankaj Devjani </span>
            from <span className="purple"> Khairthal(Alwar), India.</span>
            <br />
            I Recently Completed my  Internship at Career Pandit Edu Tech Ltd <br />as Data Analyst Intern.
            <br />
            I have completed MCA (Masters Of Computer Application) at<br />Christ (Deemed To Be University),Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listning Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pankaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
