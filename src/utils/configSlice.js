import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        showSearchView : false
    },
    reducers : {
        toggleSearchView :(state)=>{
           state.showSearchView = !state.showSearchView
        }
    }
})

export const {toggleSearchView} = configSlice.actions

export default configSlice.reducer;