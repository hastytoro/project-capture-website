import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;
  }

  /* Handle font size with percentage */
  html {
    @media (max-width: 1700px){
      font-size: 90%;
    }
    @media (max-width: 1300px){
    }
  }
  
  body {
    background: #1b1b1b;
    /* font-family: 'Abril Fatface', sans-serif; */
    font-family: 'Inter', sans-serif;
    /* font-family: 'JetBrains Mono', monospace; */
    /* font-family: 'Lato', sans-serif; */
    /* font-family: 'Lobster Two', cursive; */
    /* font-family: 'Montserrat', sans-serif; */
    /* font-family: 'Nunito', sans-serif; */
    /* font-family: 'Poppins', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Rubik', sans-serif; */
    /* font-family: 'Space Grotesk', sans-serif; */
    /* font-family: 'Space Mono', monospace; */
    /* font-family: 'Trispace', sans-serif; */
    /* font-family: 'Work Sans', sans-serif; */

    /* prevents image overflowing in scaling down animation */
    overflow-x: hidden;  
  }

  button {
    font-family: "Space Mono";
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 2px;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover {
      background: #23d997;
      color: white;
    }
  }

  h1,h2,h3{
    font-family: 'Space Grotesk', sans-serif;
  }
  
  h2 {
    font-weight: normal;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }
  h4 {
    font-size: 2.5rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  a {
    font-size: 1.3rem;
  }
  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  img {
    border: none;
    border-radius: 2px;
  }
`;

export default GlobalStyle;
