import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import "./HomePage.css"

function HomePage() {

    const [topRatedMovies, setTopRatedMovies] = useState([])

    // const API_ENDPOINT = "https://api.themoviedb.org/3" 
    // const API_KEY = "82372dfcea1ebf3b69159ee3abff1e56"

    // APIs
    // Top Rated Movies
    // https://api.themoviedb.org/3/movie/top_rated?api_key=82372dfcea1ebf3b69159ee3abff1e56

    // `${API_ENDPOINT}/movie/top_rated?api_key=${API_KEY}`

    useEffect(() => {
       fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=82372dfcea1ebf3b69159ee3abff1e56")
       .then(data => data.json())
       .then(res => setTopRatedMovies(res.results))
       .catch(err => console.log(err))
    }, [])

  return (
    <div>
        {topRatedMovies.map((val, key) => (
            <p>{val.title}</p>
        ))}
    </div>
  )
}

export default HomePage
