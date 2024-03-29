import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        tailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
         state.nowPlayingMovies = action.payload;
        },
        addMoviesTrailer:(state,action)=>{
            state.tailer = action.payload;
        }
    }
})

export const {addNowPlayingMovies , addMoviesTrailer} = movieSlice.actions;

export default movieSlice.reducer;