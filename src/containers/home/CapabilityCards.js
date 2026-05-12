import React from "react";
import { Fade } from "react-reveal";
import { homePage } from "../../portfolio";
import "./CapabilityCards.css";

function CapabilityCards({ theme }) {
  const items = homePage.capabilities;

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="home-cap" id="capabilities">
        <h2 className="home-cap__title" style={{ color: theme.text }}>
          What I Build
        </h2>
        <div className="home-cap__grid">
          {items.map((item) => (
            <article
              key={item.title}
              className="home-cap__card ds-glass-card"
              style={{
                borderColor: theme.surfaceBorder || undefined,
              }}
            >
              <div className="home-cap__card-head">
                <span className="home-cap__icon" aria-hidden>
                  <i className={`fas ${item.iconClass}`} />
                </span>
                <h3
                  className="home-cap__card-title"
                  style={{ color: theme.text }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className="home-cap__blurb"
                style={{ color: theme.secondaryText }}
              >
                {item.blurb}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}

export default CapabilityCards;
