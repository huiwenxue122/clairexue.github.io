import React from "react";
import "./ContactHero.css";

function ContactHero({
  theme,
  title,
  subtitle,
  email,
  locationLine,
  imageSrc,
  children,
}) {
  const mailHref = email ? `mailto:${email}` : null;

  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="contact-hero__visual">
        <div className="contact-hero__glow" aria-hidden />
        <div
          className="contact-hero__glow contact-hero__glow--layer2"
          aria-hidden
        />
        <div className="contact-hero__frame ds-glass-card">
          <div className="contact-hero__portrait">
            <img
              src={imageSrc}
              alt="Claire Xue"
              className="contact-hero__photo"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="contact-hero__copy">
        <h1
          id="contact-hero-title"
          className="contact-hero__title"
          style={{ color: theme.text }}
        >
          {title}
        </h1>
        <p
          className="contact-hero__subtitle"
          style={{ color: theme.secondaryText }}
        >
          {subtitle}
        </p>
        {mailHref ? (
          <p className="contact-hero__line">
            <span
              className="contact-hero__label"
              style={{ color: theme.secondaryText }}
            >
              Email:{" "}
            </span>
            <a
              href={mailHref}
              className="contact-hero__link"
              style={{ color: theme.text }}
            >
              {email}
            </a>
          </p>
        ) : null}
        {locationLine ? (
          <p className="contact-hero__line contact-hero__line--muted">
            <span style={{ color: theme.secondaryText }}>{locationLine}</span>
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export default ContactHero;
