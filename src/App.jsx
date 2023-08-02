import { Outlet } from "react-router-dom";
import NavBar from "./Home/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
