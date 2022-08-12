import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
// Import static data example:
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname; // Current client url path
  const [movies, setMovies] = useState(MovieState);
  // Here we extract the movie from movies based on the url.
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // We comparing the data with the current client browser url.
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {/* https://reactjs.org/docs/conditional-rendering.html */}
      {/* In JavaScript, true && expression always evaluates to expression.
      And false && expression always evaluates to false.
      Therefore, if true, the element right after && appears in the output
      If it is false, React will ignore and skip it. */}
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map(({ title, description }) => (
              <Award key={title} title={title} description={description} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  position: relative;
  min-height: 90vh;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AwardsStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardsStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardsStyle>
  );
};

export default MovieDetail;
