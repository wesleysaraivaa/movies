import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="{filme.title}"
      />
      <h1> {movie.title} </h1>
      <p> {movie.overview} </p>
    </div>
  );
};

export default MovieCard;
