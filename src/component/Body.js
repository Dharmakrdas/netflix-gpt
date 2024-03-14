import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import Browser from "./Browse";
import Optimization from "../practice/performanceApp";
import PerformanceApp from "../practice/performance1";

const Body = () => {
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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
