// RESUME COMPONENT
import React from "react";
import ResumeImg from "../../assets/images/resume-screenshot.jpeg";

function Resume() {
  return (
    <div className="sections resume">
      <div>
        <h2>Proficiencies</h2>
        <ul className="section-content">
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>APIs</li>
          <li>Insomnia</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>VS Code</li>
          <li>Windows</li>
          <li>& more!</li>
        </ul>
      </div>

      <div>
        <h2>Resume</h2>
        <div>
          <a 
            href="https://onedrive.live.com/edit.aspx?resid=2A5D92C0061E730D!5096&ithint=file%2cdocx&authkey=!APRTydfXeWzce1g"
            target="_blank"
            rel="noreferrer"
          >
            <img 
              src={ResumeImg}
              alt={"Screen capture of the front page of my resume."}
              width="350px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;