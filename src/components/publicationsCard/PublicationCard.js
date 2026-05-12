import React from "react";
import "./PublicationCard.css";

/**
 * @param {object} pub — publication from portfolio (url, name, summary, category, tags, …)
 * @param {'featured' | 'grid'} variant
 */
export default function PublicationCard({ pub, theme, variant = "grid" }) {
  const isFeatured = variant === "featured";

  return (
    <a
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isFeatured ? "pub-card pub-card--featured" : "pub-card pub-card--grid"
      }
    >
      {isFeatured && (
        <span className="pub-card__ribbon" style={{ color: theme.text }}>
          Featured Research
        </span>
      )}

      {!isFeatured && (
        <span
          className="pub-card__category"
          style={{ color: theme.secondaryText }}
        >
          {pub.category || "Publication"}
        </span>
      )}

      {isFeatured && (
        <span
          className="pub-card__category pub-card__category--featured"
          style={{ color: theme.secondaryText }}
        >
          {pub.category || "Publication"}
        </span>
      )}

      <h2
        className={
          isFeatured
            ? "pub-card__title pub-card__title--featured"
            : "pub-card__title"
        }
        style={{ color: theme.text }}
      >
        {pub.name}
      </h2>

      <p
        className={
          isFeatured
            ? "pub-card__summary pub-card__summary--featured"
            : "pub-card__summary"
        }
        style={{ color: theme.secondaryText }}
      >
        {pub.summary || pub.description}
      </p>

      {Array.isArray(pub.tags) && pub.tags.length > 0 && (
        <ul className="pub-card__tags" aria-label="Topics">
          {pub.tags.map((t) => (
            <li key={t}>
              <span className="pub-card__tag">{t}</span>
            </li>
          ))}
        </ul>
      )}

      <span className="pub-card__cta">
        Read Article <span aria-hidden>→</span>
      </span>

      {isFeatured && (
        <div className="pub-card__accent" aria-hidden>
          <i className="fas fa-file-lines" />
        </div>
      )}
    </a>
  );
}
