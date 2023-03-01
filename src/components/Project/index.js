import React, { useState } from "react";
import nps from "../../assets/images/NPScollabShot.PNG";
import MMS from "../../assets/images/MMS.jpeg";


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