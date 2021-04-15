import React from "react";
import beer from "../../assets/Icons/Beer.png";
import burger from "../../assets/Icons/Burger.png";
import cereal from "../../assets/Icons/Cereal.png";
import eggs from "../../assets/Icons/Eggs.png";
import hotdog from "../../assets/Icons/Hotdog.png";
import meat from "../../assets/Icons/Meat.png";
import pizza from "../../assets/Icons/Pizza.png";
import sandwich from "../../assets/Icons/Sandwich.png";
import { useState } from "react";
import "./container.scss";
const Container = () => {
  const initCategories = [
    {
      name: "Beer",
      img: beer,
      options: ["IPA", "Brown Ale", "Porter", "Stout"],
    },
    {
      name: "Burger",
      img: burger,
      options: ["Cheese", "Tex-Mex", "Aloha", "Portobello"],
    },
    {
      name: "Cereal",
      img: cereal,
      options: ["Oats", "Wheat", "Rice", "Maize"],
    },
    {
      name: "Eggs",
      img: eggs,
      options: ["Boiled", "Scrambled", "Omelet", "Over"],
    },
    {
      name: "Hotdog",
      img: hotdog,
      options: ["Chicago", "Corney", "Polish", "Italian"],
    },
    {
      name: "Meat",
      img: meat,
      options: ["Duck", "Rabbit", "Goose", "Turkey"],
    },
    {
      name: "Pizza",
      img: pizza,
      options: ["Sicilian", "Neapolitan", "Greek", "California"],
    },
    {
      name: "Sandwich",
      img: sandwich,
      options: ["French", "Cheese", "Croque", "Club"],
    },
  ];
  const [categories, setcategories] = useState(initCategories);
  return (
    <div className="menu-container">
      <div className="bars"></div>
      <section className="top">Categories</section>
      <section className="bottom">
        {categories.map((category) => {
          return <div>{category.name}</div>;
        })}
      </section>
    </div>
  );
};

export default Container;
