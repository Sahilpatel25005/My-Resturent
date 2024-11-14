import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../../image/banner.jpeg";
import "../styles/HomeStyle.css";

function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food website</h1>
          <p>Best food in India</p>
          <Link to={"/manu"}>
            <button>Order now </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
