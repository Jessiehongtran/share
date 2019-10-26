import React, { useState } from "react";
// import SignUp from "./components/signUp";
// import Login from "./components/login";
import { Route, Link } from "react-router-dom";
// import CreateProfile from "./components/createProfile";
// import ChooseCategory from "./components/chooseCate";
// import AddCategory from "./components/addCategory";
import CreateShare from "./createShare";
import ShareFeed from "./shareFeed";
import Intro from "./intro";

import Inventory from "./inventory";
import Help from "./help";
import Fraud from "./fraud";
import Community from "./community";

import "./navLink.css";

const NavLink = () => {
  const [shareList, setShareList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  console.log("category_id", categoryId);
  return (
    <div className="nav">
      <ul className="nav-bar">
        <li>
          <Link exact to="/" activeClassName="activeNavButton">
            Home
          </Link>
        </li>
        {/* Commented code to use if we want a dropdown tab */}
        {/* <div className="dropdown">
          <button className="dropbtn">
            Articles
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <Link to="/recentarticles" activeClassName="activeNavButton">
              Recent Articles
            </Link>

            <Link to="/beginnersguide" activeClassName="activeNavButton">
              Beginner's Guide
            </Link>
            <Link to="/expertsguide" activeClassName="activeNavButton">
              Experts's Guide
            </Link>
          </div>
        </div> */}
        <li>
          <Link to="/share" activeClassName="activeNavButton">
            Share
          </Link>
        </li>
        <li>
          <Link to="/inventory" activeClassName="activeNavButton">
            Check inventory
          </Link>
        </li>
        <li>
          <Link to="/help" activeClassName="activeNavButton">
            Help
          </Link>
        </li>
        <li>
          <Link to="/report-fraud" activeClassName="activeNavButton">
            Report Fraud
          </Link>
        </li>
        <li>
          <Link to="/community" activeClassName="activeNavButton">
            Create Community
          </Link>
        </li>
      </ul>
      <Route exact path="/" component={Intro} />
      <Route path="/share" component={CreateShare} />
      <Route path="/collect" component={ShareFeed} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/help" component={Help} />
      <Route path="/report-fraud" component={Fraud} />
      <Route path="/community" component={Community} />
    </div>
  );
};

export default NavLink;
