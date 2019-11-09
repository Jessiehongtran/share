import React, { useState } from "react";
import SignUp from "./components/signUp";
import Login from "./components/login";
import { Route, Link } from "react-router-dom";
import ToggleMenu from "./components/menu"
import NavLink from "./components/navLink";
import "./App.css";

function App() {
  const [shareList, setShareList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  console.log("category_id", categoryId);

  //if shareFeed's router is set '/' as default, there should be authentication on the server
  return (
    <div className="App">
      <div className="links">
        {/* <ToggleMenu/> */}
        <NavLink />
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
