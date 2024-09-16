import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"language",
    initialState:{
        lang:"en"
    },
    reducers :{
        updateLanguages :(state,actions)=>{
            state.lang = actions.payload;
        }
    }
})

export const {updateLanguages} = languageSlice.actions

export default languageSlice.reducer