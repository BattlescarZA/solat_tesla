import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Gotham SSm', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    scroll-padding-top: 80px; /* Account for fixed header */
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    color: #393c41;
    overflow-x: hidden;
    line-height: 1.5;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-weight: 500;
    color: #171a20;
  }

  h1 {
    font-size: clamp(40px, 5vw, 56px);
  }

  h2 {
    font-size: clamp(32px, 4vw, 40px);
  }

  h3 {
    font-size: clamp(24px, 3vw, 32px);
  }

  p {
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  /* Custom scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  /* Selection styling */
  ::selection {
    background: rgba(52, 152, 219, 0.2);
    color: #171a20;
  }

  /* Smooth transitions for all animations */
  * {
    transition: background-color 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease,
                transform 0.3s ease;
  }

  /* Responsive text sizing */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  /* Focus styles for accessibility */
  :focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }

  /* Remove focus outline for mouse users */
  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Maintain focus outline for keyboard users */
  :focus-visible {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }

  /* Improve text rendering */
  * {
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  }

  /* Smooth anchor scrolling */
  html {
    scroll-behavior: smooth;
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  /* Prevent text size adjustment on orientation change */
  html {
    -webkit-text-size-adjust: 100%;
  }
`;

export default GlobalStyles;