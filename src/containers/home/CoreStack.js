import React from "react";
import { Fade } from "react-reveal";
import { homePage } from "../../portfolio";
import "./CoreStack.css";

function CoreStack({ theme }) {
  const groups = homePage.coreStack;
  if (!groups || !groups.length) return null;

  return (
    <Fade bottom duration={650} distance="16px">
      <section
        className="home-core"
        id="core-stack"
        aria-labelledby="home-core-heading"
      >
        <h2
          id="home-core-heading"
          className="home-core__title"
          style={{ color: theme.text }}
        >
          Core stack
        </h2>
        <p className="home-core__lead" style={{ color: theme.secondaryText }}>
          Tools and patterns I use for GenAI engineering and shipped products.
        </p>
        <div className="home-core__grid">
          {groups.map((group) => (
            <article
              key={group.label}
              className="home-core__card ds-glass-card"
              style={{
                borderColor: theme.surfaceBorder || undefined,
              }}
            >
              <h3
                className="home-core__group-label"
                style={{ color: theme.text }}
              >
                {group.label}
              </h3>
              <ul className="home-core__pills" aria-label={group.label}>
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="home-core__pill">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}

export default CoreStack;
