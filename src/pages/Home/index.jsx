import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import MovieCard from "../../components/MovieCard/index.jsx";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    });
  };

  if (loading) {
    return (
      <di className="loading">
        <h2> Carregando filmes ... </h2>
      </di>
    );
  }

  return (
    <div className="home">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
