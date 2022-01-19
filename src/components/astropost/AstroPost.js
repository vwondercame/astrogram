import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";


const AstroPost = ({ itemsData, isLoading }) => {
  const [isClick, setClick] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const resetPhoto = () => {
    window.location.reload();
  }
  
  const text = itemsData.explanation 

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
    <section className="card">
      <div className="card__container">
        <img className="card__image" src={itemsData.url} alt={itemsData.title} />
      </div>

      <div className="card__description">
          <h2 className="card__description--title">{itemsData.title}</h2>
          <p className="card__description--date">{itemsData.date}</p>
            <p className="card__description--subtitle">
              {showMore ? text : `${text.substring(0, 250)}`}
              <button className="btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
              </button>
             
              </p>
          <button onClick={resetPhoto} className="card__description--button"> Next Photo</button>
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
    </section>
    </>
  );
};

export default AstroPost;
