import React from "react";
import "./HackathonGrid.css";
import { TagPill } from "./ExperienceTimeline";
import {
  stackTagsFromDescription,
  firstBlockFromDescription,
} from "../../shared/experienceUtils";

function HackathonCard({ exp, theme }) {
  const summary = firstBlockFromDescription(exp.description, 220);
  const tags = stackTagsFromDescription(exp.description);

  return (
    <article className="exp-hack-card ds-glass-card">
      <span
        className="exp-hack-card__eyebrow"
        style={{ color: theme.secondaryText }}
      >
        Hackathon
      </span>
      <h3 className="exp-hack-card__title" style={{ color: theme.text }}>
        {exp.title}
      </h3>
      <p className="exp-hack-card__event" style={{ color: theme.text }}>
        {exp.company}
      </p>
      <p className="exp-hack-card__meta" style={{ color: theme.secondaryText }}>
        {exp.duration}
        {exp.location ? ` · ${exp.location}` : ""}
      </p>
      {summary ? (
        <p
          className="exp-hack-card__summary"
          style={{ color: theme.secondaryText }}
        >
          {summary}
        </p>
      ) : null}
      {tags.length > 0 && (
        <div className="exp-hack-card__tags" aria-label="Tech stack">
          {tags.map((t) => (
            <TagPill key={t}>{t}</TagPill>
          ))}
        </div>
      )}
      <div className="exp-hack-card__actions">
        {exp.demo_url && (
          <a
            href={exp.demo_url}
            className="exp-hack-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo <span aria-hidden>→</span>
          </a>
        )}
        {exp.github_url && (
          <a
            href={exp.github_url}
            className="exp-hack-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function HackathonGrid({ theme, items }) {
  if (!items || !items.length) return null;
  return (
    <section className="exp-hack" aria-labelledby="exp-hack-heading">
      <h2
        id="exp-hack-heading"
        className="exp-section-title"
        style={{ color: theme.text }}
      >
        Selected Hackathons
      </h2>
      <p className="exp-section-lead" style={{ color: theme.secondaryText }}>
        Build sprints and product-style demos.
      </p>
      <div className="exp-hack__grid">
        {items.map((exp, i) => (
          <HackathonCard key={`${exp.title}-${i}`} exp={exp} theme={theme} />
        ))}
      </div>
    </section>
  );
}
