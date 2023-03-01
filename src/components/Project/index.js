import React, { useState } from "react";
import nps from "../../assets/images/NPScollabShot.PNG";
import MMS from "../../assets/images/MMS.jpeg";
import awa from "../../assets/images/apiweather.jpeg";
import tba from "../../assets/images/techblog.jpeg";
import pwa from "../../assets/images/pwa.jpeg";
import wsa from "../../assets/images/workscheduler.jpeg";

// PROJECT/PORTFOLIO COMPONENT
const Portfolio = () => {
    const [projects] = useState([
      {
        name: "National Park Services",
        imgAsset: nps,
        repoUrl: "https://github.com/mwambaugh/collaborativeAPIstudy",
        appUrl: "https://mwambaugh.github.io/collaborativeAPIstudy",
      },
      {
        name: "Mail me Seeds",
        imgAsset: MMS,
        repoUrl: "https://github.com/TheBluWiz/mail-me-seeds",
        appUrl: "https://mail-me-seeds.herokuapp.com",
      },
      {
        name: "Api weather gen",
        imgAsset: awa,
        repoUrl: "https://github.com/hkim84/06-Serversided-api-weather-dashboard",
        appUrl: "https://hkim84.github.io/06-Serversided-api-weather-dashboard/",
      },
      {
        name: "Tech Blog",
        imgAsset: tba,
        repoUrl: "https://github.com/hkim84/14-mvc-tech-blog",
        appUrl: "https://git.heroku.com/techblog1.git",
      },
      {
        name: "JATE",
        imgAsset: pwa,
        repoUrl: "https://github.com/hkim84/19-PWA-Text-Editor",
        appUrl: "https://text-editor19-pwa.herokuapp.com/",
      },
      {
        name: "Work Scheduler",
        imgAsset: wsa,
        repoUrl: "https://github.com/hkim84/05-Api-workday-scheduler",
        appUrl: "https://hkim84.github.io/05-Api-workday-scheduler/",
      },
    ]);

    return(
      <section className="sections work">
      <h2 className="work-h2tag">My Work</h2>
      <div className="section-content">
        {projects.map((project, i) => (
          <div className="wrapper">
            <div className="container" key={i}>
              <a href={project.appUrl}>
                <img src={project.imgAsset} alt={project.name} />
              </a>
              <div className="text-block">
                {project.name}
                <br/>
                <a href={project.repoUrl}>View the GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
  };

export default Portfolio;