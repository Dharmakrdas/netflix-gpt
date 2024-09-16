import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import configSlice from "./configSlice";
import languagesSlice from "./languagesSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    config: configSlice,
    lang: languagesSlice,
  },
});
export default appStore;
