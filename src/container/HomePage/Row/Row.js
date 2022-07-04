import React from "react";
import "./Row.css";

function Row({ rowTitle, moviesArray }) {
  return (
    <div className="movies_row_wrapper_container">
      <p className="movies_row_title">{rowTitle}</p>
      <div className="movies_row_wrapper">
        {moviesArray.map((value, key) => (
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

export default Row;
