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
          <h2 className="introduction__heading">Sarvesh Patil</h2>
          <div className="introduction__description">
            I am a Web developer. I have a hands on experience on Angular and
            react . Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Hic nobis omnis fugit dolorem itaque enim atque cum iusto corrupti
            eaque vel, ex rerum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Optio fuga quam adipisci, dolores unde quasi quod
            vero reprehenderit odit quidem repellat repellendus ab consectetur
            pariatur, natus explicabo sapiente eveniet voluptate. Ex neque
            blanditiis cupiditate voluptatibus consequatur atque est quis
            impedit?
          </div>
        </div>
      </div>
    </section>
  );
};
