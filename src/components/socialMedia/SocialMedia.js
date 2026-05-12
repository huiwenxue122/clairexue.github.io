import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        const isMailOrTel =
          media.link.startsWith("mailto:") || media.link.startsWith("tel:");
        return (
          <a
            key={i}
            href={media.link}
            className="icon-button"
            title={media.name}
            target={isMailOrTel ? undefined : "_blank"}
            rel={isMailOrTel ? undefined : "noopener noreferrer"}
          >
            <span className="icon-button__glass" aria-hidden>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </span>
            <span className="sr-only">{media.name}</span>
          </a>
        );
      })}
    </div>
  );
}
