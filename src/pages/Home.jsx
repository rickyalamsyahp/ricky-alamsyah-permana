import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../style/home.css";
// import "../styles/post.css";
const Home = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="left">
            <p className="title">Ricky</p>
          </div>
        </div>
      </div>
      <div className="home">
        <div>
          <input
            className="input"
            type="text"
            //   value={id}
            //   onChange={(e) => setId(e.target.value)}
            placeholder="Search Username"
          />
        </div>

        <div className="cardHome">
          <div className="left">
            <p className="title">Ricky</p>
            <p className="body">ALamsyah Permana</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
