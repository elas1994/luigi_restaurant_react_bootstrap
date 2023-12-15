import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar1 />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
