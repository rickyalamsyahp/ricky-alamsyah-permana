import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../style/home.css";
// import "../styles/post.css";
const Home = ({ title }) => {
  const [username, setUsername] = useState("");
  const [userClick, setUserClick] = useState("");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    const url = `https://api.github.com/users/${username}/repos`;
    const data = await Axios.get(url);
    setUserClick(username);
    console.log(data.data);
    setDatas(data.data);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="left">
            <p className="title">{title}</p>
          </div>
        </div>
      </div>
      <div className="home">
        <div className="input-search">
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search Username"
          />
          <button className="button-cari" onClick={() => submit()}>
            Cari
          </button>
        </div>
        <div>
          <p>{`Ini adalah list repo dari ${userClick}`}</p>
        </div>
        {datas.map((d) => (
          <div className="cardHome">
            <div className="left">
              <p className="title">{d.name}</p>
              <p className="body">{d.url}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
