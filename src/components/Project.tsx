import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.newrelic.com/" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.newrelic.com/" target="_blank" rel="noreferrer">
            <h2>New Relic One</h2>
          </a>
          <p>
            Enhanced User Experience in New Relic One
            <ul>
              <li>
                Designed and implemented new UI pages for improved user
                experience
              </li>
              <li>
                Focused on production maintenance to ensure reliability and
                performance
              </li>
            </ul>
          </p>
        </div>
        <div className="project">
          <a href="https://www.stamps.com/" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.stamps.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Migration to React</h2>
          </a>
          <p>
            Designed, developed the client website on new feature
            implementations
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.cms.gov/about-cms"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.cms.gov/about-cms"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Project on ReactJS Application</h2>
          </a>
          <p>
            Successfully contributed to a PwC internal project for a USA-based
            client, a key aspect of which involved setting up a ReactJS
            application for managing Health Coverage claims.
          </p>
        </div>
        <div className="project">
          <a
            href="https://labs.itversity.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://labs.itversity.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Application on MEAN Stack</h2>
          </a>
          <p>
            Played a key role in designing and developing the UI interface and
            successfully launched the official website of Itversity Labs, a
            subsidiary of Itechversity Solutions.
          </p>
        </div>
        <div className="project">
          <a href="https://labs.itversity.com/" target="_blank" rel="noreferrer">
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://labs.itversity.com/" target="_blank" rel="noreferrer">
            <h2>Data Engineering</h2>
          </a>
          <p>
            Resolved Big Data issues on Discuss.Itversity.com forum and CCA175
            Udemy courses and Utilized Scala, Spark, and Spark Streaming to
            retrieve user log information from clusters, performing
            transformations and actions using various Spark APIs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
