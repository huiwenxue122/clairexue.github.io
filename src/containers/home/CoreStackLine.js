import React from "react";
import { homePage } from "../../portfolio";
import "./CoreStackLine.css";

/**
 * Single compact core-stack row (replaces multi-card Core Stack on homepage).
 */
function CoreStackLine() {
  const raw = homePage.coreStackLine;
  if (!raw || !String(raw).trim()) return null;

  const items = String(raw)
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="home-coreline" aria-label="Core stack">
      <div className="home-coreline__inner">
        <span className="home-coreline__label">Core stack:</span>
        <div className="home-coreline__pills">
          {items.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 ? (
                <span className="home-coreline__sep" aria-hidden>
                  ·
                </span>
              ) : null}
              <span className="home-coreline__pill">{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreStackLine;
