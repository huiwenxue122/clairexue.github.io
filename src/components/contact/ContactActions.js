import React from "react";
import "../button/Button.css";
import "./ContactActions.css";

/**
 * Primary recruiting actions. Social URLs should match `socialMediaLinks` in portfolio.
 */
function ContactActions({ email, resumeUrl, linkedInUrl, githubUrl }) {
  const mailto = email ? `mailto:${email}` : null;

  return (
    <div
      className="contact-actions"
      role="group"
      aria-label="Contact and profiles"
    >
      {mailto ? (
        <a
          href={mailto}
          className="main-button contact-actions__btn contact-actions__btn--primary"
        >
          Email Me
        </a>
      ) : null}
      {resumeUrl ? (
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-actions__btn contact-actions__btn--glass"
        >
          View Resume
        </a>
      ) : null}
      {linkedInUrl ? (
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-actions__btn contact-actions__btn--glass"
        >
          LinkedIn
        </a>
      ) : null}
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-actions__btn contact-actions__btn--glass"
        >
          GitHub
        </a>
      ) : null}
    </div>
  );
}

export default ContactActions;
