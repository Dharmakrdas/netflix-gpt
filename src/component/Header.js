import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { MAIN_LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const ObjStore ={ userName: user.displayName,userId:user.uid,emailId:user.email} 
        dispatch(addUser(ObjStore));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
        navigate('/')
      }
      return ()=> unsubscribe();
    });
  },[]);

  const signOutFromAPI = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign Out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between p-4 absolute wx-8 w-screen bg-gradient-to-b from-black py-2 z-10">
      <div>
        <img
          className="w-40 h-30  "
          src={MAIN_LOGO}
          alt="Mountain"
        />
      </div>
      {user && (
        <div className="flex m-2 items-center">
          <img
            alt="user logo"
            className="h-10 w-10"
            src={USER_AVATAR}
          />
          <div className="mx-2">
            <p>{user.userName}</p>
            <p onClick={() => signOutFromAPI()}>SignOut</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
