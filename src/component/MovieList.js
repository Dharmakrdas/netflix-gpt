import MovieCard from "./MovieCard";

const MoviesList =({tittle,movies})=>{
    // console.log("Movies list",tittle,movies);
    return(
        <div className="p-2">
            <h1 className=" text-xl py-2 text-white ">{tittle}</h1>
            <div className="flex overflow-x-scroll no-scrollbar w-full">
            <div className="flex">
            { movies && movies.map((items,index)=> <MovieCard key={index} movies={items} />)}
            </div>
            </div>
        </div>
    )
}

export default MoviesList;