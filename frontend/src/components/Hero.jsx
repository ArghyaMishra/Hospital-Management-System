import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            AIIMS Delhi is a premier medical institution and state-of-the-art healthcare
            facility dedicated to providing comprehensive medical services with compassion and
            world-class expertise. Our team of skilled medical professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            AIIMS Delhi, we prioritize your well-being, ensuring optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
