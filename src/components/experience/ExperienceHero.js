import React from "react";
import "./ExperienceHero.css";

export default function ExperienceHero({
  theme,
  title,
  subtitle,
  tagline,
  imageSrc,
}) {
  return (
    <header className="exp-hero">
      <div className="exp-hero__copy">
        <h1 className="exp-hero__title" style={{ color: theme.text }}>
          {title}
        </h1>
        {subtitle && (
          <p
            className="exp-hero__subtitle"
            style={{ color: theme.secondaryText }}
          >
            {subtitle}
          </p>
        )}
        {tagline && (
          <p
            className="exp-hero__tagline"
            style={{ color: theme.secondaryText }}
          >
            {tagline}
          </p>
        )}
      </div>
      {imageSrc && (
        <div className="exp-hero__visual">
          <div className="exp-hero__glow" aria-hidden />
          <div className="exp-hero__frame">
            <img
              src={imageSrc}
              alt=""
              className="exp-hero__img"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </header>
  );
}
