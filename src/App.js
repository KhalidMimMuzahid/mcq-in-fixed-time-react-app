import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quizes from "./Pages/Quizes/Quizes";

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
