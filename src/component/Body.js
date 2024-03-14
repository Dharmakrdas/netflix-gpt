import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Browser from "./Browse";
import Optimization from "../practice/performanceApp";
import PerformanceApp from "../practice/performance1";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "optimzation",
      element: (
        <>
          <Optimization />
          <PerformanceApp />
        </>
      ),
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const ObjStore ={ userName: user.displayName,userId:user.uid,emailId:user.email} 
        dispatch(addUser(ObjStore));
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
  },[]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
