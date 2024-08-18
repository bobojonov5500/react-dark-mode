import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Forum from "./components/Forum";
import Home from "./components/Home";
import List from "./components/List";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { Routes, Router, Route, Navigate } from "react-router-dom";
import NightMode from "./components/NightMode";
import Form from "./components/CRUD/Form";
import Item from "./components/Item";
import DataList from "./components/crud-withoutmodal/DataList";
import Create from "./components/crud-withoutmodal/Create";
import Edit from "./components/crud-withoutmodal/Edit";
import Read from "./components/crud-withoutmodal/Read";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Forum /> */}
      {/* <List /> */}
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"contact"} element={<Contact />} />
        <Route path="*" element={<h1>page not found</h1>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/nightmode" element={<NightMode />} />
        <Route path="/items" element={<Form />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/list" element={<DataList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read/>}/>
      </Routes>
    </div>
  );
}

export default App;
