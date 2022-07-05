import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import Row from "./Row/Row";
import { isArrayNonEmpty } from "../../utils/index";

function HomePage() {
  const API_KEY = "82372dfcea1ebf3b69159ee3abff1e56";
  const BASE_URL = "https://api.themoviedb.org/3";

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const topRatedMoviesApiUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
  const popularMoviesApiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const upcomingMoviesApiUrl = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

  function callApi(url, setData) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    callApi(topRatedMoviesApiUrl, setTopRatedMovies);
    callApi(popularMoviesApiUrl, setPopularMovies);
    callApi(upcomingMoviesApiUrl, setUpcomingMovies);
  }, []);

  return (
    <div>
      <Navbar showSignInButton={false} showInput={true} />
      {isArrayNonEmpty(topRatedMovies) && (
        <Row rowTitle="Top Rated Movies" moviesArray={topRatedMovies} />
      )}
      {isArrayNonEmpty(popularMovies) && (
        <Row rowTitle="Popular Movies" moviesArray={popularMovies} />
      )}
      {isArrayNonEmpty(upcomingMovies) && (
        <Row rowTitle="Upcoming Movies" moviesArray={upcomingMovies} />
      )}
    </div>
  );
}

export default HomePage;
