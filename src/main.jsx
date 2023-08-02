import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Task from "./Task/Task.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addTask",
        element: <Task />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-4 my-1">
    <RouterProvider router={router} />
  </div>
);
