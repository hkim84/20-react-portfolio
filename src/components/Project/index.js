import React, { useState } from "react";
import nps from "../../assets/images/NPScollabShot.PNG";


// PROJECT/PORTFOLIO COMPONENT
const Portfolio = () => {
    const [projects] = useState([
      {
        name: "National Park Services",
        imgAsset: nps,
        repoUrl: "https://github.com/mwambaugh/collaborativeAPIstudy",
        appUrl: "https://mwambaugh.github.io/collaborativeAPIstudy",
      },

    ]);

    return()

export default Portfolio;