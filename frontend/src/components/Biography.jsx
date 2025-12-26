import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to AIIMS Delhi, an integrated modern healthcare facility
            dedicated to exceptional patient care, seamless appointment scheduling, and
            efficient clinical workflows.
          </p>
          <p>
            This entire Hospital Management System was designed, engineered, and developed
            exclusively by <strong>Arghya Mishra</strong>.
          </p>
          <p>
            From the robust Node.js and Express backend with MongoDB database models to the responsive
            React-powered patient portal and administrative dashboard, all modules were built solely
            by Arghya Mishra.
          </p>
          <p>
            Our mission is to bring compassionate care and advanced technology together, offering
            patients, doctors, and hospital administrators a reliable digital healthcare experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
