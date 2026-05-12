import React from "react";
import "./ExperienceTimeline.css";

export function TagPill({ children }) {
  return <span className="exp-tag">{children}</span>;
}

export function TimelineRoleCard({ exp, theme, bullets, tags }) {
  const safeUrl =
    exp.company_url && exp.company_url !== "#" ? exp.company_url : null;
  return (
    <article className="exp-tl-card ds-glass-card">
      <div className="exp-tl-card__head">
        <div className="exp-tl-card__head-left">
          <h3 className="exp-tl-card__title" style={{ color: theme.text }}>
            {exp.title}
          </h3>
          <p className="exp-tl-card__company" style={{ color: theme.text }}>
            {safeUrl ? (
              <a href={safeUrl} target="_blank" rel="noopener noreferrer">
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
          </p>
        </div>
        <div className="exp-tl-card__meta">
          <span
            className="exp-tl-card__date"
            style={{ color: theme.secondaryText }}
          >
            {exp.duration}
          </span>
          {exp.location ? (
            <span
              className="exp-tl-card__loc"
              style={{ color: theme.secondaryText }}
            >
              {exp.location}
            </span>
          ) : null}
        </div>
      </div>
      {bullets.length > 0 && (
        <ul className="exp-tl-card__bullets">
          {bullets.map((b, i) => (
            <li key={i} style={{ color: theme.secondaryText }}>
              {b}
            </li>
          ))}
        </ul>
      )}
      {tags && tags.length > 0 && (
        <div className="exp-tl-card__tags" aria-label="Skills">
          {tags.map((t) => (
            <TagPill key={t}>{t}</TagPill>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ExperienceTimeline({ theme, roles }) {
  if (!roles || !roles.length) return null;
  return (
    <section className="exp-tl" aria-labelledby="exp-tl-heading">
      <h2
        id="exp-tl-heading"
        className="exp-section-title"
        style={{ color: theme.text }}
      >
        Professional experience
      </h2>
      <p className="exp-section-lead" style={{ color: theme.secondaryText }}>
        Research engineering and teaching at Brown University.
      </p>
      <div className="exp-tl__track">
        <div className="exp-tl__line" aria-hidden />
        {roles.map((item, index) => (
          <div key={`${item.exp.title}-${index}`} className="exp-tl__row">
            <span className="exp-tl__dot" aria-hidden />
            <TimelineRoleCard
              exp={item.exp}
              theme={theme}
              bullets={item.bullets}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
