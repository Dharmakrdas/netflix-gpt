import useNowPlaingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlaingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
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
