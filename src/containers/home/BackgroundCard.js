import React from "react";
import { Fade } from "react-reveal";
import { homePage } from "../../portfolio";
import "./BackgroundCard.css";

function BackgroundCard() {
  const { education, about } = homePage;

  return (
    <Fade bottom duration={700} distance="18px">
      <section className="home-bg" id="background">
        <div className="home-bg__card ds-glass-card">
          <div className="home-bg__col home-bg__col--edu">
            <h2 className="home-bg__heading">Background</h2>
            <p className="home-bg__school">{education.school}</p>
            <p className="home-bg__degree">{education.degree}</p>
            <p className="home-bg__meta">{education.gpa}</p>
            <p className="home-bg__meta">{education.period}</p>
          </div>
          <div className="home-bg__col home-bg__col--about">
            <p className="home-bg__statement">{about.statement}</p>
            {about.personalNote ? (
              <p className="home-bg__personal">{about.personalNote}</p>
            ) : null}
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default BackgroundCard;
