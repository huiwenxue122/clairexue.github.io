import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";
import "./PublicationsPage.css";

function pickFeatured(data) {
  const flagged = data.find((p) => p.featured);
  if (flagged) return flagged;
  const nlg = data.find(
    (p) =>
      p.id === "self-escalation-llms" ||
      (p.name && /LLM|NLG|language/i.test(p.name + (p.description || "")))
  );
  return nlg || data[0];
}

class PublicationsPage extends Component {
  render() {
    const theme = this.props.theme;
    const data = publications.data || [];
    const featured = data.length ? pickFeatured(data) : null;
    const rest = featured ? data.filter((p) => p.id !== featured.id) : [];

    return (
      <div className="projects-main publications-page">
        <Header theme={theme} />
        {data.length > 0 ? (
          <div className="publications-page__shell">
            <header className="publications-page__header">
              <Fade bottom duration={1000} distance="16px">
                <h1
                  className="publications-page__title"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                {publicationsHeader.tagline && (
                  <p
                    className="publications-page__tagline subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader.tagline}
                  </p>
                )}
              </Fade>
            </header>

            {featured && (
              <div className="publications-page__featured">
                <Fade bottom duration={900} distance="14px">
                  <PublicationCard
                    pub={featured}
                    theme={theme}
                    variant="featured"
                  />
                </Fade>
              </div>
            )}

            {rest.length > 0 && (
              <div className="publications-page__grid">
                {rest.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    pub={pub}
                    theme={theme}
                    variant="grid"
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="basic-projects" style={{ padding: "2rem 1.5rem" }}>
            <p className="subTitle" style={{ color: theme.secondaryText }}>
              No publications listed yet.
            </p>
          </div>
        )}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default PublicationsPage;
