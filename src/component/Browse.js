import useNowPlaingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeachGPTPage from "./SeachGPTPage";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browser = () => {
  const showSearchGPT = useSelector((state) => state?.config?.showSearchView);

  useNowPlaingMovies();

  return (
    <div>
      <Header />
      {showSearchGPT ? (
        <SeachGPTPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/**
       * MainContainer
       *  VideoTittle
       *  BackgroundVideo
       * SecondaryContainer
       *  movies List
       *  cards N * N
       */}
    </div>
  );
};

export default Browser;
