import React, { useState } from "react";
import { useSelector } from "react-redux";
import language from "../utils/languages";

const SearchGptInput = () => {
    const lang = useSelector((store)=>store.lang.lang)
    console.log("Language from store", lang);
    
  const [seachInput, setSeachInput] = useState("");
  return (
    <div className="flex items-baseline justify-center">
      <div className=" mt-[15%] w-1/2 rounded bg-black p-2">
        <input
          placeholder={language[lang].seachPlaceHolder}
          value={seachInput}
          onChange={(e) => setSeachInput(e.target.value)}
          className=" p-2 w-[83%]"
        />
        <button className="p-2 pl-4 pr-4 bg-red-600 text-white text-lg rounded ml-2 w-[15%]">
          {language[lang].Search}
        </button>
      </div>{" "}
    </div>
  );
};

export default SearchGptInput;
