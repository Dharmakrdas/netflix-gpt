import { useDispatch } from "react-redux";
import { TailerUrl, options } from "../utils/constant";
import { addMoviesTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer =(movies_id)=>{
    const dispatch = useDispatch();
    console.log(movies_id);
    useEffect(() => {
      getMoviesTailer();
    });
    const getMoviesTailer = async () => {
      const data = await fetch(TailerUrl(movies_id), options);
      const res = await data.json();
      // console.log(res.results);
  
      const filterMovies = res.results.filter((item) => item.type === "Trailer");
      console.log(filterMovies);
      const tailer = filterMovies.length > 0 ? filterMovies[0] : res.results[0];
      console.log(tailer.key);
      dispatch(addMoviesTrailer(tailer.key));
    };
}

export default useMovieTrailer;