import React from "react";
import "./Introduction.scss";
import profileImage from "../../assets/images/images.jpeg";

export const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introduction__container">
        <div>
          <img src={profileImage} alt="" />
        </div>
        <div className="introduction__text">
          <div className="introduction__start">Hello My Name is</div>
          <h2 className="introduction__heading">Lorem, ipsum.</h2>
          <div className="introduction__description">
            I am a Web developer. I have a hands on experience on Angular and
            react .
          </div>
        </div>
      </div>
    </section>
  );
};
