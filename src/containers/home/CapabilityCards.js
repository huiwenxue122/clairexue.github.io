import React from "react";
import { Fade } from "react-reveal";
import { homePage } from "../../portfolio";
import "./CapabilityCards.css";

function CapabilityCards() {
  const items = homePage.capabilities;

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="home-cap" id="capabilities">
        <h2 className="home-cap__title">AI Systems I Build</h2>
        <div className="home-cap__grid">
          {items.map((item) => (
            <article
              key={item.title}
              className="home-cap__card ds-glass-card home-cap__card--premium"
            >
              <div className="home-cap__card-head">
                <span className="home-cap__icon" aria-hidden>
                  <i className={`fas ${item.iconClass}`} />
                </span>
                <h3 className="home-cap__card-title">{item.title}</h3>
              </div>
              <p className="home-cap__blurb">{item.blurb}</p>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}

export default CapabilityCards;
