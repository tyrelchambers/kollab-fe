import React from "react";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import { H1 } from "../../components/Headings/Headings";

function About() {
  return (
    <DisplayWrapper>
      <H1>The Mission</H1>
      <p>
        Kollab is a place for you to showcase your proudest projects. Sometimes
        you're working on your next big idea and sometimes you want to be able
        to share that. This is a place for exactly that purpose.
      </p>

      <p>
        We also wanted to give indie developers a place to gather feedback about
        their project and potentially find new people to go along for the
        journey.
      </p>
    </DisplayWrapper>
  );
}

export default About;
