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

  /* Very light parallax wash — cyan/teal only, no violet */
  body::before {
    content: "";
    position: fixed;
    inset: -25vh -15vw -15vh -15vw;
    z-index: -2;
    pointer-events: none;
    background:
      radial-gradient(ellipse 88% 58% at 82% 10%, rgba(56, 189, 248, 0.08), transparent 55%),
      radial-gradient(ellipse 72% 50% at 14% 88%, rgba(30, 120, 145, 0.05), transparent 52%),
      radial-gradient(ellipse 78% 48% at 50% 100%, rgba(11, 31, 42, 0.03), transparent 50%);
    opacity: 0.9;
    transform: translate3d(0, var(--parallax-bg, 0px), 0);
    will-change: transform;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: linear-gradient(
      188deg,
      rgba(255, 255, 255, 0.42) 0%,
      rgba(255, 255, 255, 0.06) 28%,
      transparent 52%
    );
    animation: ambientSheen 26s ease-in-out infinite;
    opacity: 0.35;
  }

  @keyframes ambientSheen {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1) translateY(0);
    }
    50% {
      opacity: 0.42;
      transform: scale(1.004) translateY(-0.08%);
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
    background: rgba(56, 189, 248, 0.22);
    color: #071a24;
  }
`;
