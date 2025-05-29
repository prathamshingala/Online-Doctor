import React from "react";
import certi from "./Assets/Media/certified.jpg";

export default function About() {
  return (
    <>
      <div className=" container" id="hero">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="hero-section">
              <h1>About Us</h1>
              <h1>Certified Doctors Committed to Excellence.</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                modi at fugit, rem ut consectetur? Eveniet reiciendis inventore
                animi beatae aliquam vitae voluptates, molestias rerum officia
                possimus
              </h4>
              <button className="btn btn-outline-success mt-4" type="submit">
                Read More
              </button>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <img src={certi} alt="hero" className="certi" />
          </div>
        </div>
      </div>
    </>
  );
}
