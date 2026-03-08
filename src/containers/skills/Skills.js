import React from "react";
import "./Skills.css";
import {
  technicalStack,
  whatIDoEducation,
  personalIntro,
} from "../../portfolio";
import { Fade } from "react-reveal";
export default function Skills(props) {
  const theme = props.theme;

  return (
    <div className="main whatido-main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do
          </h1>
        </Fade>
      </div>

      {/* 1. Technical Stack */}
      <Fade bottom duration={1500} distance="24px">
        <section className="whatido-section">
          <h2 className="whatido-section-title" style={{ color: theme.text }}>
            Technical Stack
          </h2>
          <div className="tech-stack-grid">
            {technicalStack.categories.map((category, idx) => (
              <div
                key={idx}
                className="tech-stack-card"
                style={{
                  backgroundColor: theme.highlight || "#fff",
                  borderColor: "rgba(26, 29, 41, 0.08)",
                }}
              >
                <h3
                  className="tech-stack-card-title"
                  style={{ color: theme.text }}
                >
                  {category.title}
                </h3>
                {category.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="tech-stack-subsection">
                    {sub.label && (
                      <div
                        className="tech-stack-label"
                        style={{ color: theme.secondaryText }}
                      >
                        {sub.label.toUpperCase()}
                      </div>
                    )}
                    <div className="tech-stack-tags">
                      {sub.items.map((item, i) => (
                        <span
                          key={i}
                          className="tech-stack-tag"
                          style={{
                            color: theme.text,
                            borderColor: "rgba(26, 29, 41, 0.15)",
                            backgroundColor: theme.body,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {sub.description && (
                      <p
                        className="tech-stack-desc"
                        style={{ color: theme.secondaryText }}
                      >
                        {sub.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </Fade>

      {/* 2. Education */}
      <Fade bottom duration={1500} distance="24px">
        <section className="whatido-section">
          <h2 className="whatido-section-title" style={{ color: theme.text }}>
            Education
          </h2>
          <p
            className="whatido-education-summary"
            style={{ color: theme.secondaryText }}
          >
            {whatIDoEducation.summary}
          </p>
        </section>
      </Fade>

      {/* 3. Personal Introduction */}
      <Fade bottom duration={1500} distance="24px">
        <section className="whatido-section">
          <h2 className="whatido-section-title" style={{ color: theme.text }}>
            {personalIntro.title}
          </h2>
          <p
            className="whatido-personal-content"
            style={{ color: theme.secondaryText }}
          >
            {personalIntro.content}
          </p>
        </section>
      </Fade>
    </div>
  );
}
