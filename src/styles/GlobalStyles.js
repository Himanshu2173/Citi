import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif; /* You can choose a better font later */
    background-color: #1a0033; /* Dark purple background from UI */
    color: #ffffff;
    line-height: 1.6;
  }

  a {
    color: #7f00ff; /* A shade of purple for links */
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
  }
`;

export default GlobalStyles;