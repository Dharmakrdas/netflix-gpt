import { MoviesImagUrl } from "../utils/constant";

const MovieCard =({movies})=>{
    // console.log("image url" , movies.poster_path);
    return(
        <div className="m-2 w-40">
           <img className='h-30 w-30' src={MoviesImagUrl(movies.poster_path)} alt="movies Img"></img>
        </div>
    )
}

export default MovieCard;