import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { MAIN_LOGO, USER_AVATAR ,lang} from "../utils/constant";
import { toggleSearchView } from "../utils/configSlice";
import { updateLanguages } from "../utils/languagesSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const ObjStore = {
          userName: user.displayName,
          userId: user.uid,
          emailId: user.email,
        };
        dispatch(addUser(ObjStore));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  const signOutFromAPI = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("Sign Out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleSeachButton = () => {
    dispatch(toggleSearchView());
  };
  const handleLanguageUpdate=(e)=>{
    console.log(e.target.value);
    dispatch(updateLanguages(e.target.value))
  }
  return (
    <div className="flex justify-between p-4 absolute wx-8 w-screen py-2 z-10">
      <div>
        <img className="w-40 h-30  " src={MAIN_LOGO} alt="Mountain" />
      </div>
      {/* <div onClick={()=>navigate("/product")}>
        <h2 className=" text-white">Movies</h2>
      </div> */}
      {user && (
        <div className="flex m-2 items-center">
          <duv className="bg-indigo-500 mx-4 rounded-sm p-2">
            <select name="lang" 
            onChange={handleLanguageUpdate}>
              {lang.map((languages) => (
                <option  key={languages.id} className="p-2 bg-indigo-500 " value={languages.value}>
                  {languages.title}
                </option>
              ))}
            </select>
          </duv>
          <div className=" bg-indigo-500 mx-4 p-2 rounded-sm">
            <button onClick={() => handleSeachButton()} className=" text-white">
              Seach GPT
            </button>
          </div>
          <img alt="user logo" className="h-10 w-10" src={USER_AVATAR} />
          <div className="mx-2">
            <p className="text-white">{user.userName}</p>
            <p className="text-white" onClick={() => signOutFromAPI()}>
              SignOut
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
