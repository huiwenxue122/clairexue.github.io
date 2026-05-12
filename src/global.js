import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    background: ${({ theme }) => theme.pageBackdrop || theme.body};
    background-attachment: fixed;
    scroll-behavior: smooth;
    --parallax-bg: 0px;
    --parallax-y: 0px;
  }

  body {
    align-items: stretch;
    background: transparent;
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    min-height: 100vh;
    margin: 0;
    transition: color 0.35s ease;
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }

  /* Parallax mist over html mesh — keeps depth when scrolling */
  body::before {
    content: "";
    position: fixed;
    inset: -25vh -15vw -15vh -15vw;
    z-index: -2;
    pointer-events: none;
    background:
      radial-gradient(ellipse 88% 62% at 82% 12%, rgba(56, 189, 248, 0.14), transparent 58%),
      radial-gradient(ellipse 75% 55% at 14% 88%, rgba(139, 92, 246, 0.09), transparent 54%),
      radial-gradient(ellipse 80% 50% at 50% 100%, rgba(30, 120, 145, 0.06), transparent 52%);
    opacity: 0.95;
    transform: translate3d(0, var(--parallax-bg, 0px), 0);
    will-change: transform;
  }

  /* Soft specular sheen */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: linear-gradient(
      188deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.1) 24%,
      transparent 50%
    );
    animation: ambientSheen 22s ease-in-out infinite;
    opacity: 0.48;
  }

  @keyframes ambientSheen {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1) translateY(0);
    }
    50% {
      opacity: 0.56;
      transform: scale(1.006) translateY(-0.12%);
    }
  }

  #root {
    width: 100%;
    min-width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #root > div {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    color: var(--color-link);
  }

  ::selection {
    background: rgba(56, 189, 248, 0.24);
    color: #0b1f2a;
  }
`;
