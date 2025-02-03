import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "cecd66e47b2b663b92da3c76a9e20f87",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <div className="container-movies">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="content-movies">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="{filme.title}"
            />
            <div className="content-text">
              <h2> {movie.title} </h2>
              <p> {movie.overview} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
