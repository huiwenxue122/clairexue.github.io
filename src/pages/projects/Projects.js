import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectRowCard from "../../components/projectRowCard/ProjectRowCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import { PROJECT_COVERS } from "../../shared/projectCovers";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    const expanded = {};
    (ProjectsData.categories || []).forEach((c) => {
      expanded[c.id] = c.id === "ai-agent";
    });
    this.state = { expanded };
  }

  toggleCategory = (id) => {
    this.setState((prev) => {
      const cur = prev.expanded[id] !== false;
      return {
        expanded: { ...prev.expanded, [id]: !cur },
      };
    });
  };

  render() {
    const theme = this.props.theme;
    const repoById = {};
    ProjectsData.data.forEach((r) => {
      repoById[r.id] = r;
    });
    const categories = ProjectsData.categories || [];

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
            </div>
          </Fade>
        </div>

        <div className="projects-categories-wrap">
          {!categories.length ? (
            <div className="project-category__list">
              {ProjectsData.data.map((repo) => (
                <ProjectRowCard
                  key={repo.id}
                  repo={repo}
                  theme={theme}
                  coverImage={PROJECT_COVERS[repo.id]}
                />
              ))}
            </div>
          ) : (
            categories.map((cat) => {
              const isOpen = this.state.expanded[cat.id] !== false;
              return (
                <section
                  key={cat.id}
                  className={
                    cat.id === "ai-agent"
                      ? "project-category project-category--lead"
                      : "project-category"
                  }
                >
                  <button
                    type="button"
                    className="project-category__toggle"
                    onClick={() => this.toggleCategory(cat.id)}
                    aria-expanded={isOpen}
                    aria-controls={`project-panel-${cat.id}`}
                    id={`project-heading-${cat.id}`}
                  >
                    <span
                      className="project-category__title"
                      style={{ color: theme.text }}
                    >
                      {cat.title}
                    </span>
                    <span
                      className={`project-category__chevron${
                        isOpen ? " project-category__chevron--open" : ""
                      }`}
                      style={{ color: theme.secondaryText }}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={`project-panel-${cat.id}`}
                    role="region"
                    aria-labelledby={`project-heading-${cat.id}`}
                    className={`project-category__panel${
                      isOpen ? " project-category__panel--open" : ""
                    }`}
                  >
                    <div className="project-category__list">
                      {(cat.projectIds || []).length === 0 ? (
                        <p
                          className="project-category__empty"
                          style={{ color: theme.secondaryText }}
                        >
                          More projects will be listed here soon.
                        </p>
                      ) : (
                        (cat.projectIds || []).map((pid) => {
                          const repo = repoById[pid];
                          if (!repo) return null;
                          return (
                            <ProjectRowCard
                              key={repo.id}
                              repo={repo}
                              theme={theme}
                              coverImage={PROJECT_COVERS[repo.id]}
                            />
                          );
                        })
                      )}
                    </div>
                  </div>
                </section>
              );
            })
          )}
        </div>

        <Button
          text={"View Full Project Archive"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
