import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Quizes from "./Pages/Home/Quizes/Quizes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quizs",
      element: <Quizes />,
    },
  ]);

  return (
    <div className="App  h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
