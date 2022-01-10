import React from "react";

const AstroPost = ({ itemsData, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="card">
      <div className="card__container">
        <img className="card__image" src={itemsData.url} alt={itemsData.title} />
      </div>

      <div className="card__description">
          <h2 className="card__description--title">{itemsData.title}</h2>
          <p className="card__description--date">{itemsData.date}</p>
          <p className="card__description--subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, totam incidunt suscipit ea numquam voluptate sint error!</p>
          {/* <p className="card__description--subtitle">{itemsData.explanation}</p> */}
      </div>

    </section>
  );
};

export default AstroPost;