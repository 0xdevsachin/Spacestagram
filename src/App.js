import React, { useEffect, useState} from "react";
import "./App.css";
import Card from "./Components/Card/card.component";
import Header from "./Components/header/header.component";
import axios from "axios";
import Loading from "./Components/Loading/loading";
import { Routes, Route } from "react-router-dom";
import Like from "./Components/Like/Like";
function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchdata = async () => {
      const Date_Range = "2021-10-01";
      const API_KEY = process.env.REACT_APP_API_KEY;
      const Base_Url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
      await axios
        .get(`${Base_Url}&start_date=${Date_Range}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchdata();
  }, []);
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={data ? <Card data={data} /> : <Loading />} />
          <Route path="like" element={<Like />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


const Footer = () =>{
  return (
    <div className="header">
      <a href="https://github.com/0xdevsachin/spacestagram" target='_blank' rel="noreferrer"><h1><i className="fab fa-github"></i></h1></a>
    </div>
  )
}