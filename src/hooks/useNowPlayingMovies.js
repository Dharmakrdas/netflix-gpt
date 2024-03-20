import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options, url } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlaingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayMovies();
  }, []);

  const getNowPlayMovies = async () => {
    const movies = await fetch(url, options);
    const res = await movies.json();
    dispatch(addNowPlayingMovies(res.results));
    // console.log(res.results);
  };
};

export default useNowPlaingMovies;
