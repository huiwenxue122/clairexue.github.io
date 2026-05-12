import React from "react";
import "./EarlierExperience.css";
import { bulletsFromDescription } from "../../shared/experienceUtils";

export default function EarlierExperience({ theme, experiences }) {
  if (!experiences || !experiences.length) return null;

  return (
    <details className="exp-earlier">
      <summary className="exp-earlier__summary" style={{ color: theme.text }}>
        Earlier experience
        <span
          className="exp-earlier__hint"
          style={{ color: theme.secondaryText }}
        >
          Internships & prior roles
        </span>
      </summary>
      <div className="exp-earlier__body">
        {experiences.map((exp, i) => {
          const oneLine =
            bulletsFromDescription(exp.description, 1)[0] ||
            exp.description?.slice(0, 160);
          return (
            <div
              key={`${exp.title}-${i}`}
              className="exp-earlier__row ds-glass-card"
            >
              <div className="exp-earlier__row-head">
                <h3
                  className="exp-earlier__title"
                  style={{ color: theme.text }}
                >
                  {exp.title}
                </h3>
                <span
                  className="exp-earlier__dates"
                  style={{ color: theme.secondaryText }}
                >
                  {exp.duration}
                </span>
              </div>
              <p className="exp-earlier__company" style={{ color: theme.text }}>
                {exp.company}
                {exp.location ? (
                  <span style={{ color: theme.secondaryText }}>
                    {" "}
                    · {exp.location}
                  </span>
                ) : null}
              </p>
              {oneLine ? (
                <p
                  className="exp-earlier__blurb"
                  style={{ color: theme.secondaryText }}
                >
                  {oneLine}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </details>
  );
}
