import React, { useState } from "react";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { FaRegHeart as HeartIconFilled } from "react-icons/fa";

const AstroPost = ({ itemsData, isLoading }) => {
  const [isLiked, setIsLiked] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const resetPhoto = () => {
    window.location.reload();
  };

  const toggleIsLiked = () => {
    setIsLiked(!isLiked);
  };

  const text = itemsData.explanation;

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section className="card">
        <div className="card__container">
          <img
            className="card__image"
            src={itemsData.url}
            alt={itemsData.title}
          />
        </div>

        <div className="card__description">
          <h2 className="card__description--title">{itemsData.title}</h2>
          <p className="card__description--date">{itemsData.date}</p>
          <p className="card__description--subtitle">
            {showMore ? text : `${text.substring(0, 350)}`}
            <button
              className="card__description--button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </p>

          <div className="card__description--button-container">
            <button
              onClick={resetPhoto}
              className="card__description--button-reset"
              id="button"
            >
              {" "}
              Next Photo
            </button>

            <button
              onClick={toggleIsLiked}
              className="card__description--button-like"
            >
              {isLiked ? (
                <HeartIcon color="red" />
              ) : (
                <HeartIconFilled color="grey" />
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AstroPost;
