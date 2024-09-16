import { bgUrl } from "../utils/constant";
import SeachSuggestion from "./SeachSuggestion";
import SearchGptInput from "./SearchGptInput";

const SeachGPTPage = () => {
  return (
    <div className="">
      <div className=" absolute -z-10">
        <img
          src={bgUrl}
          alt="login"
        />
      </div>
      <SearchGptInput />
      <SeachSuggestion />
    </div>
  );
};

export default SeachGPTPage;
