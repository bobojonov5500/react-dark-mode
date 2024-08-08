import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Forum from "./components/Forum";
import Home from "./components/Home";
import List from "./components/List";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { Routes, Router, Route } from "react-router-dom";
import NightMode from "./components/NightMode";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Forum /> */}
      {/* <List /> */}
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"contact"} element={<Contact />} />
        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/nightmode" element={<NightMode/>} />
      </Routes>
    </div>
  );
}

export default App;
