import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header';
import AstroPostGrid from './components/astropost/AstroPost';

const apiKey = process.env.REACT_APP_APOD_KEY;

const App = () => {
  const [itemsData, setItemsData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItemsData = async () => {
      const result = await axios(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)

      console.log(result.data);
      setItemsData(result.data)
      setIsLoading(false)
    }

    fetchItemsData()
  }, [])
 
  if (!itemsData) return <div />

  return <div className="container">
    <Header/>  
    <AstroPostGrid isLoading={isLoading} itemsData={itemsData}/>
  </div>
}

export default App;
