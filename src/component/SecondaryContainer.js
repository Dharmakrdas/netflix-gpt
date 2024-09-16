import { useSelector } from "react-redux";
import MoviesList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  // console.log("MOvies",movies.nowPlayingMovies);
  if (!movies) return;
  return (
    <div className=" bg-black">
        <div className=" -m-48 relative z-20">
        <MoviesList tittle={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList tittle={"Treading"} movies={movies.nowPlayingMovies} />
        <MoviesList tittle={"Hot Movies"} movies={movies.nowPlayingMovies} />
        <MoviesList tittle={"Popular Movies"} movies={movies.nowPlayingMovies} />
        <MoviesList tittle={"Horror Movies"} movies={movies.nowPlayingMovies} />
        </div>

    </div>
  );
};

export default SecondaryContainer;
