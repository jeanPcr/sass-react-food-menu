import React, { useState } from "react";
import "./card.scss";
const Card = ({ category }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className="card-container"
      onClick={() => setShowOptions(!showOptions)}
    >
      {showOptions ? (
        <ul className="card-list">
          {category.options.map((option) => {
            return <li key={option}>{option}</li>;
          })}
        </ul>
      ) : (
        <>
          <div className="top-card">
            <img className="card-img" src={category.img} alt={category.name} />
          </div>
          <div className="bottom-card">{category.name}</div>
        </>
      )}
    </div>
  );
};

export default Card;
