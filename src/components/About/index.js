import React from "react";
import headshot from "../../assets/images/headshot.jpg";

// ABOUT COMPONENT
function About() {
  return (
    <section className="sections">
      <h2>About Me</h2>
      <div className="section-content">
        <div className="about-me">
          <img src={headshot} alt="my picture"/>
          <p>
            Welcome! My name is Hoon. I live in Lakewood, WA and I am currently
            a student in the coding and web development bootcamp through the
            University of Washington. My passion are creative projects that involve
            your imagination and crititcal thinking. I consider my
            strengths to adapt to any enviroment will aid me in my success 
            to becoming a developer and for the rest of my career.
            I was told i can be creative of how i images stuff with a very analytical reason. 
            Problem sovlving is what drives me to be engaged.
            <br />
            <br />
            I have a strong interest in building apps and video games. I am a gym rat
            who spent years learning how to lift properly with form and adaptation.
            I believe because of this drive it has taught me dicipline as well as flexibilty.
            Along the way i have learned many different skills such as cooking, building infrastructurs,
            mechanics, accounting, managing. which give me a great foundation to work off of.
            I am passinate of learning new things while find challenge within its course.
            I can't wait what the future holds for me, after this bootcamp i believe i am going to try learning
            video game designing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;