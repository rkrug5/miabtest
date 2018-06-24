import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="./images/miabfrontimg.jpg">
      <h1>Message in a Bottle</h1>
      <h2>What message might make your day?</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Message In A Bottle!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Messages in bottles have been used to send distress messages; in scientific studies;
            as memorial tributes; to convey expedition reports, and to carry letters or reports from those believing
            themselves to be doomed.  Messages in bottles have been used as invitations to prospective pen pals and letters
          to actual or imagined love interests have also been sent as messages in bottles. </p>
          <p>
            Our app is a modern take on some of those same concepts. The lore surrounding messages in bottles has often
            been of a romantic or poetic nature. And finding a bottle has normally been viewed as a positive
            experience. We hope to spread some of that excitement and positivity here.
          </p>
          <p>
            We encourage communication by reaching out and sending a message without an intended recipient.
            Share your thoughts, feeling, moods, links, suggestions, complaints, worries, fears, secrets, etc.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
