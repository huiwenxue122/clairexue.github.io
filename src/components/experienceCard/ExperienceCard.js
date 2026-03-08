import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

// Static imports so webpack bundles logos in production
const EXPERIENCE_LOGOS = {
  "ste.png": require("../../assets/images/ste.png"),
  "lablab.png": require("../../assets/images/lablab.png"),
  "brown.png": require("../../assets/images/brown.png"),
  "jiu.png": require("../../assets/images/jiu.png"),
};

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const logoSrc = experience["logo_path"]
      ? EXPERIENCE_LOGOS[experience["logo_path"]]
      : null;
    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            {logoSrc ? (
              <img className="experience-card-logo" src={logoSrc} alt="" />
            ) : (
              <div
                className="experience-card-logo"
                style={{ minWidth: 48, minHeight: 48 }}
              />
            )}
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience["company"]}
                    </a>
                  </p>
                  {(experience["github_url"] || experience["demo_url"]) && (
                    <p
                      className="experience-card-links"
                      style={{ marginTop: 6 }}
                    >
                      {experience["github_url"] && (
                        <>
                          <a
                            href={experience["github_url"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience-card-link"
                          >
                            GitHub
                          </a>
                          {experience["demo_url"] && " | "}
                        </>
                      )}
                      {experience["demo_url"] && (
                        <a
                          href={experience["demo_url"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-card-link"
                        >
                          Demo
                        </a>
                      )}
                    </p>
                  )}
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="experience-card-description">
                <div className="repo-description" />
                {experience["description"]}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
