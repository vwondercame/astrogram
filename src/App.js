import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/ui/Header';
import AstroPostGrid from './components/ui/astropost/AstroPostGrid';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.nasa.gov/planetary/apod?api_key=kYX6Vhhdr0tPshTV6FanxSs2DcXfg0lNqaiGZk5h`)

      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return <div className="container">
    <Header/>
    <AstroPostGrid isLoading={isLoading} items={items}/>
  </div>
}

export default App;
