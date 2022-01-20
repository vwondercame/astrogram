import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header";
import AstroPost from "./components/astropost/AstroPost";
import Stars from "./components/stars/Stars";

const apiKey = process.env.REACT_APP_APOD_KEY;

const App = () => {
  const [itemsData, setItemsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const generateRandomDate = () => {
    const year = Math.floor(Math.random() * 18) + 1;
    const day = Math.floor(Math.random() * 27) + 1;
    const month = Math.floor(Math.random() * 11) + 1;
    const fullDate = `20${year > 9 ? year : `0${year}`}-${
      month > 9 ? month : `0${month}`
    }-${day > 9 ? day : `0${day}`}`;
    return fullDate;
  };
  let generatedDate = `&date=${generateRandomDate()}`;

  useEffect(() => {
    const fetchItemsData = async () => {
      const result = await axios(
        // api request to a random date
        `https://api.nasa.gov/planetary/apod?${generatedDate}&api_key=${apiKey}`
      );
      console.log(result.data);
      setItemsData(result.data);
      setIsLoading(false);
    };

    fetchItemsData();
  }, []);

  if (!itemsData) return <div />;

  return (
    <div className="container">
      <Header />
      <AstroPost isLoading={isLoading} itemsData={itemsData} />
      <Stars />
    </div>
  );
};

export default App;