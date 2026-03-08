import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    const textColor = theme.text;

    return (
      <svg
        className="splash-logo"
        width="80%"
        height="auto"
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="splashLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={textColor} stopOpacity="0" />
            <stop offset="50%" stopColor={textColor} stopOpacity="1" />
            <stop offset="100%" stopColor={textColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Decorative bracket */}
        <path
          className="splash-bracket"
          d="M 20 20 L 20 100 M 20 20 L 50 20 M 20 100 L 50 100"
          stroke={textColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="splash-bracket splash-bracket-right"
          d="M 380 20 L 380 100 M 380 20 L 350 20 M 380 100 L 350 100"
          stroke={textColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Hello, I'm Claire — elegant script */}
        <text
          x="200"
          y="50"
          textAnchor="middle"
          className="splash-name splash-name-first"
          fill={textColor}
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "38px" }}
        >
          Hello, I'm
        </text>
        <text
          x="200"
          y="92"
          textAnchor="middle"
          className="splash-name splash-name-last"
          fill={textColor}
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "48px" }}
        >
          Claire
        </text>
        {/* Underline */}
        <line
          x1="120"
          y1="102"
          x2="280"
          y2="102"
          className="splash-underline"
          stroke="url(#splashLine)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }
}

export default LogoLoader;
