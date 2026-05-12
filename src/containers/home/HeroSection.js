import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { homePage, greeting } from "../../portfolio";
import "../../components/button/Button.css";
import "./HeroSection.css";

const floatPositions = ["tl", "tr", "bl", "br"];

function HeroSection({ theme }) {
  const { hero } = homePage;
  const floats = hero.floatLabels || [];
  const photoSrc = require("../../assets/images/homepage.JPG");

  return (
    <Fade bottom duration={700} distance="24px">
      <section className="home-hero" id="greeting">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <h1 className="home-hero__headline">{hero.headline}</h1>
            <p className="home-hero__subtitle">{hero.subtitle}</p>
            <p className="home-hero__supporting">{hero.supporting}</p>
            <div className="home-hero__ctas">
              <Link
                to="/projects"
                className="main-button home-hero__cta-primary"
              >
                View Projects
              </Link>
              <a
                href={greeting.githubProfile}
                className="home-hero__cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <ul className="home-hero__tags" aria-label="Highlighted skills">
              {hero.skillTags.map((tag) => (
                <li key={tag}>
                  <span className="home-hero__tag">{tag}</span>
                </li>
              ))}
            </ul>
            <div className="home-hero__social">
              <SocialMedia theme={theme} />
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__glow" aria-hidden />
            <div
              className="home-hero__glow home-hero__glow--layer2"
              aria-hidden
            />
            <div className="home-hero__frame">
              <div className="home-hero__portrait">
                <img
                  src={photoSrc}
                  alt="Claire Xue"
                  className="home-hero__photo"
                  width={480}
                  height={640}
                  loading="eager"
                />
              </div>
            </div>
            <div className="home-hero__floats" aria-hidden="true">
              {floats.map((label, i) => (
                <span
                  key={label}
                  className={`home-hero__float home-hero__float--${
                    floatPositions[i] || "tl"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default HeroSection;
