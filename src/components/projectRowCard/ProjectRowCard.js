import React from "react";
import "./ProjectRowCard.css";

function initialsFromName(name) {
  if (!name || typeof name !== "string") return "·";
  const parts = name
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .trim()
    .split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase().slice(0, 2);
  }
  return name.slice(0, 2).toUpperCase();
}

/** Single short sentence for the compact caption panel (not full description). */
function captionSummary(repo) {
  let text = "";
  if (repo.summary && typeof repo.summary === "string" && repo.summary.trim()) {
    text = repo.summary.trim().replace(/\s+/g, " ");
  } else {
    const raw = (repo.description || "").trim();
    if (!raw) return "";
    text = raw.split(/\n\s*\n/)[0].replace(/\s+/g, " ");
  }
  const sentence = text.match(/^[\s\S]{1,220}?[.!?](?:\s|$)/);
  if (sentence) return sentence[0].trim();
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).trim()}…`;
}

export default function ProjectRowCard({ repo, theme, coverImage }) {
  const tags = Array.isArray(repo.tags) ? repo.tags : [];
  const demoUrl = repo.demoUrl || null;
  const paperUrl = repo.paperUrl || null;
  const githubUrl = repo.url;
  const summary = captionSummary(repo);

  const actions = [];
  if (demoUrl) actions.push({ key: "demo", label: "Demo", href: demoUrl });
  if (githubUrl)
    actions.push({ key: "github", label: "GitHub", href: githubUrl });
  if (paperUrl) actions.push({ key: "paper", label: "Paper", href: paperUrl });

  return (
    <article className="project-row-card">
      <div className="project-row-card__media">
        {coverImage ? (
          <img
            src={coverImage}
            alt={repo.name || "Project"}
            loading="lazy"
            className="project-row-card__img"
          />
        ) : (
          <div className="project-row-card__media-placeholder" aria-hidden>
            {initialsFromName(repo.name)}
          </div>
        )}
      </div>
      <div className="project-row-card__body">
        <h3 className="project-row-card__title" style={{ color: theme.text }}>
          {repo.name}
        </h3>
        {summary ? (
          <p
            className="project-row-card__summary"
            style={{ color: theme.secondaryText }}
          >
            {summary}
          </p>
        ) : null}
        {tags.length > 0 ? (
          <div className="project-row-card__tags" aria-label="Tech stack">
            {tags.map((tag) => (
              <span key={tag} className="project-row-card__tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {actions.length > 0 ? (
          <div className="project-row-card__actions">
            {actions.map((a) => (
              <a
                key={a.key}
                href={a.href}
                className="project-row-card__action"
                target="_blank"
                rel="noopener noreferrer"
              >
                {a.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
