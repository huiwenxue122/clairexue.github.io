import React from "react";
import { Fade } from "react-reveal";
import { homePage } from "../../portfolio";
import "./BackgroundCard.css";

function BackgroundCard({ theme }) {
  const { education, about } = homePage;

  return (
    <Fade bottom duration={700} distance="18px">
      <section className="home-bg" id="background">
        <div
          className="home-bg__card ds-glass-card"
          style={{
            borderColor: theme.surfaceBorder || undefined,
          }}
        >
          <div className="home-bg__col home-bg__col--edu">
            <h2 className="home-bg__heading" style={{ color: theme.text }}>
              Background
            </h2>
            <p className="home-bg__school" style={{ color: theme.text }}>
              {education.school}
            </p>
            <p
              className="home-bg__degree"
              style={{ color: theme.secondaryText }}
            >
              {education.degree}
            </p>
            <p className="home-bg__meta" style={{ color: theme.secondaryText }}>
              {education.gpa}
            </p>
            <p className="home-bg__meta" style={{ color: theme.secondaryText }}>
              {education.period}
            </p>
          </div>
          <div className="home-bg__col home-bg__col--about">
            <p className="home-bg__statement" style={{ color: theme.text }}>
              {about.statement}
            </p>
            {about.personalNote ? (
              <p
                className="home-bg__personal"
                style={{ color: theme.secondaryText }}
              >
                {about.personalNote}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default BackgroundCard;
