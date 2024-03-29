import { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidation } from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {

  const dispatch = useDispatch();
  const [isErrorMessage, setErrorMessage] = useState(null);
  const [isSignUp, setSignUp] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const signIn = () => {
    const message = checkValidation(email.current.value, pass.current.value);
    console.log(message);
    setErrorMessage(message);
    if (message !== null) return;
    console.log("come down");
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              console.log("updated");

              const { uid, email, displayName, photoURL } = auth.currentUser;
              const ObjStore = {
                userName: displayName,
                userId: uid,
                emailId: email,
                photoURL: photoURL,
              };
              dispatch(addUser(ObjStore));
            })
            .catch((err) => {
              console.log(err.message);
            });

          console.log("sucessfully signup");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      console.log("sign in");
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in
          console.log("SUcessfully Sign IN ");
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 bg-black w-1/3 my-20 mx-auto right-0 left-0 rounded-md  opacity-85"
      >
        <h1 className=" text-white text-lg w-20 font-bold m-2">
          {isSignUp ? "Sign Up" : "Sig In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            className=" border-2 m-2 w-full rounded-sm p-2 text-neutral-500"
            type="text"
            placeholder="Name"
          ></input>
        )}
        <input
          ref={email}
          className=" border-2 m-2 w-full rounded-sm p-2 text-neutral-500"
          type="text"
          placeholder="Email or phone number"
        ></input>
        <input
          ref={pass}
          className=" border-2 m-2 w-full rounded-sm p-2 text-neutral-500"
          type="password"
          placeholder="Password"
        ></input>
        {isErrorMessage && (
          <p className=" text-red-700 m-2">{isErrorMessage}</p>
        )}
        <button
          onClick={() => signIn()}
          className=" bg-red-600 m-2 p-2 w-full rounded-sm my-10 text-white"
        >
          {isSignUp ? "Sign Up" : "Sig In"}
        </button>
        <div className=" inline-flex items-center">
          <h3 className=" text-white  text-lg w-[200] ml-2">
            {isSignUp ? "Already have an Account? " : "New to netflix? "}
          </h3>
          <h1
            onClick={() => setSignUp(!isSignUp)}
            className=" text-white  text-lg"
          >
            {isSignUp ? "Sign In" : "Sig Up"}
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
