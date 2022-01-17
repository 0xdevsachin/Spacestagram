import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/card.component";
import Header from "./Components/header/header.component";
import axios from "axios";
import Loading from "./Components/Loading/loading";
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
      {data ? <Card data={data} /> : <Loading />}
    </>
  );
}

export default App;
