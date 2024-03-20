import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackGroundVideo = ({ movies_id }) => {
    const tailer = useSelector((state)=>state?.movies?.tailer)
    console.log("store", tailer);
    useMovieTrailer(movies_id)

  return (
    <div className=" w-screen aspect-video">
      <iframe
      className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+tailer+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackGroundVideo;
