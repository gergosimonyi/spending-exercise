import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  main {
    min-height: 100%;
  }

  :root {
    --color-white: #ffffff;
    --color-light-gray: #f2f1f6;
    --color-gray: #adadad;
    --color-dark-gray: #a9a9a9;
    --color-black: #2e2e2e;
    --color-red: #fb7c7d;
    --color-green: #08b783;
    --color-blue: #307ccc;
    --color-light-blue: #d1e7fb;

    --box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    --font-family:'Karla', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
    --font-family-header: "Montserrat", "Poppins", var(--font-family);
  }

  html {
    overflow-y: scroll;
  }

  body {
    background-color: var(--color-light-gray);
    color: var(--color-black);
    font-family: var(--font-family);

    @media(max-width: 768px){
      padding: 0 1rem;
    }
  }
`;

export { GlobalStyle };
