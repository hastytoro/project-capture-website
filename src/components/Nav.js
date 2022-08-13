import React from "react";
import styled from "styled-components";
// Import Link and add some global navigation.
// React Router is now controlling the URL!
// We don't have any routes that render when the URL changes yet here.
// But Link is changing the URL "without" causing a full-page reload.
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavBar>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 99;

  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster Two", cursive;
    font-style: italic;
    /* font-weight: lighter; */
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    #logo {
      // Remember that inline elements can't have height attributes.
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

export default Nav;
