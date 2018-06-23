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
         We encourage communication by reaching out and sending a message without an intended recipient.  Share your thoughts, feeling, moods, links, suggestions, complaints, worries, fears, secrets, etc.  
          </p>
          <p>
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
            molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
            hendrerit semper. Nulla tincidunt accumsan lobortis. </p>
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. 
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
