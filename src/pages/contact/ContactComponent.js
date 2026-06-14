import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ContactHero from "../../components/contact/ContactHero";
import ContactActions from "../../components/contact/ContactActions";
import AvailabilityCard from "../../components/contact/AvailabilityCard";
import { contactPageData, socialMediaLinks } from "../../portfolio.js";
import resumePdf from "../../assets/docs/Claire_Xue_Resume.pdf";
import "./ContactComponent.css";

const contactSection = contactPageData.contactSection;
const availability = contactPageData.availability;

const rowingImageSrc = require("../../assets/images/rowing.JPG");
const accentPortraitSrc = require("../../assets/images/Profile.JPG");

function socialUrl(name) {
  const entry = socialMediaLinks.find((m) => m.name === name);
  return entry?.link;
}

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    const imageSrc = require(`../../assets/images/${contactSection.profile_image_path}`);

    const linkedInUrl = socialUrl("LinkedIn");
    const githubUrl = socialUrl("Github");

    return (
      <div className="contact-page">
        <Header theme={theme} />
        <main className="contact-page__main">
          <ContactHero
            theme={theme}
            title={contactSection.title}
            subtitle={contactSection.subtitle}
            email={contactSection.email}
            locationLine={contactSection.locationLine}
            imageSrc={imageSrc}
          >
            <ContactActions
              email={contactSection.email}
              resumeUrl={resumePdf}
              linkedInUrl={linkedInUrl}
              githubUrl={githubUrl}
            />
          </ContactHero>
          <AvailabilityCard theme={theme} data={availability} />
          <figure className="contact-page__accent" aria-label="Photos">
            <div className="contact-page__accent-glow" aria-hidden />
            <div
              className="contact-page__accent-glow contact-page__accent-glow--layer2"
              aria-hidden
            />
            <div className="contact-page__accent-row">
              <div className="contact-page__accent-item contact-page__accent-item--portrait">
                <div className="contact-page__accent-frame ds-glass-card">
                  <div className="contact-page__accent-viewport contact-page__accent-viewport--portrait">
                    <img
                      src={accentPortraitSrc}
                      alt="Claire Xue"
                      className="contact-page__accent-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-page__accent-item contact-page__accent-item--wide">
                <div className="contact-page__accent-frame ds-glass-card">
                  <div className="contact-page__accent-viewport">
                    <img
                      src={rowingImageSrc}
                      alt="Claire rowing"
                      className="contact-page__accent-img"
                      width={960}
                      height={540}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <div className="contact-page__more">
            <p
              className="contact-page__more-label"
              style={{ color: theme.secondaryText }}
            >
              Also on
            </p>
            <SocialMedia theme={theme} />
          </div>
        </main>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
