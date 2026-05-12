import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceHero from "../../components/experience/ExperienceHero";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";
import HackathonGrid from "../../components/experience/HackathonGrid";
import EarlierExperience from "../../components/experience/EarlierExperience";
import { experience } from "../../portfolio.js";
import { bulletsFromDescription } from "../../shared/experienceUtils";
import "./Experience.css";

const EXPERIENCE_HEADER_IMAGES = {
  "hackthon.jpg": require("../../assets/images/hackthon.jpg"),
};

function sectionByTitle(sections, title) {
  return (Array.isArray(sections) ? sections : []).find(
    (s) => s && s.title === title
  );
}

/** Truthful tags inferred only from role title / existing copy themes. */
function workTagsFor(exp) {
  const t = exp.title || "";
  if (/Machine Learning Research Engineer/i.test(t)) {
    return ["Research", "Python", "Deep learning"];
  }
  if (/Teaching Assistant/i.test(t)) {
    return ["Teaching", "Python", "MATLAB"];
  }
  return [];
}

function buildTimelineRoles(workExperiences) {
  return (workExperiences || []).map((exp) => ({
    exp,
    bullets: bulletsFromDescription(exp.description, 3),
    tags: workTagsFor(exp),
  }));
}

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const sections = experience.sections || [];
    const hackSection = sectionByTitle(sections, "Hackathon");
    const workSection = sectionByTitle(sections, "Experience");
    const internSection = sectionByTitle(sections, "Internship");

    const hackExperiences = hackSection?.experiences || [];
    const workExperiences = workSection?.experiences || [];
    const internExperiences = internSection?.experiences || [];

    const timelineRoles = buildTimelineRoles(workExperiences);

    const headerSrc = experience.header_image_path
      ? EXPERIENCE_HEADER_IMAGES[experience.header_image_path]
      : null;

    return (
      <div className="experience-main exp-page">
        <Header theme={theme} />
        <div className="exp-page__shell">
          <ExperienceHero
            theme={theme}
            title={experience.title}
            subtitle={experience.subtitle}
            tagline={experience.tagline}
            imageSrc={headerSrc}
          />

          <ExperienceTimeline theme={theme} roles={timelineRoles} />

          <HackathonGrid theme={theme} items={hackExperiences} />

          <EarlierExperience theme={theme} experiences={internExperiences} />
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
