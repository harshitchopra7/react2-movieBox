import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import Row from "./Row/Row";

function HomePage() {
  const API_KEY = "82372dfcea1ebf3b69159ee3abff1e56";

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([])

  // APIs
  // Top Rated Movies
  // "https://api.themoviedb.org/3/movie/top_rated?api_key=82372dfcea1ebf3b69159ee3abff1e56"

  // Popular Movies
  // https://api.themoviedb.org/3/movie/popular?api_key=yourApiKey&language=en-US&page=1

  // Now Playing
  // https://api.themoviedb.org/3/movie/now_playing?api_key=yourApiKey&language=en-US&page=1

  function fetchTopRatedMovies() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTopRatedMovies(data.results))
      .catch((error) => console.log(error));
  }

  function fetchPopularMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.log(error));
  }

  function fetchUpcomingPlayingMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setUpcomingMovies(data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchTopRatedMovies();
    fetchPopularMovies();
    fetchUpcomingPlayingMovies();
  }, []);

  fetch();

  return (
    <div>
      <Navbar showSignInButton={false} showInput={true} />
      <Row rowTitle="Top Rated Movies" moviesArray={topRatedMovies} />
      <Row rowTitle="Popular Movies" moviesArray={popularMovies} />
      <Row rowTitle="Upcoming Movies" moviesArray={upcomingMovies} />
    </div>
  );
}

export default HomePage;
