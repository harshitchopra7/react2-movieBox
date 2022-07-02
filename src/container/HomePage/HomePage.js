import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  // const API_KEY = "82372dfcea1ebf3b69159ee3abff1e56"

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // APIs
  // Top Rated Movies
  // "https://api.themoviedb.org/3/movie/top_rated?api_key=82372dfcea1ebf3b69159ee3abff1e56"

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=82372dfcea1ebf3b69159ee3abff1e56"
    )
      .then((res) => res.json())
      .then((data) => setTopRatedMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="movies_row_wrapper">
        {topRatedMovies.map((value, key) => (
          <div className="movies_row_container">
            <img
              src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
