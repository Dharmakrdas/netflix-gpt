import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import BackGroundVideo from "./BackGroundVideo";

const MainContainer = () => {
  const moviesList = useSelector((state) => state?.movies?.nowPlayingMovies);
  if (!moviesList) return;
  const movie = moviesList[0];
  console.log(movie);
  const moviesData = {
    tittle : movie?.original_title,
    overview: movie?.overview
  }
  return (
    <div>
      <VideoTittle data={moviesData} />
      <BackGroundVideo movies_id={movie?.id} />
    </div>
  );
};

export default MainContainer;
