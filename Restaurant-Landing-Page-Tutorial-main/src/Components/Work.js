import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const Maching = [
    {
      img: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      img: ChooseMeals,
      title: "Choose Meals",
      text: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: DeliveryMeals,
      title: "Delivery Meals",
      text: " Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis
          elementum interdum facilisi bibendum
        </p>
      </div>
      <div className="work-section-bottom">
        {Maching.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.img} alt="/'/'/'"/>
              </div>
              <h1>{data.title}</h1>
              <p>{data.text}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
