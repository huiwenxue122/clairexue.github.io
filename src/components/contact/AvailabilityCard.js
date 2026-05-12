import React from "react";
import "./AvailabilityCard.css";

function Pill({ children }) {
  return <span className="contact-avail__pill">{children}</span>;
}

function AvailabilityCard({ theme, data }) {
  if (!data) return null;

  const { lookingLabel, lookingFor, focusLabel, focusAreas } = data;
  const roles = lookingFor || [];
  const focus = focusAreas || [];
  if (!roles.length && !focus.length) return null;

  return (
    <aside
      className="contact-avail ds-glass-card"
      aria-label="Role and focus summary"
      style={{
        borderColor: theme.surfaceBorder || undefined,
      }}
    >
      {roles.length > 0 ? (
        <div className="contact-avail__block">
          <p className="contact-avail__heading" style={{ color: theme.text }}>
            {lookingLabel}
          </p>
          <div className="contact-avail__pills">
            {roles.map((r) => (
              <Pill key={r}>{r}</Pill>
            ))}
          </div>
        </div>
      ) : null}
      {focus.length > 0 ? (
        <div className="contact-avail__block">
          <p className="contact-avail__heading" style={{ color: theme.text }}>
            {focusLabel}
          </p>
          <div className="contact-avail__pills">
            {focus.map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </div>
      ) : null}
    </aside>
  );
}

export default AvailabilityCard;
